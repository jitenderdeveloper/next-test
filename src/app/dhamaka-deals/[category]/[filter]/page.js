import { FiChevronRight, FiShoppingBag } from "react-icons/fi";
import { ImTicket } from "react-icons/im";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import Dhamaka_Store from "@/app/components/dhamaka_deals/Dhamaka_Store";
import Dhamaka_Coupon from "@/app/components/dhamaka_deals/Dhamaka_Coupon";
import Dhamaka_Deal from "@/app/components/dhamaka_deals/Dhamaka_Deal";
import Dhamaka_Category from "@/app/components/dhamaka_deals/Dhamaka_Category";
import { AiFillAppstore } from "react-icons/ai";
import AllProductCoupon from "@/app/components/dhamaka_deals/AllProductCoupon";

function page({ params }) {
  const key = params?.category;
  const categoryFilter = params?.filter;
  const titles = key?.split("-")?.join(" ");

  return (
    <>
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
                <Link href={`/dhamaka-deals/${key}/All`}>Dhamaka Deals</Link>
              </li>
              <span>
                <FiChevronRight />
              </span>
              <li>
                <Link href="#">{titles}</Link>
              </li>
              {categoryFilter === "All" ? null : (
                <>
                  <span>
                    <FiChevronRight />
                  </span>
                  <li>
                    <Link href="#">{categoryFilter}</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>

      <div className="coupon-page container mt-5 mb-5">
        <div className="row">
          <div className="col-3 d-sm-none d-none d-lg-block">
            <div className="Search-Coupons-section">
              <div className="sarch-text">
                <h5>Search Coupons</h5>
              </div>
              <div className="SEARCH-FOR mb-3">
                <div className="row">
                  <div className="col-6">
                    <Link href="/coupon/All">
                      <div className="SEARCH-FOR-ICON">
                        <p>
                          <ImTicket />
                        </p>
                        <p>COUPON</p>
                      </div>
                    </Link>
                  </div>
                  <div className="col-6">
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
                    {/* <div className="client-selector mb-3">
                      <div className="sarch-text">
                        <h5>Category</h5>
                      </div>
                      <Dhamaka_Category />
                    </div> */}
                    <div className="client-selector">
                      <div className="sarch-text">
                        <h5>Store</h5>
                      </div>
                      <Dhamaka_Store />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-9 col-12">
            <div className="coupons-header d-flex justify-content-start flex-column">
              <div className="fillter-coupons-design d-flex align-items-center justify-content-start">
                {/* <Link
                  href={`/dhamaka-deals/${key}/All`}
                  className="btn filter_btn"
                  type="button"
                >
                  <AiFillAppstore /> All
                </Link> */}
                <Link
                  href={`/dhamaka-deals/${key}/Deals`}
                  className="btn filter_btn"
                  type="button"
                >
                  <AiFillAppstore /> Deals
                </Link>
                <Link
                  href={`/dhamaka-deals/${key}/Coupons`}
                  className="btn filter_btn"
                  type="button"
                >
                  <AiFillAppstore /> Coupons
                </Link>
              </div>
            </div>
            <div className="coupons-section container p-0 ">
              {categoryFilter === "Deals" ? (
                <div className="row">
                  <Dhamaka_Deal params={params} />
                </div>
              ) : categoryFilter === "Coupons" ? (
                <div className="row">
                  <Dhamaka_Coupon params={params} />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default page;

export function generateMetadata() {
  return {
    title: "Best Online Deals, Coupons & Shopping offers in India - Cashdost",
    description:
      "Explore Best Online Deals, Discounts, Coupons & Shopping offers for top online shopping websites in India. Save your money with Discounts from Cashdost.",
  };
}
