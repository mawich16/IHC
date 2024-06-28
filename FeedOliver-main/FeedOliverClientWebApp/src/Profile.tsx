import "./base.css";

import { Link } from 'react-router-dom';
import styles from './Profile.module.css';
import { IconButton, SoftKeys, TopNavBar } from './components/navbar';
import ProfileCard from './components/profileCard';


function Profile() {

        const openNotifications = () => {
            alert("hey");
        }

        const users = {name: "John Doe", email: "johny@gmail.com"}


    return (
        <>
            <TopNavBar>
                <div className={styles.title}>
                    Profile
                </div>
                <div style={{ display: 'flex' }}>
                    <IconButton onClick={openNotifications} src="Bell.svg" />
                    <IconButton onClick={()=>history.go(-1)} src="back.svg" />
                </div>
            </TopNavBar>
            <main style={{marginTop:"90px", paddingBottom: "80px"}}>
                <ProfileCard name={users.name} email={users.email} />

                <Link to="/PetOwner/edit" className={styles.editButton} style={{textDecoration: 'none', color: 'black'}}>
                    <div style={{marginRight: "48px", marginLeft: "7px"}}><img src="lock.svg"/></div>
                    <div >Edit Profile Information</div>
                </Link>

                <Link to="/" className={styles.logoutButton} style={{textDecoration: 'none', color: 'black'}}>
                    <div style={{marginRight: "51px", marginLeft: "7px"}}><img src="logoutSymbol.svg"/></div>
                    <div>Logout</div>
                </Link>
            </main>

            <SoftKeys selected={window.location.pathname}/>
        </>
    )
}

export default Profile;