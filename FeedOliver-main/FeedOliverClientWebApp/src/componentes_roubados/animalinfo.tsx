import React from 'react'

import { Helmet } from 'react-helmet'

import './animalinfo.css'

const Animalinfo = (props) => {
  return (
    <div className="animalinfo-container">
      <Helmet>
        <title>Animalinfo - exported project</title>
        <meta property="og:title" content="Animalinfo - exported project" />
      </Helmet>
      <div className="animalinfo-animal-info">
        <img
          alt="Screen23"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/79f3310a-9cb8-4e36-99a6-b4a1ac01bc02/b6fc0a08-394a-4469-81f8-29b0b96db3fb?org_if_sml=12833&amp;force_format=original"
          className="animalinfo-screen"
        />
        <div className="animalinfo-botoes">
          <img
            alt="Ellipse9273"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/79f3310a-9cb8-4e36-99a6-b4a1ac01bc02/9028e062-7f98-48d5-ac43-61c7d8c13f61?org_if_sml=13160&amp;force_format=original"
            className="animalinfo-ellipse9"
          />
          <img
            alt="Ellipse123518"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/79f3310a-9cb8-4e36-99a6-b4a1ac01bc02/5fd0c7b2-2003-43df-8e0c-3ab9935cd7bf?org_if_sml=13157&amp;force_format=original"
            className="animalinfo-ellipse12"
          />
          <img
            alt="Ellipse133518"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/79f3310a-9cb8-4e36-99a6-b4a1ac01bc02/9a26fe0a-2be3-418b-a5ff-2dba12c17b87?org_if_sml=13157&amp;force_format=original"
            className="animalinfo-ellipse13"
          />
          <img
            alt="Ellipse11275"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/79f3310a-9cb8-4e36-99a6-b4a1ac01bc02/7dc358f9-f4ff-4570-9741-322b0dbd3442?org_if_sml=13157&amp;force_format=original"
            className="animalinfo-ellipse11"
          />
          <img
            alt="Vector249"
            src="./imgs/vector249-dqdk.svg"
            className="animalinfo-vector"
          />
          <img
            alt="phbonelight3518"
            src="./imgs/phbonelight3518-u0dk.svg"
            className="animalinfo-phbonelight"
          />
          <div className="animalinfo-healthiconsweightoutline">
            <div className="animalinfo-group">
              <img
                alt="Vector386"
                src="./imgs/vector386-nua4.svg"
                className="animalinfo-vector01"
              />
              <img
                alt="Vector387"
                src="./imgs/vector387-o96e.svg"
                className="animalinfo-vector02"
              />
            </div>
          </div>
        </div>
        <div className="animalinfo-table">
          <img
            alt="TableBackground4816"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/79f3310a-9cb8-4e36-99a6-b4a1ac01bc02/57527717-9daa-41a3-b03d-59fbd83bd81c?org_if_sml=1862&amp;force_format=original"
            className="animalinfo-table-background"
          />
          <div className="animalinfo-row">
            <div className="animalinfo-cell">
              <span className="animalinfo-text">
                <span>Dr. Daniela</span>
              </span>
            </div>
            <div className="animalinfo-cell01">
              <span className="animalinfo-text02">
                <span>Vet</span>
              </span>
            </div>
          </div>
          <div className="animalinfo-row1">
            <div className="animalinfo-cell02">
              <span className="animalinfo-text04">
                <span>No</span>
              </span>
            </div>
            <div className="animalinfo-cell03">
              <span className="animalinfo-text06">
                <span>Sterilized</span>
              </span>
            </div>
          </div>
          <div className="animalinfo-row2">
            <div className="animalinfo-cell04">
              <span className="animalinfo-text08">
                <span>Scarce</span>
              </span>
            </div>
            <div className="animalinfo-cell05">
              <span className="animalinfo-text10">
                <span>Daily Activity</span>
              </span>
            </div>
          </div>
          <div className="animalinfo-row3">
            <div className="animalinfo-cell06">
              <span className="animalinfo-text12">
                <span>6*</span>
              </span>
            </div>
            <div className="animalinfo-cell07">
              <span className="animalinfo-text14">
                <span>Body Condition</span>
              </span>
            </div>
          </div>
          <div className="animalinfo-row4">
            <div className="animalinfo-cell08">
              <span className="animalinfo-text16">
                <span>5.5kg</span>
              </span>
            </div>
            <div className="animalinfo-cell09">
              <span className="animalinfo-text18">
                <span>Weight</span>
              </span>
            </div>
          </div>
          <div className="animalinfo-row5">
            <div className="animalinfo-cell10">
              <span className="animalinfo-text20">
                <span>3 Years</span>
              </span>
            </div>
            <div className="animalinfo-cell11">
              <span className="animalinfo-text22">
                <span>Age</span>
              </span>
            </div>
          </div>
          <div className="animalinfo-row6">
            <div className="animalinfo-cell12">
              <span className="animalinfo-text24">
                <span>Persian Cat</span>
              </span>
            </div>
            <div className="animalinfo-cell13">
              <span className="animalinfo-text26">
                <span>Breed</span>
              </span>
            </div>
          </div>
        </div>
        <span className="animalinfo-text28">
          <span>Notes:</span>
          <br></br>
          <span>Epilepsy</span>
          <br></br>
          <span>Allergic to nuts</span>
        </span>
        <span className="animalinfo-text34">
          <span>
            {' '}
            * Body Condition scale
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>
            {' '}
            1-3: too thin 4-5: ideal 6-7: overweight 8-9: obese
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span></span>
        </span>
        <div className="animalinfo-group1">
          <img
            alt="Vector2454"
            src="./imgs/vector2454-cwyo.svg"
            className="animalinfo-vector03"
          />
          <img
            alt="Vector2455"
            src="./imgs/vector2455-9inw.svg"
            className="animalinfo-vector04"
          />
        </div>
        <div className="animalinfo-footer">
          <img
            alt="Vector2961"
            src="./imgs/vector2961-37o.svg"
            className="animalinfo-vector05"
          />
          <img
            alt="Vector2967"
            src="./imgs/vector2967-xe49.svg"
            className="animalinfo-vector06"
          />
          <div className="animalinfo-group28">
            <img
              alt="Vector2968"
              src="./imgs/vector2968-o2j.svg"
              className="animalinfo-vector07"
            />
            <img
              alt="Vector2968"
              src="./imgs/vector2968-il6l.svg"
              className="animalinfo-vector08"
            />
            <img
              alt="Vector2968"
              src="./imgs/vector2968-b6co.svg"
              className="animalinfo-vector09"
            />
            <img
              alt="Vector2969"
              src="./imgs/vector2969-j6qu.svg"
              className="animalinfo-vector10"
            />
            <img
              alt="Vector2969"
              src="./imgs/vector2969-vlaa.svg"
              className="animalinfo-vector11"
            />
            <img
              alt="Vector2969"
              src="./imgs/vector2969-mpej.svg"
              className="animalinfo-vector12"
            />
            <img
              alt="Vector2969"
              src="./imgs/vector2969-bg9m.svg"
              className="animalinfo-vector13"
            />
            <img
              alt="Vector2969"
              src="./imgs/vector2969-w02y.svg"
              className="animalinfo-vector14"
            />
            <img
              alt="Vector2969"
              src="./imgs/vector2969-hv4.svg"
              className="animalinfo-vector15"
            />
            <img
              alt="Vector2969"
              src="./imgs/vector2969-ffwh.svg"
              className="animalinfo-vector16"
            />
            <img
              alt="Vector2969"
              src="./imgs/vector2969-r321.svg"
              className="animalinfo-vector17"
            />
            <img
              alt="Vector2969"
              src="./imgs/vector2969-5b1d.svg"
              className="animalinfo-vector18"
            />
          </div>
        </div>
        <div className="animalinfo-topo">
          <img
            alt="carbongenderfemale7725"
            src="./imgs/carbongenderfemale7725-ryy9h.svg"
            className="animalinfo-carbongenderfemale"
          />
          <span className="animalinfo-text40">
            <span>Fluffy</span>
          </span>
          <img
            alt="Ellipse67728"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/79f3310a-9cb8-4e36-99a6-b4a1ac01bc02/ab8aa9c8-b291-4fd2-a138-866bc762a2ae?org_if_sml=1490&amp;force_format=original"
            className="animalinfo-ellipse6"
          />
          <img
            alt="fluentanimalcat20regular7729"
            src="./imgs/fluentanimalcat20regular7729-jxt8.svg"
            className="animalinfo-fluentanimalcat20regular"
          />
          <img
            alt="Vector7731"
            src="./imgs/vector7731-gfmu.svg"
            className="animalinfo-vector19"
          />
          <img
            alt="Vector7732"
            src="./imgs/vector7732-ahy5.svg"
            className="animalinfo-vector20"
          />
        </div>
      </div>
    </div>
  )
}

export default Animalinfo
