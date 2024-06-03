import React from 'react';
import homeImage from '../../assets/image/home-img.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBullhorn,
  faHome,
  faUser,
  faCar,
} from '@fortawesome/free-solid-svg-icons';

const Icons = () => {
  return (
    <>
      <section className="home" id="home">
        <h3 data-speed="-2" className="home-parallax">
          find your car
        </h3>

        <img data-speed="5" className="home-parallax" src={homeImage} alt="" />

        <a
          data-speed="7"
          href="https://drive.google.com/drive/u/6/folders/1G6-b8K0BorbI_rp-XCJJFlh6XuicYtQK "
          className="btn home-parallax"
        >
          Click here to see all of our cars
        </a>
      </section>

      <div className="icons-container">
        <section className="box-container">
          <div className="box">
            <FontAwesomeIcon icon={faHome} />
            <div className="content">
              <h3>Our</h3>
              <p>branches</p>
            </div>
          </div>

          <div className="box">
            <FontAwesomeIcon icon={faBullhorn} />
            <div className="content">
              <h3>Our</h3>
              <p>Promotion</p>
            </div>
          </div>

          <div className="box">
            <FontAwesomeIcon icon={faUser} />
            <div className="content">
              <h3>Our</h3>
              <p>Happy Clients</p>
            </div>
          </div>

          <div className="box">
            <FontAwesomeIcon icon={faCar} />
            <div className="content">
              <h3>Latest</h3>
              <p>Collections</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Icons;
