import "./base.css";

import styles from './components/pet.module.css'
import { SoftKeys, TopNavBar, IconButton, Icon } from './components/navbar'
import { AnimalInfo, ButtonRow, Table, // elements
         calculateAge, bodyConditionTostring} from './components/petComponents';

function AppBody(props: any) {
    const pet: AnimalInfo = props.animalInfo;
    const keyValue: Record<string, any> = {
        "Breed": pet.breed,
        "Age": calculateAge(pet.birthday),
        "Weight": pet.weight,
        "Body Condition": bodyConditionTostring(pet.bodyCondition) + ` ( ${pet.bodyCondition} )`,
        "Daily Activity": pet.dailyActivity,
        "Sterilized": pet.sterilized ? "Yes" : "No",
        "Vet": pet.veterinarian,
    };
    const notes = ["Epilepsy", "Allergic to nuts"];

    return (
        <main style={{ marginTop: "80px", padding: "10px 10px 80px 10px" }}>
            <div className={styles.row}>
                <ButtonRow petID={props.petID}/>
            </div>
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
        </main>
    );
}

function PetInfo(props: any) {
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
                <div style={{ display: 'flex', alignItems: 'center', overflow: 'hidden'}} >
                    <Icon className={styles.petIcon} src="/cat.svg" />
                    <span className={styles.title}>{animal.name}</span>
                    <Icon src={'/' + sex + '.svg'} />
                </div>

                <div style={{ display: 'flex' }}>
                    <IconButton onClick={openNotifications} src="Bell.svg" />
                    <IconButton onClick={()=>history.go(-1)} src="back.svg" />
                </div>
            </TopNavBar>


            <AppBody animalInfo={animal} petID={props.petID}/>

            <SoftKeys selected={window.location.pathname}/>
        </>
    )
}

export default PetInfo;