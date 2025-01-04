import React from 'react'
import client1 from '../../../src/assets/images/aboutus/client-img-1.png'
import client2 from '../../../src/assets/images/aboutus/client-img-2.png'
import client3 from '../../../src/assets/images/aboutus/client-img-3.png'
import client4 from '../../../src/assets/images/aboutus/client-img-4.png'
import client5 from '../../../src/assets/images/aboutus/client-img-5.png'
import client6 from '../../../src/assets/images/aboutus/client-img-6.png'
import client7 from '../../../src/assets/images/aboutus/client-img-7.png'
import client8 from '../../../src/assets/images/aboutus/client-img-8.png'

const FirstAboutSect = () => {
  return (
    <div className='first-about-sect'>
      <div className="ffirst-about-sect">
      </div>

      <div className="fscnd-about-sect">
        <div className="container-fluid">
          <p className='about-mini-title'>ABOUT US</p>
          <div className="row">
            <div className="col-12 col-lg-6 col-md-12 col-sm-6">
              <div className="about-textbox">
                <h1>TWO STORIES A BEAUTIFUL ODE TO DESTRUCTION.</h1>
              </div>
            </div>
            <div className="col-12 col-lg-6 col-md-12 col-sm-6">
              <div className="about-textbox">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean maximus, felis eget ultricies auctor, mauris ante varius dolor, ut accumsan metus magna id nisi. Vivamus elit risus, sollicitudin sed erat et, dignissim vehicula neque. Sed eros eros, semper vel iaculis ac.</p>
                <p>Proin a neque sit amet urna tempor egestas eu sed urna. Sed porttitor cursus nibh non malesuada.</p>
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