import React from 'react'

import { Helmet } from 'react-helmet'

import './notifications.css'

const Notifications = (props) => {
  return (
    <div className="notifications-container">
      <Helmet>
        <title>notifications - exported project</title>
        <meta property="og:title" content="notifications - exported project" />
      </Helmet>
      <div className="notifications-group2">
        <img
          alt="Rectangle33507576"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/79f3310a-9cb8-4e36-99a6-b4a1ac01bc02/0297383e-c288-4561-ba21-dbb16a4b92c2?org_if_sml=1789&amp;force_format=original"
          className="notifications-rectangle3350"
        />
        <span className="notifications-text">
          <span>Check appointment</span>
        </span>
        <span className="notifications-text2">
          <span>Fluffy has an appointment in 2 days!</span>
        </span>
        <img
          alt="Ellipse1557576"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/79f3310a-9cb8-4e36-99a6-b4a1ac01bc02/186d9487-d489-4e1a-ade3-99928240860b?org_if_sml=1160&amp;force_format=original"
          className="notifications-ellipse155"
        />
        <img
          alt="Vector7575"
          src="./imgs/vector7575-ont.svg"
          className="notifications-vector"
        />
        <img
          alt="Vector7576"
          src="./imgs/vector7576-bj5.svg"
          className="notifications-vector1"
        />
      </div>
    </div>
  )
}

export default Notifications
