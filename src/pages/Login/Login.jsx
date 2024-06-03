import React, { useContext } from 'react';
import homeImage from '../../assets/image/vehicle-5.png';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = from.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
      })
      .catch((error) => {
        console.log(error);
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
