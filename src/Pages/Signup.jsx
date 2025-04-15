import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Css/login.css";

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    c_password: "",
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (formData.password !== formData.c_password) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post("https://zotech.onrender.com/api/users", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      console.log("Signup Successful:", response.data);
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="Signup">
      <section className="min-vh-100 mb-8">
        <div className="page-header align-items-start min-vh-50 pt-5 pb-11 m-3 border-radius-lg page-banner">
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
                <div className="card-header text-center pt-4" style={{ paddingBottom: "0" }}>
                  <h5>Register</h5>
                  <p>Create an account and shop with ease!</p>
                </div>

                <div className="card-body" style={{ paddingTop: "0" }}>
                  <form onSubmit={handleSubmit}>
                    {error && <div className="alert alert-danger">{error}</div>}

                    <div className="mb-3">
                      <input type="text" className="form-control input" placeholder="Name" name="name" value={formData.name} onChange={handleChange} required />
                    </div>

                    <div className="mb-3">
                      <input type="email" className="form-control input" placeholder="Email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>

                    <div className="mb-3">
                      <input type="password" className="form-control input" placeholder="Password" name="password" value={formData.password} onChange={handleChange} required />
                    </div>

                    <div className="mb-3">
                      <input type="password" className="form-control input" placeholder="Repeat Password" name="c_password" value={formData.c_password} onChange={handleChange} required />
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
                      <button type="submit" className="btn bg-gradient-dark w-100 my-4 mb-2" disabled={loading}>
                        {loading ? "Signing up..." : "Sign up"}
                      </button>
                    </div>

                    <p className="text-sm mt-3 mb-0">
                      Already have an account?{" "}
                      <a href="/login" className="text-dark font-weight-bolder">
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
