import React from 'react'

import { Helmet } from 'react-helmet'

import './changepic.css'

const Changepic = (props) => {
  return (
    <div className="changepic-container">
      <Helmet>
        <title>changepic - exported project</title>
        <meta property="og:title" content="changepic - exported project" />
      </Helmet>
      <div className="changepic-changepic">
        <div className="changepic-group22">
          <span className="changepic-text">
            <span>Cancel</span>
          </span>
        </div>
        <div className="changepic-group23">
          <span className="changepic-text2">
            <span>Save</span>
          </span>
        </div>
        <div className="changepic-group24">
          <img
            src="https://play.teleporthq.io/static/svg/default-img.svg"
            alt="Ellipse52527"
            className="changepic-ellipse5"
          />
          <span className="changepic-text4">
            <span>Insert new picture</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Changepic
