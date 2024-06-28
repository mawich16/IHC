import styles from './petPage.module.css';
import React from 'react';

function IconButton(props: Record<string, any>) {
    return (
        /* Implementar com <Link> que funciona melhor */
        <a href={!props.selected ? props.href : undefined} 
           className={`${styles.iconButton} ${props.className ? ' ' + props.className : ''} ${props.selected ? styles.selected : ''}`}
           onClick={props.onClick} >

            <img className={styles.icon}
                 src={props.img}
                 style={props.style}
                />
        </a>
    );
}

function ButtonRow(props: any) {
    return (
        <div className={styles.gridContainer}>
            {
                React.Children.map(props.children, (child) => {
                    return (
                        <div className={styles.gridItem}>
                            {child}
                        </div> 
                    );
                })
            }
        </div>
    );
}

function PetPage(){
    const page = window.location.pathname;
    return (
        <div style={{display: 'flex', alignContent: 'center'}}>
            <ButtonRow>
                {/* wtf nao funciona se nao ter aqueles `..`, porque vai buscar ao /pet/bell.svg inves de /bell.svg */}
                <IconButton img='../Bell.svg' href="/pet/info" selected={page === "/pet/info" || page === "/pet"} />
                <IconButton img='../Bell.svg' href="/pet/weighing" selected={page === "/pet/weighing"} />
                <IconButton img='../Bell.svg' href="/pet/appointments" selected={page === "/pet/appointments"} />
                <IconButton img='../Bell.svg' href="/pet/nutrition" selected={page === "/pet/nutrition"} />
            </ButtonRow>
        </div>
    );
}

export default PetPage;