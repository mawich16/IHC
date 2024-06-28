import styles from './profileCard.module.css';

function ProfileCard(props: any) {
    const image = props.image?props.image:'profileImage.svg'
    return (
        <div className={styles.profileCard} >
            <div>
                <img src={image} style={{marginRight: "40px"}} />
            </div>
            <div>
                <p>Name: {props.name} </p>
                <p> Email: {props.email} </p>
            </div>
        </div>
    );
}

export default ProfileCard;
