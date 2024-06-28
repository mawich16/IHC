import './App.css'
import styles from './components/pet.module.css'
import { SoftKeys, TopNavBar, IconButton, Icon } from './components/navbar'
import { AnimalInfo, ButtonRow, Table, Graph, Card, // elements
         calculateAge, bodyConditionTostring, getLatestWeight // functions
        } from './components/petComponents';
import { useState } from 'react';

function PetInfo(props) {
    const pet: AnimalInfo = props.animalInfo;
    const keyValue: Record<string, any> = {
        "Breed": pet.breed,
        "Age": calculateAge(pet.birthday),
        "Weight": pet.weight,
        "Body Condition": bodyConditionTostring(pet.bodyCondition),
        "Daily Activity": pet.dailyActivity,
        "Sterilized": pet.sterilized ? "Yes" : "No",
        "Vet": pet.veterinarian,
    };
    const notes = ["Epilepsy", "Allergic to nuts"];
    return (
        <>
            <div className={styles.tableContainer}>
                <Table keyValues={keyValue}/>
            </div>
            <div className={styles.notes}>
                Notes:
                <ul>
                    {notes.map((note) => {
                        return <li>{note}</li>
                    })}
                </ul>
            </div>
        </>
    );
}

function WeightPage(props: any) {
    const petWeightData: PetWeighings = getPetWeightData()
    const weighings: Record<number, number> = petWeightData.weighings;

    return (
        <>
            <div className={styles.row}>
                <ButtonRow/>
            </div>
            <div className={styles.row}>
                <PetWeightTable weightData={petWeightData} />
            </div>
            <div className={styles.row}>
                <Graph weightData={weighings}/>
            </div>
        </>
    );
}

function AppointmentsPage(props: any) {
    const [numCards, setNumCards] = useState(2);

    const cardData = [
        {
        title: "Next Appointment",
        body:
            [
                {text: "15-04-2023", icon:"/smallCalendar.svg"},
                {text: "16h30", icon: "/smallClock.svg"},
                {text: "Motive: Sterilization",icon: null},
                {text: "Notes: Pet cannot eat 8 hours prior to the surgery"},
            ]
        },
        {
        title: "Last Appointment", 
        body: 
            [
                {text: "30-03-2023", icon:"/smallCalendar.svg"},
                {text: "Prescription: Fentanyl patches", icon: "/drug.svg"},
                {text: "Notes: The patches must be changed weekly", icon: null},
            ]
        }
    ]
    const appointments: Array<Record<string, any>> = cardData;
    return (
        <div className={styles.cardWrapper}>
            {appointments.map((appointment, index) => {
                if (index > numCards) {
                    return;
                }
                return (<Card cardData={appointment}/>)
            })}
        </div>
    );
}


function NutritionPage(props: any) {
    const cardData = [
        {title: "Next Appointment", date:"15-04-2023", time:"16h30", Motive: "Sterilization", Notes: ["Pet cannot eat 8 hours prior to the surgery"]},
        {title: "Last Appointment", date:"30-03-2023", Prescription: ["Fentanyl patches"], Notes: ["The patche must be changed weekly"]}
    ]
    const diets: Array<Record<string, any>> = cardData;

    return (
        <>
            <ScrollingCards cardData={diets}/>
        </>
    );
}

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
    
    const dots: number = 10000;
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
    const pet: AnimalInfo = props.animalInfo;

    return (
        <main style={{ marginTop: "80px", marginBottom: "80px"}}>
            <AppointmentsPage />
        </main>
    );
}

function PetPage(props: any) {
    const openNotifications = () => {
        alert("hey");
    }
    const birth: Date = new Date("2019-03-19");
    const animal: AnimalInfo = {
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

    const sex = animal.sex == "M" ? "male" : "female";

    return (
        <>
            <TopNavBar>
                <div style={{ display: 'flex', alignItems: 'center'}}>
                    <Icon className={styles.petIcon} src="/cat.svg" />
                    <span className={styles.title}>{animal.name}</span>
                    <Icon src={'/' + sex + '.svg'} />
                </div>

                <div style={{ display: 'flex' }}>
                    <IconButton onClick={openNotifications} src="Bell.svg" />
                    <IconButton onClick={history.back} src="back.svg" />
                </div>
            </TopNavBar>

            <AppBody animalInfo={animal}/>

            <SoftKeys selected={window.location.pathname}/>
        </>
    )
}

export default PetPage;