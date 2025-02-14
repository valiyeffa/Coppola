import React from 'react'
import icon1 from '../../assets/images/h1-icon1.png'
import icon2 from '../../assets/images/h1-icon2.png'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const SixthHomeSect = () => {
  const { t } = useTranslation();

  const topPage = () => {
    window.scrollTo(0, 0);
  }

  return (
    <div className='sixth-home-sect'>
      <div className="container-fluid">
        <div className="thriller-movie-text">
          <p>{t("home.fifthSixSect.movCtg")}</p>
          <h2>{t("home.fifthSixSect.movTit")} <del>{t("home.fifthSixSect.movTidel")}</del></h2>
          <NavLink to='/movies-shop' onClick={topPage} className='btn-shop btn btn-outline-light'>{t("home.thrdFourSect.getBtn")}</NavLink>

          <div className="thriller-movie-icon">
            <img src={icon1} alt="" />
            <img src={icon2} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SixthHomeSect