import React, { useContext, useState } from 'react';
import homeImage from '../../assets/image/vehicle-5.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';

const Login = () => {
  const { signIn, user, googleSignin } = useContext(AuthContext);

  const { location } = useLocation();
  const navigate = useNavigate();

  const handleGoogle = () => {
    googleSignin();
    navigate(location?.state ? location?.state : '/');
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedInUser = result.user;
        const user = { email };
        axios
          .post(`https://stride-final-server.vercel.app/jwt`, user)
          .then((res) => {
            console.log(res.data);
            if (res.data.uid) {
              navigate(location?.state ? location?.state : '/');
            }
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${homeImage})`,
      }}
    >
      <div className="hero-overlay bg-opacity-85"></div>
      <div className="hero-content text-center text-neutral-content">
        <div
          className="card w-full shadow-2xl bg-base-100"
          style={{ maxWidth: '600px', width: '100%' }}
        >
          <form onSubmit={handleLogin} className="card-body ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <Link to={''} className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                className="btn btn-primary"
                value={'Login'}
              />
            </div>
            <label className="label">
              <Link to={'/signup'} className="label-text-alt link link-hover">
                Don't Have an account? Please Register
              </Link>
            </label>
            <div>
              <FontAwesomeIcon className="text-blue-600" icon={faGoogle} />
              <button onClick={handleGoogle}>Google</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
