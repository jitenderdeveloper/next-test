"use client";
import React, { useState } from "react";
import { FiLock, FiMail, FiUser } from "react-icons/fi";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const [loading, setLoading] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_Confirmation] = useState("");

  const RegisterHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const AllData = {
        username: username,
        email: email,
        password: password,
        password_confirmation: password_confirmation,
      };
      if (!username || !email || !password || !password_confirmation) {
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
        setTimeout(() => {
          setLoading(false);
        }, 2000);
        return;
      } else if (password !== password_confirmation) {
        toast.error("Password and Confirm Password doesn't match", {
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
          setLoading(false);
        }, 2000);
        return;
      } else {
        fetch(`https://api.cashdost.com/api/user/register`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(AllData),
        })
          .then((res) => res.json())
          .then((result) => {
            // console.log(result);
            let allResult = result.user;
            if (!allResult) {
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
              setTimeout(() => {
                setLoading(false);
              }, 2000);
              return;
            } else {
              // localStorage.setItem("user_data", JSON.stringify(allResult));
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
                window.location.href = "/";
              }, 3000);
            }
          })
          .finally(() => {
            setLoading(false);
          });
      }
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

  return (
    <>
      <div className="form">
        <form onSubmit={RegisterHandler}>
          <div className="input-fields">
            <span className="icon">
              <FiUser />
            </span>
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-fields">
            <span className="icon">
              <FiMail />
            </span>
            <input
              type="text"
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* <div className="input-fields">
            <span className="icon">
              <FiPhone />
            </span>
            <input
              type="phone"
              placeholder="Phone"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div> */}
          <div className="input-fields">
            <span className="icon">
              <FiLock />
            </span>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-fields">
            <span className="icon">
              <FiLock />
            </span>
            <input
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => setPassword_Confirmation(e.target.value)}
            />
          </div>
          <div className="input-fields submit-btn">
            <button type="submit" className="btn" disabled={loading}>
              {loading ? "Please wait..." : "Sign Up"}
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </>
  );
}

export default Register;
