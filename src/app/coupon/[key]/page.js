import Head from "next/head";
import {
  FiCalendar,
  FiChevronRight,
  FiClock,
  FiShoppingBag,
  FiTag,
} from "react-icons/fi";
import { ImTicket } from "react-icons/im";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import Coupon_Card from "@/app/components/coupon_card/Coupon_Card";
import Card_Category from "@/app/components/coupon_card/Card_Category";
import Card_Store from "@/app/components/coupon_card/Card_Store";
import Coupon_Single_Card from "@/app/components/coupon_card/Coupon_Single_Card";

function Coupon({ params }) {
  const key = params?.key;
  const keyss = key?.split("-")?.join(" ");

  return (
    <>
      <Head>
        <title>Latest Coupons Codes - Top Brands Promo Codes in India</title>
        <meta
          name="description"
          content="Get latest coupons codes & promo codes to save on online shopping. Cashdost offers top brands promo codes for shopping in India. All codes are ✓ verified."
        />
        <meta name="robots" content="max-image-preview:large" />
        <link rel="canonical" href="https://cashdost.com/latest-coupouns" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Cashdost.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Latest Coupons Codes - Top Brands Promo Codes in India"
        />
        <meta
          property="og:description"
          content="Get latest coupons codes & promo codes to save on online shopping. Cashdost offers top brands promo codes for shopping in India. All codes are ✓ verified."
        />
        <meta
          property="og:url"
          content="https://cashdost.com/latest-coupouns"
        />
        <meta
          property="og:image"
          content="https://cashdost.com/assets/image/Coupon.jpg"
        />
        <meta
          property="og:image:secure_url"
          content="https://cashdost.com/assets/image/Coupon.jpg"
        />
        <meta property="og:image:width" content="346" />
        <meta property="og:image:height" content="266" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Latest Coupons Codes - Top Brands Promo Codes in India"
        />
        <meta
          name="twitter:description"
          content="Get latest coupons codes & promo codes to save on online shopping. Cashdost offers top brands promo codes for shopping in India. All codes are ✓ verified."
        />
        <meta
          name="twitter:image"
          content="https://cashdost.com/assets/image/Coupon.jpg"
        />
      </Head>

      <Navbar />

      <div className="container mt-3 mb-3">
        <div className="row">
          <div className="col-12">
            <ul className="brade-crampe">
              <li>
                <Link href="/">Home</Link>
              </li>
              <span>
                <FiChevronRight />
              </span>
              <li>
                <Link href="/coupon/All">Coupons</Link>
              </li>
              <span>
                <FiChevronRight />
              </span>
              <li>
                <Link href="#">{keyss}</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="coupon-page container mt-5 mb-5">
        <div className="row">
          <div className="col-3 d-sm-none d-none d-lg-block">
            <div className="Search-Coupons-section">
              <div className="KEYWORD-section mb-3">
                <div className="sarch-text">
                  <h5>Search</h5>
                </div>
                <input
                  type="text"
                  placeholder="Search Like: Amazon, Flipkart, Myntra"
                />
              </div>
              <div className="sarch-text">
                <h5>Search Coupons</h5>
              </div>
              <div className="SEARCH-FOR mb-3">
                <div className="row">
                  <div className="col-4">
                    <Link href="/coupon/All">
                      <div className="SEARCH-FOR-ICON">
                        <p>
                          <ImTicket />
                        </p>
                        <p>COUPON</p>
                      </div>
                    </Link>
                  </div>
                  <div className="col-4">
                    <Link href="">
                      <div className="SEARCH-FOR-ICON">
                        <p>
                          <FiTag />
                        </p>
                        <p>SALES</p>
                      </div>
                    </Link>
                  </div>
                  <div className="col-4">
                    <Link href="/store">
                      <div className="SEARCH-FOR-ICON">
                        <p>
                          <FiShoppingBag />
                        </p>
                        <p>STORE</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="CATEGORY-section">
                <div className="row">
                  <div className="col-12 col-lg-12 col-md-12">
                    <div className="client-selector mb-3">
                      <div className="sarch-text">
                        <h5>Category</h5>
                      </div>
                      <Card_Category />
                    </div>
                    <div className="client-selector">
                      <div className="sarch-text">
                        <h5>Store</h5>
                      </div>
                      <Card_Store />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-9 col-12">
            <div className="coupons-header d-flex justify-content-between">
              <div className="fillter-coupons-design d-flex align-items-center justify-content-start">
                <span>Result : {keyss}</span>
              </div>
            </div>
            <div className="coupons-section container p-0 ">
              {key === "All" ? (
                <div className="row">
                  {/* {loading ? (
                    <p>Loading...</p>
                  ) : findalCouponData?.length === 0 ? (
                    <p className="text-center text-secondary">
                      Result is Empty
                    </p>
                  ) : (
                  )} */}
                  <Coupon_Card />
                </div>
              ) : (
                <div className="row">
                  {/* {isLoading ? (
                    <p>Loading...</p>
                  ) : findalCoupon?.length === 0 ? (
                    <p className="text-center text-secondary">
                      Result is Empty
                    </p>
                  ) : (
                    <>
                    </>
                  )} */}
                  <Coupon_Single_Card params={params} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Coupon;
