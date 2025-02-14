import React from 'react'
import carimg from '../../assets/images/car-img.png'
import pus from '../../assets/images/pus.png'
import loganpus from '../../assets/images/loganpus.png'
import bestpictureawardr from '../../assets/images/bestpictureawardr.png'
import bestdirector from '../../assets/images/bestdirector.png'
import bestdirectoryear from '../../assets/images/bestdirectoryear.png'
import { useTranslation } from 'react-i18next'

const FirstHomeSect = () => {
    const { t } = useTranslation();

    return (
        <div className='home-first-section'>
            <div className="first-sect-overlay">
                <div className="container-fluid first-text">
                    <p>{t("home.firstScndSect.presents")}</p>
                    <div className="logan-overlay">
                        <h2>LOGAN</h2>
                        <div className="logan-pus">
                            <img src={loganpus} alt="" />
                        </div>
                    </div>
                    <div className="first-sect-body">
                        <img className='car-img ' src={carimg} alt="" />
                    </div>
                </div>
                <img className='black-shadow' src={pus} alt="" />
            </div>
            <div className="right-bottom-text">
                <h3>"{t("home.firstScndSect.logan")}"</h3>
                <p>Yasmin Bergam, Movie Magazine</p>

                <div className="award-year">
                    <img src={bestpictureawardr} alt="" />
                    <img src={bestdirector} alt="" />
                    <img src={bestdirectoryear} alt="" />
                </div>
            </div>
        </div>
    )
}

export default FirstHomeSect