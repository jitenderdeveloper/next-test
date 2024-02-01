import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import {
  CiFacebook,
  CiInstagram,
  CiLinkedin,
  CiTwitter,
  CiYoutube,
} from "react-icons/ci";
import { SiQuora } from "react-icons/si";
import { ImPinterest2 } from "react-icons/im";
import Link from "next/link";

function Footer() {
  return (
    <>
      <div className="container-fluid p-0 footer-bg">
        <div className="row m-0">
          <div className="col-lg-12 col-md-12 col-12">
            <div className="footer-section">
              <div className="inner-section">
                <div className="footer-logo">
                  <Link href="/">
                    <img
                      src="https://api.cashdost.com/public/uploads/1682425219182cashdost1.png"
                      alt="cashdost"
                    />
                  </Link>
                </div>
                <div className="logo-para">
                  <p>
                    We at cashdost come with the motive of friendship with the
                    customer by providing them the best shopping experience and
                    giving them the best offers and deals in the industry. We
                    believe that shopping should always bring happiness and this
                    can only be possible when the buyers gets additional
                    discounts and counts the deal that he has made the best deal
                    in the current time. <Link href="/about-us">See More</Link>{" "}
                    ...
                  </p>
                </div>
              </div>
              <div className="inner-section">
                <div className="footer-heading">
                  <h4>IMPORTANT LINKS</h4>
                </div>
                <ul>
                  <li>
                    <Link href="/about-us">About Us</Link>
                  </li>
                  <li>
                    <Link href="/contact-us">Contact Us</Link>
                  </li>
                  <li>
                    <Link href="/blog/category/filter/All">Cashdost Blog</Link>
                  </li>
                  {/* <li>
                    <Link href="/product-store-testing/category/All">Testing</Link>
                  </li> */}
                </ul>
              </div>
              <div className="inner-section">
                <div className="footer-heading">
                  <h4>EASY GUIDE</h4>
                </div>
                <ul>
                  <li>
                    <Link href="/store">All Store</Link>
                  </li>
                  <li>
                    <Link href="/coupon/All">Coupons</Link>
                  </li>
                </ul>
              </div>
              <div className="inner-section">
                <div className="footer-heading">
                  <h4>CONTACT WITH US</h4>
                </div>
                <ul className="social-media">
                  <li>
                    <Link href="https://twitter.com/home" target="_blank">
                      <CiTwitter />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.facebook.com/cashdostmoneyinyourhand"
                      target="_blank"
                    >
                      <CiFacebook />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.instagram.com/_cashdost_/"
                      target="_blank"
                    >
                      <CiInstagram />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.linkedin.com/company/cashdost/"
                      target="_blank"
                    >
                      <CiLinkedin />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.quora.com/profile/Cashdost-Save-Money-While-Shopping-Online"
                      target="_blank"
                    >
                      <SiQuora />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://in.pinterest.com/cashdost/"
                      target="_blank"
                    >
                      <ImPinterest2 />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.youtube.com/channel/UCw78iWKwOLEgomJE3hV86ZQ"
                      target="_blank"
                    >
                      <CiYoutube />
                    </Link>
                  </li>
                </ul>
                {/* <div className="playstore">
                  <div className="store-img">
                    <Link href="/coming-soon">
                      <img
                        src="https://api.cashdost.com/public/uploads/1683723783324playstore.png"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="store-img">
                    <Link href="/coming-soon">
                      <img
                        src="https://api.cashdost.com/public/uploads/1683723795866iso.png"
                        alt=""
                      />
                    </Link>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-12">
            <div className="bottom-footer">
              <div className="company">
                <h5>© 2023 Cashdost: All Right Reserved</h5>
              </div>
              <div className="policy">
                <ul>
                  <li>
                    <Link href="/terms-and-condition">Terms & Conditions</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
