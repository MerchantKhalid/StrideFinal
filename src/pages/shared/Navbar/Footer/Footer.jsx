import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt,
  faArrowRight,
  faPhone,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedin,
  faPinterest,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <>
      <footer className="footer p-10 h-124" id="footer">
        <section className="box-container">
          <div className="box">
            <h3>our branches</h3>
            <div className="flex justify-center items-center">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <p className="i ml-1">India</p>
            </div>
            <div className="flex justify-center items-center">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <p className="i ml-1">Japan</p>
            </div>
            <div className="flex justify-center items-center">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <p className="i ml-1">France</p>
            </div>
            <div className="flex justify-center items-center">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <p className="i ml-1">Russia </p>
            </div>
            <div className="flex justify-center items-center">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <p className="i ml-1">USA</p>
            </div>
          </div>

          <div className="box">
            <h3>quick links</h3>
            <div className="flex justify-center items-center">
              <FontAwesomeIcon icon={faArrowRight} />
              <p className="i mr-1">Home</p>
            </div>
            <div className="flex justify-center items-center">
              <FontAwesomeIcon icon={faArrowRight} />
              <p className="i mr-1">Vehicles</p>
            </div>
            <div className="flex justify-center items-center">
              <FontAwesomeIcon icon={faArrowRight} />
              <p className="i mr-1">Contact</p>
            </div>
          </div>

          <div className="box">
            <h3 className="mr-8">contact info</h3>
            <div className="flex justify-center items-center">
              <FontAwesomeIcon icon={faPhone} />
              <p className="i">+351920102458</p>
            </div>
            <div className="flex justify-center items-center">
              <FontAwesomeIcon icon={faPhone} />
              <p className="i">+351920485333</p>
            </div>
            <div className="flex justify-center items-center">
              <FontAwesomeIcon icon={faPhone} />
              <p className="i ml-1"> purplefrontieruber@gmail.com</p>
            </div>
            <div className="flex justify-center items-center">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <></>
            </div>
          </div>

          <div className="box">
            <h3>contact info</h3>
            <div className="flex justify-center items-center">
              <FontAwesomeIcon icon={faFacebookF} />
              <p className="i ml-1">Facebook</p>
            </div>
            <div className="flex justify-center items-center">
              <FontAwesomeIcon icon={faTwitter} />
              <p className="i ml-1">Twitter</p>
            </div>
            <div className="flex justify-center items-center">
              <FontAwesomeIcon icon={faInstagram} />
              <p className="i ml-1">Instagram</p>
            </div>
            <div className="flex justify-center items-center">
              <FontAwesomeIcon icon={faLinkedin} />
              <p className="i ml-1">Linkedin</p>
            </div>
            <div className="flex justify-center items-center">
              <FontAwesomeIcon icon={faPinterest} />
              <p className="i ml-1">Pinterest</p>
            </div>
          </div>
        </section>
      </footer>
      <div>
        <div className="credit">all rights reserved @2024</div>
      </div>
    </>
  );
};

export default Footer;
