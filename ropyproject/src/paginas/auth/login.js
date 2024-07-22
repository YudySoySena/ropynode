import React from 'react';
const Login = () => {
  return (
    <div classname="hold-transition login-page">
  <div classname="login-box">
    <div classname="login-logo">
      <a href="../../index2.html"><b>Admin</b>LTE</a>
    </div>
    <div classname="card">
      <div classname="card-body login-card-body">
        <p classname="login-box-msg">Sign in to start your session</p>
        <form action="../../index3.html" method="post">
          <div classname="input-group mb-3">
            <input type="email" classname="form-control" placeholder="Email" />
            <div classname="input-group-append">
              <div classname="input-group-text">
                <span classname="fas fa-envelope" />
              </div>
            </div>
          </div>
          <div classname="input-group mb-3">
            <input type="password" classname="form-control" placeholder="Password" />
            <div classname="input-group-append">
              <div classname="input-group-text">
                <span classname="fas fa-lock" />
              </div>
            </div>
          </div>
          <div classname="row">
            <div classname="col-8">
              <div classname="icheck-primary">
                <input type="checkbox" id="remember" />
                <label htmlfor="remember">
                  Remember Me
                </label>
              </div>
            </div>
            <div classname="col-4">
              <button type="submit" classname="btn btn-primary btn-block">Sign In</button>
            </div>
          </div>
        </form>
        <div classname="social-auth-links text-center mb-3">
          <p>- OR -</p>
          <a href="#" classname="btn btn-block btn-primary">
            <i classname="fab fa-facebook mr-2" /> Sign in using Facebook
          </a>
          <a href="#" classname="btn btn-block btn-danger">
            <i classname="fab fa-google-plus mr-2" /> Sign in using Google+
          </a>
        </div>
        <p classname="mb-1">
          <a href="forgot-password.html">I forgot my password</a>
        </p>
        <p classname="mb-0">
          <a href="register.html" classname="text-center">Register a new membership</a>
        </p>
      </div>
    </div>
  </div>
</div>

  );
};

export default Login;