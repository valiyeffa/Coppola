import React from 'react'
import bgimg from '../../../src/assets/images/aboutus/aboutus-bg1.jpg'
import client1 from '../../../src/assets/images/aboutus/client-img-1.png'
import client2 from '../../../src/assets/images/aboutus/client-img-2.png'
import client3 from '../../../src/assets/images/aboutus/client-img-3.png'
import client4 from '../../../src/assets/images/aboutus/client-img-4.png'
import client5 from '../../../src/assets/images/aboutus/client-img-5.png'
import client6 from '../../../src/assets/images/aboutus/client-img-6.png'
import client7 from '../../../src/assets/images/aboutus/client-img-7.png'
import client8 from '../../../src/assets/images/aboutus/client-img-8.png'
import { useTranslation } from 'react-i18next'


const FirstAboutSect = () => {
  const { t } = useTranslation();

  return (
    <div className='first-about-sect'>
      <div className="ffirst-about-sect">
        <img src={bgimg} alt="" />
      </div>

      <div className="fscnd-about-sect">
        <div className="container-fluid">
          <p className='about-mini-title'>{t("aboutus.firstSect.aboutTit")}</p>
          <div className="row">
            <div className="col-12 col-lg-6 col-md-12 col-sm-6">
              <div className="about-textbox">
                <h1>{t("aboutus.firstSect.aboutBigTit")}</h1>
              </div>
            </div>
            <div className="col-12 col-lg-6 col-md-12 col-sm-6">
              <div className="about-textbox">
                <p>{t("aboutus.firstSect.aboutTxt1")}</p>
                <p>{t("aboutus.firstSect.aboutTxt2")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className="fthrd-about-sect">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-lg-4 col-md-4 col-sm-4">
              <div className="brands-icons">
                <img src={client1} alt="" />
              </div>
            </div>
            <div className="col-12 col-lg-4 col-md-4 col-sm-4">
              <div className="brands-icons">
                <img src={client2} alt="" />
              </div>
            </div>
            <div className="col-12 col-lg-4 col-md-4 col-sm-4">
              <div className="brands-icons">
                <img src={client3} alt="" />
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-lg-4 col-md-4 col-sm-4">
                <div className="brands-icons">
                  <img src={client4} alt="" />
                </div>
              </div>
              <div className="col-12 col-lg-4 col-md-4 col-sm-4">
                <div className="brands-icons">
                  <img src={client5} alt="" />
                </div>
              </div>
              <div className="col-12 col-lg-4 col-md-4 col-sm-4">
                <div className="brands-icons">
                  <img src={client6} alt="" />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-lg-4 col-md-4 col-sm-4">
                <div className="brands-icons">
                  <img src={client7} alt="" />
                </div>
              </div>
              <div className="col-12 col-lg-4 col-md-4 col-sm-4">
                <div className="brands-icons">
                  <img src={client8} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FirstAboutSect