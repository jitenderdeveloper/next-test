"use client";

import Link from "next/link";
import Script from "next/script";
import { useEffect, useState } from "react";
import { FiLogIn, FiUser } from "react-icons/fi";

function LogoutBtn() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    
    const userDataString = localStorage.getItem("user_data");

    if (userDataString) {
      setUser(JSON.parse(userDataString));
    }
  }, []); // Empty dependency array ensures this effect runs only once after mount

  const logoutHandler = () => {
    // Remove user data from localStorage
    localStorage.removeItem("user_data");
    setUser(null);
    // Redirect or handle logout action
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
                    onClick={logoutHandler}
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
