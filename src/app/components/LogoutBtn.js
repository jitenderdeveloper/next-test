"use client";

import Link from "next/link";
import Script from "next/script";
import { useState } from "react";
import { FiLogIn, FiUser } from "react-icons/fi";

function LogoutBtn() {
  //   const [show, setShow] = useState(false);
  const userDataString = localStorage.getItem("user_data");
  const user = JSON.parse(userDataString);

  const LogoutHandler = () => {
    localStorage.removeItem("user_data");
    window.location.href = "/";
  };

  return (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" />
      {!user ? (
        <>
          <div className="signup-btn">
            <Link href="/user" type="button" className="btn">
              Login / Signup
            </Link>
          </div>
          <div className="signup-btn mobile-nav-res">
            <Link href="/user" type="button" className="btn">
              <FiLogIn />
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="profile-icon">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-secondary dropdown-toggle rounded-circle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://api.cashdost.com/public/uploads/1689068407991user.png"
                  alt="cashdost-user"
                />
              </button>

              <ul className="dropdown-menu dropdown-menu-end">
                <div className="user-name">
                  <div className="prfile-icons">
                    <FiUser />
                  </div>
                  <div className="profile-content">
                    <h5>{user && user.username}</h5>
                    <h5 style={{ marginTop: "0px" }}>{user && user.email}</h5>
                  </div>
                </div>
                <li className="nav-item">
                  <Link className="nav-link" href="/user-profile">
                    Profile
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    href="#"
                    type="button"
                    className="nav-link logout-btn"
                    onClick={LogoutHandler}
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default LogoutBtn;
