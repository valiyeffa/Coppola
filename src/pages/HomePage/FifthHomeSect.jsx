import React from 'react'
import team1 from '../../assets/images/h1-team1.jpg'
import team2 from '../../assets/images/h1-team2.jpg'
import team3 from '../../assets/images/h1-team3.jpg'
import team4 from '../../assets/images/h1-team4.jpg'
import { useTranslation } from 'react-i18next'

const FifthHomeSect = () => {
  const { t } = useTranslation();

  return (
    <div className='fifth-home-sect'>
      <div className="story-about-sect">
        <h6>{t("home.fifthSixSect.aboutTit")}</h6>
        <div className="ad-container">
          <div className="ad-content">
            <span> {t("home.fifthSixSect.cont1")} </span>
            <span> {t("home.fifthSixSect.cont2")} </span>
            <span> {t("home.fifthSixSect.cont3")} </span>
            <span> {t("home.fifthSixSect.cont1")} </span>
            <span> {t("home.fifthSixSect.cont2")} </span>
            <span> {t("home.fifthSixSect.cont3")} </span>
          </div>
        </div>
      </div>
      <div className="story-starring-team">
        <div className="container-fluid">
          <h6>{t("home.fifthSixSect.starsTit")}</h6>
          <div className="row">
            <div className="col-12 col-lg-3 col-md-6 col-sm-6">
              <div className="starring-box">
                <div className="starring-box-img">
                  <img src={team1} alt="" />
                </div>
                <div className="starring-box-text">
                  <h5>ISIDORA RUTTA</h5>
                  <p>as Emily</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3 col-md-6 col-sm-6">
              <div className="starring-box">
                <div className="starring-box-img">
                  <img src={team2} alt="" />
                </div>
                <div className="starring-box-text">
                  <h5>NICK TURNER</h5>
                  <p>as Joel</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3 col-md-6 col-sm-6">
              <div className="starring-box">
                <div className="starring-box-img">
                  <img src={team3} alt="" />
                </div>
                <div className="starring-box-text">
                  <h5>RON BRADLEY</h5>
                  <p>as Nick</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3 col-md-6 col-sm-6">
              <div className="starring-box">
                <div className="starring-box-img">
                  <img src={team4} alt="" />
                </div>
                <div className="starring-box-text">
                  <h5>SOFIA BROWN</h5>
                  <p>as Anna</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FifthHomeSect