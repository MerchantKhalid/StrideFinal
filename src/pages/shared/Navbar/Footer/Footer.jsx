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
      <footer className="footer" id="footer">
        <section className="box-container">
          <div className="box">
            <h3>our branches</h3>
            <div>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <p className="i">India</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <p className="i">Japan</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <p className="i">France</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <p className="i">Russia </p>
            </div>
            <div>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <p className="i">USA</p>
            </div>
          </div>

          <div className="box">
            <h3>quick links</h3>
            <div>
              <FontAwesomeIcon icon={faArrowRight} />
              <p className="i">Home</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faArrowRight} />
              <p className="i">Vehicles</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faArrowRight} />
              <p className="i">Contact</p>
            </div>
          </div>

          <div className="box">
            <h3>contact info</h3>
            <div>
              <FontAwesomeIcon icon={faPhone} />
              <p className="i">+351920102458</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faPhone} />
              <p className="i">+351920485333</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faPhone} />
              <p className="i"> purplefrontieruber@gmail.com</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <p className="i"> Rua Direita Do Viso,</p>
              <p className="addr">318,4250-196 Ramalde,Porto</p>
            </div>
          </div>

          <div className="box">
            <h3>contact info</h3>
            <div>
              <FontAwesomeIcon icon={faFacebookF} />
              <p className="i">Facebook</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faTwitter} />
              <p className="i">Twitter</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faInstagram} />
              <p className="i">Instagram</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faLinkedin} />
              <p className="i">Linkedin</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faPinterest} />
              <p className="i">Pinterest</p>
            </div>
          </div>
        </section>

        <div className="credit">all rights reserved @2024</div>
      </footer>
    </>
  );
};

export default Footer;
