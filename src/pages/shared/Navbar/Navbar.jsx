import React, { useContext } from 'react';
import '../../../style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProviders';
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut().then().catch();
  };
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
              <Link to={'/'}>Home</Link>

              <Link to={'/about'}>About</Link>
              <Link to={'/contact'}>Contact</Link>
            </nav>
          </div>

          <div>
            <div id="login-btn">
              {user ? (
                <>
                  <div className="flex">
                    <p className="font-bold ml-4">{user?.displayName}</p>
                    <p className="font-bold ml-4 mr-4">{user?.email}</p>
                    <div className="avatar mr-3">
                      <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={user?.photoURL} />
                      </div>
                    </div>
                    <button className="btn ml-2" onClick={logOut}>
                      Logout
                    </button>
                  </div>
                </>
              ) : (
                <Link to={'/login'}>
                  <FontAwesomeIcon className="text-3xl mr-3" icon={faUser} />
                  <button className="btn">login</button>
                </Link>
              )}
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
