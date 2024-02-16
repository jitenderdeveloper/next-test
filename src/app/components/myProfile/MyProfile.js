"use client";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiCheck, FiMail } from "react-icons/fi";

export function getToken() {
  let user = JSON.parse(localStorage.getItem("user_data"));
  if (user) {
    return user?.token;
  } else {
    return "73j93js857fh589djsjaksj384940DJ34849Djjd";
  }
}

function MyProfile() {
  console.log("user data", getToken());
  const [loading, setLoading] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const storage = JSON.parse(localStorage.getItem("user_data"));

  const getData = async () => {
    try {
      const result = await fetch(
        "https://api.cashdost.com/api/user/user-data",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      const res = await result.json();
      let resData = await res.user_data;

      setUsername(resData.username);
      setEmail(resData.email);
      // setPhone(resData.phone);
    } catch (error) {
      if (error) {
        localStorage.clear();
        window.location.href = "/";
      } else {
        return console.log("profile ->", error.message);
      }
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const UpdateProfile = () => {
    const allData = { username: username, email: email };
    if (!username || !email) {
      toast.error("all fields are required...", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    } else {
      fetch("https://api.cashdost.com/api/user/update-profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getToken()}`,
        },
        body: JSON.stringify(allData),
      })
        .then((res) => res.json())
        .then((result) => {
          if (!result) {
            toast.error(result.message, {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          } else {
            toast.success(result.message, {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });

            // setTimeout(() => {
            //   localStorage.clear();
            //   window.location.href = "/";
            // }, 2000);
          }
        });
    }
  };

  const VerifyHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let Email_data = { email: email };
      fetch("https://api.cashdost.com/api/user/email-send-verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getToken()}`,
        },
        body: JSON.stringify(Email_data),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log("email send", result.message);
          if (!result) {
            toast.error(result.message, {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          } else {
            toast.success(result.message, {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });

            setTimeout(() => {
              localStorage.clear();
              nevigate("/");
              window.location.reload();
            }, 2000);
          }
        })
        .finally(() => {
          setLoading(false);
        });
    } catch (error) {
      toast.error(error.message, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  // const VerifyMobileHandler = () => {
  //   alert("ok");
  // };

  return (
    <>
      <div className="container profile-size p-0">
        <div className="row">
          <div className="col-lg-12">
            <div className="change-password-form">
              <div className="input-fields-data">
                <label>Username</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="input-fields-data">
                <label>Email</label>
                <input
                  type="text"
                  style={{ backgroundColor: "#e0e0e0" }}
                  disabled
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {storage && storage.email_verified !== "false" ? (
                  <span className="verify-info verify-success">
                    <FiCheck />
                  </span>
                ) : (
                  <span
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    className="verify-info"
                    type="button"
                    title="Please verify your email!"
                  >
                    Verify
                  </span>
                )}
              </div>
              {/* <div className="input-fields-data">
                <label>Mobile No.</label>
                <input
                  type="text"
                  style={{ backgroundColor: "#e0e0e0" }}
                  disabled
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                {storage && storage.isVerifyPhone !== "false" ? (
                  <span className="verify-info verify-success">
                    <FiCheck />
                  </span>
                ) : (
                  <span
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModaler"
                    className="verify-info"
                    type="button"
                    title="Please number verify!">
                    Verify
                  </span>
                )}
              </div> */}
              <div className="input-fields-data">
                <button type="button" className="btn" onClick={UpdateProfile}>
                  Update Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --------modal------------- */}
      <div
        className="modal fade"
        aria-labelledby="exampleModalLabel"
        id="exampleModal"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header text-center">
              <h5 className="modal-title " id="exampleModalLabel"></h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="email-form">
                <div className="content-form text-center">
                  <h4>
                    Thanks for Signing Up! Please Verify the E-Mail Address
                  </h4>
                  <p>
                    Hey user, you are just one step away from getting the extra
                    savings, Get access to our store filled with 1000’s of
                    existing deals and coupons.
                  </p>
                </div>
                <form action="" onSubmit={VerifyHandler}>
                  <div className="input-fields">
                    <span className="icon">
                      <FiMail />
                    </span>
                    <input type="text" placeholder="E-mail" value={email} />
                  </div>
                  <div className="input-fields submit-btn">
                    <button type="submit" className="btn" disabled={loading}>
                      {loading ? "Please wait..." : "Verify Email"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --------mobile-otp-verify-modal------------- */}
      {/* <div
        className="modal fade"
        aria-labelledby="exampleModalLabeler"
        id="exampleModaler"
        // data-bs-backdrop="static"
        // data-bs-keyboard="false"
        // aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header text-center">
              <h5 className="modal-title " id="exampleModalLabeler"></h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="email-form">
                <div className="content-form text-center">
                  <h4>
                    Thanks for Signing Up! Please Verify your mobile Number
                  </h4>
                  <p>
                    Hey user, you are just one step away from getting the extra
                    savings, Get access to our store filled with 1000’s of
                    existing deals and coupons.
                  </p>
                </div>
                <form action="" onSubmit={VerifyMobileHandler}>
                  <div className="input-fields">
                    <span className="icon">
                      <FiPhone />
                    </span>
                    <input type="text" placeholder="Phone no." value={phone} />
                  </div>
                  <div className="input-fields submit-btn">
                    <button type="submit" className="btn" disabled={loading}>
                      {loading ? "Please wait..." : "Send OTP"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <ToastContainer />
    </>
  );
}

export default MyProfile;
