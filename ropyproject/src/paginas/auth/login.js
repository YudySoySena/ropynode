import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
<div className="hold-transition login-page">
  <div className="login-box">
    <div className="card card-outline card-primary">
      <div className="card-header text-center">
        <Link to="../../index2.html" className="h1"><b>Admin</b>LTE</Link>
      </div>
      <div className="card-body">
        <p className="login-box-msg">Sign in to start your session</p>
        <form action="../../index3.html" method="post">
          <div className="input-group mb-3">
            <input type="email" className="form-control" placeholder="Email" />
            <div className="input-group-append">
              <div className="input-group-text">
                <span className="fas fa-envelope" />
              </div>
            </div>
          </div>
          <div className="input-group mb-3">
            <input type="password" className="form-control" placeholder="Password" />
            <div className="input-group-append">
              <div className="input-group-text">
                <span className="fas fa-lock" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-8">
              <div className="icheck-primary">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">
                  Remember Me
                </label>
              </div>
            </div>
            <div className="col-4">
              <button type="submit" className="btn btn-primary btn-block">Sign In</button>
            </div>
          </div>
        </form>
        <p className="mb-1">
          <Link to="forgot-password.html">I forgot my password</Link>
        </p>
        <p className="mb-0">
          <Link to="register.js" className="text-center">Register a new membership</Link>
        </p>
      </div>
    </div>
  </div>
  {/* Bootstrap 4 */}
  {/* AdminLTE App */}
</div>

  );
};

export default Login;