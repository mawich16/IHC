import styles from "./petCard.module.css";

function petCard(props: {
  id: number;
  name: string;
  breed: string;
  type: string;
}) {
  return (
    <a style={{ textDecoration: "none" }} href={`/pet/${props.id}`}>
      <div className={styles.petCard}>
        <img className={styles.petType} src={`/${props.type}.svg`} />
        <div>
          <h2 className={styles.petName}>{props.name}</h2>
          <h3 className={styles.petBreed}>{props.breed}</h3>
        </div>
      </div>
    </a>
  );
}

export default petCard;
