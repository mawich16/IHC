import { useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import { Link } from 'react-router-dom';

const Login = (props: any) => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  //const navigate = useNavigate()

  //const onButtonClick = () => {
  //navigate('/Pet')
  //}

  return (
    <div className={styles.mainContainer}>
      <div className={styles.firstContainer}>
        <img src="userImage.svg" />
      </div>
      <div className={styles.inputContainer}>
        <input
          value={userName}
          placeholder="username"
          onChange={(ev) => setUserName(ev.target.value)}
          className={styles.inputBox}
        />
      </div>
      <br />
      <div className={styles.inputContainer}>
        <input
          type="password"
          value={password}
          placeholder="password"
          onChange={(ev) => setPassword(ev.target.value)}
          className={styles.inputBox}
        />
      </div>
      <br />
      <div className={styles.inputContainer}>
          <Link className={styles.inputButton} type="button" to="/index" style={{textDecoration: 'none', color: 'black'}}>
            {`Log in   `}
            <img src="loginSymbol.svg" style={{verticalAlign:'sub'}} />
          </Link>

      </div>
      <br />
      <div className={styles.inputContainer}>
        <img src="FeedOliver.png" />
      </div>
    </div>
  )
}

export default Login;