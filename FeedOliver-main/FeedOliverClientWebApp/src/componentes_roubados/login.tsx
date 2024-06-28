import React from 'react'

import { Helmet } from 'react-helmet'

import './login.css'

const Login = (props) => {
  return (
    <div className="login-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="login-login">
        <img
          alt="Rectangle15106"
          src="./imgs/rectangle15106-pi67-900h.png"
          className="login-rectangle1"
        />
        <img
          alt="Ellipse55107"
          src="./imgs/ellipse55107-rgqi-200h.png"
          className="login-ellipse5"
        />
        <img
          alt="fluentperson32filled5108"
          src="./imgs/fluentperson32filled5108-0tj.svg"
          className="login-fluentperson32filled"
        />
        <img
          alt="Rectangle33485110"
          src="./imgs/rectangle33485110-zt92-200h.png"
          className="login-rectangle3348"
        />
        <img
          alt="Rectangle33495111"
          src="./imgs/rectangle33495111-sb5p-200h.png"
          className="login-rectangle3349"
        />
        <span className="login-text">
          <span>username</span>
        </span>
        <span className="login-text2">
          <span>password</span>
        </span>
        <div className="login-group1">
          <span className="login-text4">
            <span>Login</span>
          </span>
          <img
            alt="materialsymbolslogin5117"
            src="./imgs/materialsymbolslogin5117-3uq5.svg"
            className="login-materialsymbolslogin"
          />
        </div>
        <div className="login-group9">
          <img
            alt="IMAGE4978d116799249f5a3d7781ad90fcafc11041"
            src="./imgs/image4978d116799249f5a3d7781ad90fcafc11041-lma-200w.png"
            className="login-image4978d116799249f5a3d7781ad90fcafc1"
          />
        </div>
      </div>
    </div>
  )
}

export default Login
