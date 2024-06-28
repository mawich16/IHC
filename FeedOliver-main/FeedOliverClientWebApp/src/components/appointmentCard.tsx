import styles from "./appointmentCard.module.css";

function petCard(props: {
  app_id: number;
  pet_id: number;
  pet_name: string;
  date: string;
  time: string;
  motive: string;
  notes: string;
}) {
  return (
    <div className={styles.appointmentCard}>
      <a className={styles.petCard} href={`/pet/${props.pet_id}`}>
        <h2 className={styles.petName}> {props.pet_name} </h2>
        <span className={styles.row}>
          <img className={styles.icons} src="../smallCalendar.svg" />
          <p className={styles.date_time}> {props.date} </p>
        </span>
        <span className={styles.row}>
          <img className={styles.icons} src="../smallClock.svg" />
          <p className={styles.date_time}> {props.time} </p>
        </span>
        <span className={styles.row}>
          <img />
          <span>
            <p className={styles.text_info}>{props.motive} </p>
            <p className={styles.text_info}>{props.notes} </p>
          </span>
        </span>
      </a>
    </div>
  );
}

export default petCard;
