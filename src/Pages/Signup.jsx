import React from 'react';
import "./Css/login.css";

function Signup() {
  const changeColor = (id) => {
    // Example function (modify as needed)
    document.getElementById(id).style.borderColor = "blue";
  };

  return (
    <div className="Signup">
      <section className="min-vh-100 mb-8">
        <div
          className="page-header align-items-start min-vh-50 pt-5 pb-11 m-3 border-radius-lg page-banner"
         
        >
          <span className="mask bg-gradient-dark opacity-6"></span>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-5 text-center mx-auto">
                <h1 className="text-white mb-2 mt-5">Join Us & Start Shopping!</h1>
                <p className="text-lead text-white">Get exclusive deals, fast delivery, and a personalized experience!</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row mt-lg-n10 mt-md-n11 mt-n10">
            <div className="col-xl-4 col-lg-5 col-md-7 mx-auto">
              <div className="card z-index-0">
                <div className="card-header text-center pt-4" style={{paddingBottom:'0'}}>
                  <h5>Register</h5>
                  <p >Create an account and shop with ease!</p>
                </div>

                <div className="card-body" style={{paddingTop:'0'}}>
                  <form role="form text-left" action="" method="post" id="form">
                    <div id="msg"></div>

                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control input"
                        placeholder="Name"
                        id="name"
                        name="name"
                        onKeyUp={() => changeColor('name')}
                      />
                    </div>

                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control input"
                        placeholder="Email"
                        id="email"
                        name="email"
                        onKeyUp={() => changeColor('email')}
                      />
                    </div>

                    <div className="mb-3">
                      <input
                        type="password"
                        className="form-control input"
                        placeholder="Password"
                        id="password"
                        name="password"
                        onKeyUp={() => changeColor('password')}
                        autoComplete="new-password"
                      />
                    </div>

                    <div className="mb-3">
                      <input
                        type="password"
                        className="form-control input"
                        placeholder="Repeat Password"
                        id="c_password"
                        onKeyUp={() => changeColor('c_password')}
                        autoComplete="new-password"
                      />
                    </div>

                    <div className="form-check form-check-info text-left">
                      <input className="form-check-input" type="checkbox" id="flexCheckDefault" defaultChecked />
                      <label className="form-check-label" htmlFor="flexCheckDefault">
                        I agree to the{" "}
                        <a href="#" className="text-dark font-weight-bolder">
                          Terms and Conditions
                        </a>
                      </label>
                    </div>

                    <div className="text-center">
                      <button type="submit" className="btn bg-gradient-dark w-100 my-4 mb-2">
                        Sign up
                      </button>
                    </div>

                    <p className="text-sm mt-3 mb-0">
                      Already have an account?{" "}
                      <a href="#" className="text-dark font-weight-bolder">
                        Sign in
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Signup;
