"use client";
import React, { useEffect, useState } from "react";
import Login from "./login/page";
import Register from "./register/page";
import Navbar from "@/app/components/Navbar";

function Authorization() {
  const [toggle, setToggle] = useState(true);

  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if localStorage is available before accessing it
    const userDataString = localStorage.getItem("user_data");

    if (userDataString) {
      setUser(JSON.parse(userDataString));
    }
  }, []);

  return (
    <>
      <Navbar />
      {user ? (
        (window.location.href = "/")
      ) : (
        <div className="container-fluid p-0 overflow-hidden">
          <div className="row m-0">
            <div className="form_data">
              <div className="form_size">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="slider-banner">
                      <img
                        src="https://api.cashdost.com/public/uploads/1685362189672signup.jpg"
                        alt="cashdost"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="form-data">
                      <div className="form-heading text-center">
                        <h5>Welcome to Cashdost</h5>
                      </div>
                      <div className="form-input">
                        <div className="form-button-slider">
                          <button
                            type="button"
                            className="btn"
                            onClick={() => setToggle(true)}
                          >
                            Login
                          </button>
                          <button
                            type="button"
                            className="btn"
                            onClick={() => setToggle(false)}
                          >
                            Register
                          </button>
                        </div>
                        {toggle ? <Login /> : <Register />}
                        {/* <div className="or-section text-center">
                          <h5>OR</h5>
                        </div> */}
                      </div>
                      {/* <div className="google-sign">
                        <div className="google ">
                          <Link to={authUrl}>
                            <span className="icon-img">
                              <img
                                src="../assets/image/social-media/search.png"
                                alt=""
                              />
                            </span>
                            <h5>Google</h5>
                          </Link>
                        </div>
                        <div className="google">
                          <a href="">
                            <span className="icon-img">
                              <img
                                src="../assets/image/social-media/facebook.png"
                                alt=""
                              />
                            </span>
                            <h5>Facebook</h5>
                          </a>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Authorization;
