import React, { useContext } from 'react';
import homeImage from '../../assets/image/vehicle-5.png';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const Signup = () => {
  const { createUser } = useContext(AuthContext);
  const handleSignup = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
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
          <form onSubmit={handleSignup} className="card-body ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
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
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                className="btn btn-primary"
                value={'Signup'}
              />
            </div>
            <label className="label">
              <Link to={'/login'} className="label-text-alt link link-hover">
                Have an account? Please Login
              </Link>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
