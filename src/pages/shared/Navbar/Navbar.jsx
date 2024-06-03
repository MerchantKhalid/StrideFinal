import React from 'react';
import '../../../style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
      <header className="header">
        <section className="flex">
          <div id="menu-btn" className="fas fa-bars">
            <FontAwesomeIcon icon={faBars} />
          </div>
          <div>
            <Link to={'/'} className="logo">
              {' '}
              <span>Purple</span>Frontier{' '}
            </Link>
          </div>

          <div>
            <nav className="navbar">
              <a href="index.html">Home</a>
              <a href="https://drive.google.com/drive/u/6/folders/1G6-b8K0BorbI_rp-XCJJFlh6XuicYtQK ">
                Vehicles
              </a>

              <a href="About.html">About</a>
              <a href="Contact.html">Contact</a>
            </nav>
          </div>

          <div>
            <div id="login-btn">
              <Link to={'/login'}>
                <button className="btn">login</button>
                <i className="far fa-user"></i>
              </Link>
            </div>
          </div>
        </section>
      </header>

      {/* <div className="login-form-container">
        <span id="close-login-form" className="fas fa-times"></span>

        <form action="">
          <h3>user login</h3>
          <input type="email" placeholder="email" className="box" />
          <input type="password" placeholder="password" className="box" />
          <p>
            forget your password <a href="#">click here</a>
          </p>
          <input type="submit" value="login" className="btn" />
          <p>or login with</p>
          <div className="buttons">
            <a href="#" className="btn">
              {' '}
              google{' '}
            </a>
            <a href="#" className="btn">
              {' '}
              facebook{' '}
            </a>
          </div>
          <p>
            don't have an account <a href="#">create one</a>
          </p>
        </form>
      </div> */}
    </>
  );
};

export default Navbar;
