import styles from './pet.module.css';

function IconButton(props: Record<string, any>) {
    return (
        /* Implementar com <Link> que funciona melhor */
        <div className={styles.gridItem}>
            <a href={!props.selected ? props.href : false} 
                className={`${styles.iconButton} ${props.className ? ' ' + props.className : ''} ${props.selected ? styles.selected : ''}`}
                onClick={props.onClick} >

                <img className={styles.icon}
                    src={props.img}
                    style={props.style}
                    />
            </a>
        </div>
    );
}

function ButtonRow(props: any) {
    const page = window.location.pathname;
    return (
        <div style={{display: 'flex', justifyContent: 'center', width: '100%', marginBottom: "50px"}}>
            <div className={styles.gridContainer}>
                <IconButton className={styles.gridItem} img='/info.svg' href="/pet/info" selected={page === "/pet/info" || page === "/pet/"} />
                <IconButton className={styles.gridItem} img='/scale.svg' href="/pet/weighing" selected={page === "/pet/weighing"} />
                <IconButton className={styles.gridItem} img='/appointments.svg' href="/pet/appointments" selected={page === "/pet/appointments"} />
                <IconButton className={styles.gridItem} img='/bone.svg' href="/pet/nutrition" selected={page === "/pet/nutrition"} />
            </div>
        </div>
    );
}

function Table(props) {

}

export {ButtonRow, Table};