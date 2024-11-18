import React from 'react'
import carimg from '../../assets/images/car-img.png'
import pus from '../../assets/images/pus.png'
import loganpus from '../../assets/images/loganpus.png'
import bestpictureawardr from '../../assets/images/bestpictureawardr.png'
import bestdirector from '../../assets/images/bestdirector.png'
import bestdirectoryear from '../../assets/images/bestdirectoryear.png'

const FirstHomeSect = () => {
    return (
        <div className='home-first-section'>
            <div className="first-sect-overlay">
                <div className="container-fluid first-text">
                    <p>SELECT PRODUCTION PRESENTS</p>
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
                <h3>"THRILLING ADVENTURE THAT WILL KEEP YOU ON ENDGE."</h3>
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