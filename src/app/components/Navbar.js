import { FiMenu, FiUser } from "react-icons/fi";
import { BsTelegram } from "react-icons/bs";
import Link from "next/link";
import Search_Bar from "./search/Search_Bar";
import LogoutBtn from "./LogoutBtn";
import Logo from "../../../public/assets/image/logo.png";
import Image from "next/image";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top desktop_menu">
        <div className="container navbar-container">
          <Link className="navbar-brand" href="/">
            <Image width={100} height={100} src={Logo.src} alt="cashdost" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <FiMenu />
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" href="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/store">
                  Store
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/coupon/All">
                  Coupons
                </Link>
              </li>
            </ul>
          </div>
          <Search_Bar />

          <div className="search-icon tele-btn">
            <Link
              href="https://t.me/Cashdostin"
              target="_blank"
              type="button"
              className="link-btn"
            >
              <span>
                <BsTelegram />
              </span>
              Join Us
            </Link>
          </div>
          <LogoutBtn />
        </div>
      </nav>

      <nav className="navbar navbar-expand-lg navbar-light bg-light mobile_menu">
        <div className="container navbar-container mobile_version">
          <Link className="navbar-brand" href="/">
            <Image width={100} height={100} src={Logo.src} alt="cashdost" />
          </Link>
          <div className="search-icon tele-btn">
            <Link
              href="https://t.me/Cashdostin"
              target="_blank"
              type="button"
              className="link-btn"
            >
              <span>
                <BsTelegram />
              </span>
              Join Us
            </Link>
          </div>
          <LogoutBtn />
          <ul className="nav_link_mobile ml-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" href="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/store">
                Store
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/coupon/All">
                Coupons
              </Link>
            </li>
          </ul>
          <Search_Bar />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
