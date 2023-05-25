import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { ToastContainer, toast, Slide } from "react-toastify";
import { userRegister } from "../../store/actions/userActions";
import Router from "next/router";
import Link from "next/link";
import cookie from "js-cookie";

function Register(props) {
  useEffect(() => {
    let token = cookie.get("_wus_BJK");
    console.log(token);
    if (token) {
      window.location.href = "/";
    }
  }, []);

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const isValid = () => {
    if (
      !userData.email ||
      !userData.password ||
      !userData.confirmPassword ||
      !userData.firstName ||
      !userData.address ||
      !userData.lastName
    ) {
      toast.error("Please input all fields");
      return false;
    }

    if (userData.password.length < 6 || userData.confirmPassword.length < 6) {
      toast.error("Password must be at least 6 characters");
      return false;
    }

    if (userData.password !== userData.confirmPassword) {
      toast.error("Passwords do not match");
      return false;
    }

    return true;
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    if (isValid()) {
      console.log(userData);
      await props.userRegister(userData, setIsLoading, () => {
        toast.success("User successfully registered!");
        Router.push("/profile");
        setIsLoading(false);
      });
    } else {
      setIsLoading(false);
    }
  };

  return (
    <>
      <ToastContainer transition={Slide} />
      <section className="signup-area ptb-60">
        <div className="container">
          <div className="signup-content">
            <div className="section-title">
              <h2>
                <span className="dot"></span> Create an Account
              </h2>
            </div>

            <form className="signup-form">
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                  id="fname"
                  name="firstName"
                  onChange={(e) => handleChange(e)}
                />
              </div>

              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                  id="lname"
                  name="lastName"
                  onChange={(e) => handleChange(e)}
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your name"
                  id="name"
                  name="email"
                  onChange={(e) => handleChange(e)}
                />
              </div>

              <div className="form-group">
                <label>Address</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your address"
                  id="address"
                  name="address"
                  onChange={(e) => handleChange(e)}
                />
              </div>

              <div className="form-group">
                <label>Town / City</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your town / city"
                  id="city"
                  name="city"
                  onChange={(e) => handleChange(e)}
                />
              </div>

              <div className="form-group">
                <label>Postcode / Zip</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your zip code"
                  id="zip"
                  name="zip"
                  onChange={(e) => handleChange(e)}
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
                  onChange={(e) => handleChange(e)}
                />
              </div>

              <div className="form-group">
                <label>Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm password"
                  id="password"
                  name="confirmPassword"
                  onChange={(e) => handleChange(e)}
                />
              </div>

              <button
                onClick={handleSubmit}
                type="button"
                className="btn btn-primary"
              >
                Signup
              </button>
              <Link href="/">
                <a className="return-store">or Return to Store</a>
              </Link>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default connect(null, { userRegister })(Register);
