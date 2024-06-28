import React from 'react'

import { Helmet } from 'react-helmet'

import './bigpic.css'

const Bigpic = (props) => {
  return (
    <div className="bigpic-container">
      <Helmet>
        <title>bigpic - exported project</title>
        <meta property="og:title" content="bigpic - exported project" />
      </Helmet>
      <div className="bigpic-group2">
        <img
          src="https://play.teleporthq.io/static/svg/default-img.svg"
          alt="Ellipse52521"
          className="bigpic-ellipse5"
        />
        <img
          src="https://play.teleporthq.io/static/svg/default-img.svg"
          alt="fluentperson32filled2521"
          className="bigpic-fluentperson32filled"
        />
      </div>
    </div>
  )
}

export default Bigpic
