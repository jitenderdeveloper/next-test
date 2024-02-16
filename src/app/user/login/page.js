"use client";
import Link from "next/link";
import { useState } from "react";
import { FiLock, FiMail } from "react-icons/fi";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const LoginHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const AllData = { email: email, password: password };
      fetch("https://api.cashdost.com/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(AllData),
      })
        .then((res) => res.json())
        .then((result) => {
          let AllLogin = result.user;
          if (!AllLogin) {
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
            return;
          } else if (AllLogin.role === "admin") {
            toast.error("your credentials is wrong!", {
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
            toast.success(`Hey ${AllLogin.username} Welcome to Cashdost`, {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });

            localStorage.setItem("user_data", JSON.stringify(AllLogin));
            setTimeout(() => {
              window.location.href = "/";
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

  return (
    <>
      <div className="form">
        <form onSubmit={LoginHandler}>
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
          <div className="forgot">
            <Link href="/profile/send-mail">Forgot Password</Link>
          </div>
          <div className="input-fields submit-btn">
            <button type="submit" className="btn" disabled={loading}>
              {loading ? "Please wait..." : "Log In"}
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </>
  );
}

export default Login;
