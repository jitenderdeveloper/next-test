import { FiChevronRight, FiShoppingBag } from "react-icons/fi";
import { ImTicket } from "react-icons/im";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import Store_Category from "@/app/components/client_store/Store_Category";
import Client_Store from "@/app/components/client_store/Client_Store";
import Store_Coupon from "@/app/components/client_store/Store_Coupon";
import Store_Deal from "@/app/components/client_store/Store_Deal";
import { AiFillAppstore } from "react-icons/ai";
import AllProductCoupon from "@/app/components/client_store/AllProductCoupon";

async function View_Store({ params }) {
  const client_key = params?.client?.split("-")?.join(" ");
  const cate_key = params?.category;
  const keys = cate_key === "All" ? client_key : cate_key;
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
                <Link href="/store">Store</Link>
              </li>
              <span>
                <FiChevronRight />
              </span>
              <li>
                <Link href={`/store/${params?.client}/All`}>{client_key}</Link>
              </li>
              <span>
                <FiChevronRight />
              </span>
              <li>
                <Link href="#">{cate_key}</Link>
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
                      <Store_Category params={params} />
                    </div> */}
                    <div className="client-selector">
                      <div className="sarch-text">
                        <h5>Store</h5>
                      </div>
                      <Client_Store params={params} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9 col-12">
            <div className="coupons-header d-flex justify-content-between">
              <div className="fillter-coupons-design d-flex align-items-center justify-content-start">
                <Link
                  href={`/store/${params?.client}/All`}
                  className="btn filter_btn"
                  type="button"
                >
                  <AiFillAppstore /> ALL
                </Link>
                <Link
                  href={`/store/${params?.client}/Deals`}
                  className="btn filter_btn"
                  type="button"
                >
                  <AiFillAppstore /> Deals
                </Link>
                <Link
                  href={`/store/${params?.client}/Coupons`}
                  className="btn filter_btn"
                  type="button"
                >
                  <AiFillAppstore /> Coupons
                </Link>
                <span>Result : {keys}</span>
              </div>
            </div>
            <div className="coupons-section container p-0 ">
              {cate_key === "All" ? (
                <div className="row">
                  <AllProductCoupon params={params} />
                </div>
              ) : cate_key === "Deals" ? (
                <div className="row">
                  <Store_Deal params={params} />
                </div>
              ) : cate_key === "Coupons" ? (
                <div className="row">
                  <Store_Coupon params={params} />
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

export default View_Store;
