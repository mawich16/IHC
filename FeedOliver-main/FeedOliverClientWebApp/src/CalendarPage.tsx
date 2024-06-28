import "./base.css";
import { SoftKeys, TopNavBar, IconButton } from "./components/navbar";
import CalendarCard from "./components/calendarCard";
import AppointmentCard from "./components/appointmentCard.tsx";
import { useEffect, useState } from "react";

function AppBody() {
  //
  // Meant to mimic SQL query for getting the appointments for all the animals for the given owner
  const appointments: Array<Record<any, any>> = [
    {
      app_id: 0,
      pet_id: 2,
      pet_name: "Fluffly",
      date: "2024-5-1",
      time: "09:00",
      motive: "Vaccination",
      notes: "This is sample text for development purposes",
    },
    {
      app_id: 1,
      pet_id: 2,
      pet_name: "Fluffly",
      date: "2024-5-15",
      time: "10:00",
      motive: "Checkup",
      notes: "This is sample text for development purposes",
    },
    {
      app_id: 2,
      pet_id: 1,
      pet_name: "Bobby",
      date: "2024-6-1",
      time: "09:00",
      motive: "Vaccination",
      notes: "This is sample text for development purposes",
    },
    {
      app_id: 3,
      pet_id: 0,
      pet_name: "Loki",
      date: "2024-6-1",
      time: "10:00",
      motive: "Checkup",
      notes: "This is sample text for development purposes",
    },
    {
      app_id: 4,
      pet_id: 3,
      pet_name: "Pussy",
      date: "2024-6-15",
      time: "09:00",
      motive: "Vaccination",
      notes: "This is sample text for development purposes",
    },
    {
      app_id: 4,
      pet_id: 3,
      pet_name: "Preto",
      date: "2024-5-1",
      time: "09:00",
      motive: "Vaccination",
      notes: "This is sample text for development purposes",
    },
  ];

  const [daysToHighlight, setDaysToHightlight] = useState<number[]>([]);

  const [selectedYear, setYear] = useState((new Date()).getFullYear());
  const [selectedMonth, setMonth] = useState((new Date()).getMonth() + 1);
  const [selectedDay, setDay] = useState((new Date()).getDate());
  const [VisibleAppointments, setVisibleAppointments]= useState<any[]>([]);

  useEffect(() => {
    /**
     *  Render appointments on chosen day 
     *  Warning! logica rafeira quanto ao selected year/month !!!!
     */
    const filteredAppointments = appointments.filter(appointment =>
      appointment.date === `${selectedYear}-${selectedMonth}-${selectedDay}`
    );
    setVisibleAppointments(filteredAppointments);

    /**
     *  Set days to highlight 
     */
    setDaysToHightlight(
      appointments.filter((app) => {
        return (new Date(app.date)).getMonth()+1 == selectedMonth &&
             (new Date(app.date)).getFullYear() == selectedYear
      }).map((app) => {
        return ((new Date(app.date)).getDate());
      })
    )
  }, [selectedYear, selectedMonth, selectedDay]);
  return (
    <main
      style={{ marginTop: "80px", paddingBottom: "80px", paddingTop: "20px" }}
    >
      <>
        <CalendarCard appointments={appointments}
          selectedDay={selectedDay}
          setDay={setDay} setMonth={setMonth} setYear={setYear}
          highlight={daysToHighlight}/>

        {VisibleAppointments.map((appointment: Record<string, any>) => (
          <AppointmentCard
            key={appointment.app_id}
            app_id={appointment.app_id}
            pet_id={appointment.pet_id}
            pet_name={appointment.pet_name}
            date={appointment.date}
            time={appointment.time}
            motive={appointment.motive}
            notes={appointment.notes}
          />
        ))}
      </>
    </main>
  );
}

function CalendarPage() {
  const openNotifications = () => {
    alert("hey");
  };

  return (
    <>
      <TopNavBar>
        <div>
          <IconButton
            style={{ width: "70px", height: "70px" }}
            href="/"
            src="FeedOliver.png"
          />
        </div>
        <div>
          <IconButton onClick={openNotifications} src="Bell.svg" />
        </div>
      </TopNavBar>

      <AppBody />

      <SoftKeys selected={window.location.pathname} />
    </>
  );
}

export default CalendarPage;
