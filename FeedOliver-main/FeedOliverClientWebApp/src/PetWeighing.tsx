import "./base.css";

import styles from './components/pet.module.css'
import { SoftKeys, TopNavBar, IconButton, Icon } from './components/navbar'
import {
    AnimalInfo, ButtonRow, Table, Graph,  // elements
    getLatestWeight// functions
} from './components/petComponents';
import { useState } from "react";
import { isNumber } from "igniteui-react-core";


interface PetWeighings {
    weighings: Record<number, number>,
    HealthyWeight: number,
    CurrentObjective: number,
    ETA: string,
}

function PetWeightTable(props: any) {
    const petWeightData: PetWeighings = props.weightData;
    const weighings: Record<number, number> = petWeightData.weighings;
    const currentWeight: number = getLatestWeight(weighings);

    const keyValues = {
        "Current Weight": currentWeight + " kg",
        "Healthy Weight": petWeightData.HealthyWeight + " kg",
        "Current Objective": petWeightData.CurrentObjective + " kg",
        "Estimated Time to Objective": petWeightData.ETA,
    }

    return (
        <>
            <div className={styles.tableContainer}>
                <Table keyValues={keyValues} />
            </div>
        </>
    );
}


function getPetWeightData(): PetWeighings {
    /** imita retrieve da base de dados */

    /* Gerar dados de peso */
    const weighing: Record<number, number> = {};

    const dots: number = 13;
    const day: Date = new Date();
    day.setDate(day.getDate() - 4 * dots - 30);

    for (let i = 0; i < dots; i++) {
        day.setDate(day.getDate() + 4);
        weighing[day.valueOf()] = Math.round((-Math.sqrt(i / dots) + 6.5) * 100) / 100;
    }

    /* Criar interface com os dados gerais */
    const petWeightData: PetWeighings = {
        weighings: weighing,
        HealthyWeight: 4.5,
        CurrentObjective: 5,
        ETA: "1 month",
    }

    return petWeightData
}



function AppBody(props: any) {
    const petWeightData: PetWeighings = getPetWeightData()
    const weighings: Record<number, number> = petWeightData.weighings;
    const petID = props.petID;

    const [x, setX]: [String[], any] = useState(
        Object.keys(weighings).map((ele) => {
            return (new Date(parseInt(ele)))
                .toISOString()
                .split('T')[0]
        })
    );
    const [y, setY]: [number[], any] = useState(
        Object.keys(weighings)
            .map((ele) => {
                return parseFloat(weighings[ele]);
            })
    );

    const handleSaveValue = () => {
        const inputBox: HTMLInputElement = document.getElementById("newWeight");
        const newWeight = parseFloat(inputBox.value);
        if (isNaN(newWeight) || newWeight<0)
            return;

        setX([
                ...x,
                new Date(Date.now())
                    .toISOString()
                    .split('T')[0]
        ])
        setY([
                ...y,
                newWeight
        ]);
        console.log(x);
        console.log()
    }

    function toggleModal({target}: {target: any}) {
        const modal = document.getElementById("weightModal");
        if (target != modal) {
            return
        }
        modal?.classList.toggle(`${styles.modalDisable}`)
    }

    function openModal() {
        const modal = document.getElementById("weightModal");
        modal?.classList.toggle(`${styles.modalDisable}`)
    }

    return (
        <main style={{ marginTop: "80px", padding: "10px 10px 80px 10px"  }}>
            <div className={styles.row}>
                <ButtonRow petID={petID} />
            </div>

            <div className={styles.row}>
                <PetWeightTable weightData={petWeightData} />
            </div>
            <div className={styles.row}>
                <button className={styles.submitButton} onClick={openModal}>
                    Add new weighing
                </button>
            </div>
            <div className={`${styles.modal} ${styles.modalDisable}`} id="weightModal" onClick={toggleModal}>
                <div className={styles.modalContent}>
                    <span style={{display: 'flex', flexDirection: 'row-reverse',}}>
                        <button className={styles.closeButton} onClick={openModal}>X</button>
                    </span>
                    <form style={{display: 'flex', alignContent: 'center', flexDirection: 'column'}}>
                        <label htmlFor="newWeight">
                            <h3>Insert New Weighing (kg)</h3>
                        </label>
                        <input type="number" step="0.01" id="newWeight" className={styles.input}/>
                    
                        <input type="button" className={styles.submitButton} onClick={handleSaveValue} value="Submit Weighing" />
                    </form>
                </div>
            </div>

            <div className={styles.row} >
                <Graph x={x} y={y} />
            </div>
        </main>
    );
}

function PetWeighing(props: any) {
    const openNotifications = () => {
        alert("hey");
    }
    const birth: Date = new Date("2019-03-19");
    const pet: AnimalInfo = {
        type: "cat",
        name: "Fluffy",
        breed: "Persian Cat",
        sex: "M",
        birthday: birth,
        weight: 5.5,
        bodyCondition: 6,
        dailyActivity: "Scarce",
        sterilized: true,
        veterinarian: "Dr. Daniela",
    }

    const sex = pet.sex == "M" ? "male" : "female";

    return (
        <>
            <TopNavBar>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Icon className={styles.petIcon} src="/cat.svg" />
                    <span className={styles.title}>{pet.name}</span>
                    <Icon src={'/' + sex + '.svg'} />
                </div>

                <div style={{ display: 'flex' }}>
                    <IconButton onClick={openNotifications} src="Bell.svg" />
                    <IconButton onClick={() => history.go(-1)} src="back.svg" />
                </div>
            </TopNavBar>


            <AppBody animalInfo={pet} petID={props.petID} />

            <SoftKeys selected={window.location.pathname} />
        </>
    )
}

export default PetWeighing;