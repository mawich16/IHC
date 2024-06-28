import { Link } from "react-router-dom";
import styles from "./pet.module.css";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
import { useState } from "react";
Chart.register(...registerables);

type AnimalInfo = {
    type: string;
    name: string;
    breed: string;
    sex: string;
    birthday: Date;
    weight: number;
    bodyCondition: number;
    dailyActivity: string;
    sterilized: boolean;
    veterinarian: string;
};

function IconButton(props: Record<string, any>) {
    return (
        /* Implementar com <Link> que funciona melhor */
        <div className={styles.gridItem}>
            <Link
                to={!props.selected ? props.href : undefined}
                className={`${styles.iconButton} ${props.className ? " " + props.className : ""
                    } ${props.selected ? styles.selected : ""}`}
                onClick={props.onClick}
            >
                <img className={styles.icon} src={props.src} style={props.style} />
            </Link>
        </div>
    );
}

function ButtonRow({ petID }: { petID: string }) {
    const page = window.location.pathname;
    const infoPage: Array<string> = ["/pet" + petID, "/pet/" + petID, "/pet/" + petID + "/info"];
    return (
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <div className={styles.gridContainer}>
                <IconButton className={styles.gridItem} src='/info.svg' href={`/pet/${petID}/info`} selected={infoPage.includes(page)} />
                <IconButton className={styles.gridItem} src='/scale.svg' href={`/pet/${petID}/weighing`} selected={page.startsWith(`/pet/${petID}/weighing`)} />
                <IconButton className={styles.gridItem} src='/appointments.svg' href={`/pet/${petID}/appointments`} selected={page.startsWith(`/pet/${petID}/appointments`)} />
                <IconButton className={styles.gridItem} src='/bone.svg' href={`/pet/${petID}/nutrition`} selected={page.startsWith(`/pet/${petID}/nutrition`)} />
            </div>
        </div>
    );
}
function calculateAge(birthDate: Date): string {
    var today = new Date();
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    if (age == 0) return (m % 12) + " months";
    return age + " years";
}

function bodyConditionTostring(bodyCondition: number): string {
    if (3 >= bodyCondition) return "Too thin";
    if (5 >= bodyCondition) return "ideal";
    if (7 >= bodyCondition) return "overweight";
    if (9 >= bodyCondition) return "obese";

    return "invalid number!";
}
function getLatestWeight(weighings: Record<number, number>): number {
    let mostRecent: number = 0;
    for (var weighing in weighings) {
        var weight = parseInt(weighing);
        if (weight > mostRecent) mostRecent = weight;
    }
    return weighings[mostRecent];
}

function Table(props: any) {
    let keys: Array<any>;
    let values: Array<any>;

    if (props.keys && props.values) {
        keys = props.keys;
        values = props.values;
    } else {
        keys = Object.keys(props.keyValues);
        values = keys.map((key) => props.keyValues[key]);
    }

    return (
        <table className="table">
            <tbody>
                {keys.map((key, index) => {
                    return (
                        <tr key={index}>
                            <td>{key}</td>
                            <td>{values[index]}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

function Graph({ x, y }: {x: Array<any>, y: Array<number>}) {
    const data = {
        labels: x,
        datasets: [
            {
                label: 'Weight (kg)',
                data: y,
                borderColor: 'rgb(224, 255, 193)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };
    
    return (
        <div
            className={styles.graph}
            style={{
                background: "#f8f8f8",
                border: "1px solid black",
                display: "flex",
                justifyContent: "center",
            }}
        >
                    <Line 
                        data={data}
                        options={{
                            plugins: {
                              title: {
                                display: true,
                                text: "Pet weight progression"
                              },
                              legend: {
                                display: true
                              },
                            },
                            maintainAspectRatio : false,
                          }}
                    />
        </div>
    );
}

function Card({ cardData }: { cardData: Record<string, any> }) {
    const cardBodyElements: Array<Record<string, any>> = cardData.body;
    return (
        <div className={styles.card}>
            <h2>{cardData.title}</h2>
            {cardBodyElements.map((element, index) => {
                return (
                    <p key={index} style={{}}>
                        <img className={styles.cardIcon} src={element.icon ? element.icon : undefined} />
                        {'  ' + element.text}
                    </p>
                );
            })
            }
        </div>
    );
}


function DietList({diet}: {diet: Array<Record<string, number>>}) {
    const textStyle = { display: 'flex', justifyContent: 'space-between' };
    const totalConsumed: number = diet.reduce(
        (total, current) => total + current.quantity, 0
    )

    return (
        <>
        {diet.map((food, index) => {
            return (
                <p key={index} id={`${index}`} style={textStyle}>
                    <span>{food.name}</span>
                    <span>⇒ {food.quantity} gr</span>
                </p>
            );
        })}
        <p style={textStyle}>
            <b>Total gr consumed / day</b>
            <b>⇒ {totalConsumed} gr</b>
        </p>
        </>
        
    );
}

    function DietCarousel({ diets } : { diets: Record<string, Array<Record<string, number>>>}) {
    const dietNames = Object.keys(diets);
    
    return (
        <div className={styles.carousel} id="carousel">
            {dietNames.map((diet, index) => {
                return (
                    <div className={styles.dietCard} key={index} id={`Card-${index}`}>
                        <span style={{display: 'flex', justifyContent: 'space-between'}}>
                            <h2>Diet {index+1} - {diet}</h2>
                            <strong>{index+1}/{dietNames.length}</strong>
                        </span>
                        <DietList diet={diets[diet]}/>
                    </div>
                );
            })}
        </div>
    );
}

export {
    ButtonRow, Table, Graph, Card, DietCarousel,

    bodyConditionTostring,
    calculateAge,
    getLatestWeight,
};

export type { AnimalInfo };
