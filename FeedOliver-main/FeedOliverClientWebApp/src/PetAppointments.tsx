import "./base.css";

import styles from "./components/pet.module.css";
import { SoftKeys, TopNavBar, IconButton, Icon } from "./components/navbar";
import { AnimalInfo, ButtonRow, Card } from "./components/petComponents";
import { useState } from "react";

function AppointmentCards() {
  const cardData = [
    {
      title: "Next Appointment",
      body: [
        { text: "15-04-2023", icon: "/smallCalendar.svg" },
        { text: "16h30", icon: "/smallClock.svg" },
        { text: "Motive: Sterilization", icon: null },
        { text: "Notes: Pet cannot eat 8 hours prior to the surgery" },
      ],
    },
    {
      title: "Last Appointment",
      body: [
        { text: "30-03-2023", icon: "/smallCalendar.svg" },
        { text: "Prescription: Fentanyl patches", icon: "/drug.svg" },
        { text: "Motive: Pain management", icon: null },
        { text: "Notes: The patches must be changed weekly", icon: null },
      ],
    },
    {
      title: "10th Appointment",
      body: [
        { text: "20-01-2023", icon: "/smallCalendar.svg" },
        { text: "Motive: Routine checkup", icon: null },
        { text: "Notes: The patches must be changed weekly", icon: null },
      ],
    },
    {
      title: "9th Appointment",
      body: [
        { text: "15-07-2022", icon: "/smallCalendar.svg" },
        { text: "Prescription: Gabapentin oral solution", icon: "/drug.svg" },
        { text: "Motive: Neuropathic pain management", icon: null },
        {
          text: "Notes: Administer 0.5 ml orally twice daily with food",
          icon: null,
        },
      ],
    },
  ];

  const incrementCardsPresented = () => {
    if (numCardsPresented < cardData.length) {
      setNumCards((prevCount) => prevCount + 1);
    }
  };

  const appointments: Array<Record<string, any>> = cardData;
  const [numCardsPresented, setNumCards] = useState(
    Math.min(2, cardData.length)
  );
  return (
    <div className={styles.cardWrapper}>
      {appointments.map((appointment, index) => {
        if (index >= numCardsPresented) {
          return <></>;
        }
        return <Card key={index} cardData={appointment} />;
      })}

      {numCardsPresented < cardData.length ? (
        <button className={styles.submitButton} onClick={incrementCardsPresented}>Load More +</button>
      ) : undefined}
    </div>
  );
}

function AppBody(props: any) {
  return (
    <main style={{ marginTop: "80px", padding: "10px 10px 80px 10px" }}>
      <div className={styles.row}>
        <ButtonRow petID={props.petID} />
      </div>
      <AppointmentCards />
    </main>
  );
}

function PetAppointments(props: any) {
  const openNotifications = () => {
    alert("hey");
  };
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
  };

  const sex = animal.sex == "M" ? "male" : "female";

  return (
    <>
      <TopNavBar>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Icon className={styles.petIcon} src="/cat.svg" />
          <span className={styles.title}>{animal.name}</span>
          <Icon src={"/" + sex + ".svg"} />
        </div>

        <div style={{ display: "flex" }}>
          <IconButton onClick={openNotifications} src="Bell.svg" />
          <IconButton onClick={()=>history.go(-1)} src="back.svg" />
        </div>
      </TopNavBar>

      <AppBody petID={props.petID} />

      <SoftKeys selected={window.location.pathname} />
    </>
  );
}

export default PetAppointments;
