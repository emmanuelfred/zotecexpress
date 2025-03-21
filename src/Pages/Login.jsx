import React from "react";
import "./Css/login.css";
import { Link } from "react-router-dom"; // Use React Router for navigation

function Login() {
  return (
    <div className="Login">
      <section>
        <div className="page-header min-vh-75">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-5 col-md-6 d-flex flex-column mx-auto">
                <div className="card card-plain mt-8">
                  <div className="card-header pb-0 text-left bg-transparent">
                    <h3 className="font-weight-bolder text-info text-gradient">
                      Welcome back
                    </h3>
                    <p className="mb-0">Enter your email and password to <br/>sign in</p>
                  </div>
                  <div className="card-body">
                    <form method="post" id="form">
                      <div id="msg"></div>
                      <label>Email</label>
                      <div className="mb-3">
                        <input
                          type="email"
                          className="form-control input"
                          placeholder="Email"
                          aria-label="Email"
                          aria-describedby="email-addon"
                          id="email"
                          name="email"
                          autoComplete="email"
                        />
                      </div>
                      <label>Password</label>
                      <div className="mb-3">
                        <input
                          type="password"
                          className="form-control input"
                          placeholder="Password"
                          aria-label="Password"
                          aria-describedby="password-addon"
                          id="password"
                          name="password"
                          autoComplete="new-password"
                        />
                      </div>
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="rememberMe"
                          defaultChecked
                        />
                        <label className="form-check-label" htmlFor="rememberMe">
                          Remember me
                        </label>
                      </div>
                      <div className="text-center">
                        <button
                          type="submit"
                          className="btn bg-gradient-info w-100 mt-4 mb-0"
                        >
                          Sign in
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="card-footer text-center pt-0 px-lg-2 px-1">
                    <p className="mb-4 text-sm mx-auto">
                      Don't have an account?{" "}
                      <Link
                        to="/sign_up"
                        className="text-info text-gradient font-weight-bold"
                      >
                        Sign up
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="oblique position-absolute top-0 h-100 d-md-block d-none me-n8">
                  <div
                    className="oblique-image bg-cover position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6"
                   
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
