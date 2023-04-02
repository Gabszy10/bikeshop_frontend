import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { userLogin } from "../../store/actions/userActions";
import { ToastContainer, toast, Slide } from "react-toastify";
import Router from "next/router";
import Link from "next/link";
import cookie from "js-cookie";

function Login(props) {
  useEffect(() => {
    let token = cookie.get("_wus_BJK");
    console.log(token);
    if (token) {
      window.location.href = "/";
    }
  }, []);

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const isValid = () => {
    if (!userData.email || !userData.password) {
      toast.error("Please input all fields");
      return false;
    }

    if (userData.password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return false;
    }

    return true;
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    if (isValid()) {
      console.log(userData);
      await props.userLogin(userData, setIsLoading, () => {
        Router.push("/profile");
        setIsLoading(false);
      });
    } else {
      setIsLoading(false);
    }
  };

  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <ToastContainer transition={Slide} />
      <section className="login-area ptb-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="login-content">
                <div className="section-title">
                  <h2>
                    <span className="dot"></span> Login
                  </h2>
                </div>

                <form className="login-form">
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your name"
                      id="name"
                      name="email"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter your password"
                      id="password"
                      name="password"
                      onChange={handleChange}
                    />
                  </div>

                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="btn btn-primary"
                  >
                    Login
                  </button>

                  <Link href="#">
                    <a className="forgot-password">Lost your password?</a>
                  </Link>
                </form>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="new-customer-content">
                <div className="section-title">
                  <h2>
                    <span className="dot"></span> New Customer
                  </h2>
                </div>

                <span>Create a Account</span>
                <p>
                  Sign up for a free account at our store. Registration is quick
                  and easy. It allows you to be able to see and track your
                  orders.
                </p>
                <Link href="/signup">
                  <a className="btn btn-light">Create A Account</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default connect(null, { userLogin })(Login);
