import "./base.css";

import styles from './components/pet.module.css'
import { SoftKeys, TopNavBar, IconButton, Icon } from './components/navbar'
import { AnimalInfo, ButtonRow, DietCarousel} from './components/petComponents';
import {retrieveDiets} from './components/dietApi';


function AppBody(props: any) {
    const petID = props.petID;
    const diets: Record<string, Array<Record<string, any>>> = retrieveDiets();
    const notes: Array<string> = [
        "Indicated quantities must be divided into two daily meals",
        "The given three diets must be rotated throughout the week",
        "Allowed extras: 1/2 dental chews OR 1/4 of an apple and 1-2 Naturea snacks",
    ];
    const NoteList: any = notes.map((note, index) => { return <li key={index}>{note}</li>});

    return (
        <main style={{ marginTop: "80px", padding: "10px 10px 80px 10px" }}>
            <div className={styles.row}>
                <ButtonRow petID={petID}/>
            </div>

            <h1>Nutritional Plan</h1>
            <div className={styles.row} style={{flexDirection: 'column', alignItems:'center'}}>
                <DietCarousel diets={diets}/>
            </div>
            {notes.length ?
            <>
                <h1>Notes:</h1>
                <ul>
                    {NoteList}
                </ul>
            </>
                : undefined
            }
        </main>
    );
}

function PetNutrition(props: any) {
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
                    <IconButton onClick={()=>history.go(-1)} src="back.svg" />
                </div>
            </TopNavBar>

            
            <AppBody petID={props.petID} />

            <SoftKeys selected={window.location.pathname}/>
        </>
    )
}

export default PetNutrition;