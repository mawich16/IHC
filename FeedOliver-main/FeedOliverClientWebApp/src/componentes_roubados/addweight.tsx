import React from 'react'

import { Helmet } from 'react-helmet'

import './addweight.css'

const Addweight = (props) => {
  return (
    <div className="addweight-container">
      <Helmet>
        <title>Addweight - exported project</title>
        <meta property="og:title" content="Addweight - exported project" />
      </Helmet>
      <div className="addweight-add-weight">
        <img
          alt="Rectangle33554832"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/79f3310a-9cb8-4e36-99a6-b4a1ac01bc02/8aa7d7b8-688f-4379-b34b-e6b1a136867c?org_if_sml=11146&amp;force_format=original"
          className="addweight-rectangle3355"
        />
        <img
          alt="Rectangle33574832"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/79f3310a-9cb8-4e36-99a6-b4a1ac01bc02/a2c35b12-8075-49b8-a533-61531d1a135e?org_if_sml=1235&amp;force_format=original"
          className="addweight-rectangle3357"
        />
        <span className="addweight-text">
          <span>New weight (kg)</span>
        </span>
        <div className="addweight-group1">
          <span className="addweight-text2">
            <span>Add</span>
          </span>
        </div>
        <img
          alt="Vector4832"
          src="./imgs/vector4832-sjd7.svg"
          className="addweight-vector"
        />
      </div>
    </div>
  )
}

export default Addweight
