import { useState } from 'react';
import styles from './EditProfile.module.css';
import { IconButton, SoftKeys, TopNavBar } from './components/navbar';

const EditProfile = (props: any) => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    const openNotifications = () => {
        alert("hey");
    }


return (
    <>
        <TopNavBar>
            <div className={styles.title}>
                Profile
            </div>
            <div style={{ display: 'flex' }}>
                <IconButton onClick={openNotifications} src="Bell.svg" />
                <IconButton onClick={history.back} src="back.svg" />
            </div>
        </TopNavBar>
        <main style={{marginTop:"90px", paddingBottom: "80px"}} className={styles.editBox}>
            <div style={{width:"100%"}}>
                <div style={{display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
                    <img src="/userImage.svg" />
                </div>
                <div style={{textAlign: "center"}}>
                    Change Picture
                </div>
                <br/>
                <div>
                    <label>
                        Name:
                    </label>
                    <br/>
                    <input type="text" style={{width: "99%"}}
                        value={userName}
                        onChange={(ev) => setUserName(ev.target.value)}/>
                </div>
                <br/>
                <div>
                    <label>
                        Email:
                    </label>
                    <br/>
                    <input type="text" style={{width: "99%"}}
                        value={userEmail}
                        onChange={(ev) => setUserEmail(ev.target.value)} />
                </div>
                <br/>
                <div>
                    <label>
                        Phone Number:
                    </label>
                    <br/>
                    <input type="text" style={{width: "99%"}}
                        value={phoneNumber}
                        onChange={(ev) => setPhoneNumber(ev.target.value)}/>
                </div>
                <br/>
                <div>
                    <label>
                        Password:
                    </label>
                    <br/>
                    <input type="password" style={{width: "99%"}}
                        value={password}
                        onChange={(ev) => setPassword(ev.target.value)}/>
                </div>
                <br/>
                <div>
                    <label>
                        Confirm password:
                    </label>
                    <br/>
                    <input type="password" style={{width: "99%"}}
                        value={confirmPassword}
                        onChange={(ev) => setConfirmPassword(ev.target.value)}/>
                </div>
                <br/>
                <div>
                    <button style={{float: "left"}} className={styles.submitButton} onClick={()=>history.go(-1)}>Save</button>
                    <button style={{float: "right"}} className={styles.submitButton} onClick={()=>history.go(-1)}>Cancel</button>
                </div>
            </div>
            
        </main>
        <SoftKeys selected={window.location.pathname}/>
    </>
)
}

export default EditProfile;