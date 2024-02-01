import { FiChevronRight, FiShoppingBag } from "react-icons/fi";
import { ImTicket } from "react-icons/im";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import Store_Category from "@/app/components/client_store/Store_Category";
import Client_Store from "@/app/components/client_store/Client_Store";
import Store_Coupon from "@/app/components/client_store/Store_Coupon";
import Store_Deal from "@/app/components/client_store/Store_Deal";
import Store_Btn from "@/app/components/client_store/Store_Btn";

function View_Store({ params, showState }) {
  const client_key = params?.client?.split("-")?.join(" ");
  const cate_key = params?.category;
  const keys = cate_key === "All" ? client_key : cate_key;
  console.log("keys :", showState);

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
                    <div className="client-selector mb-3">
                      <div className="sarch-text">
                        <h5>Category</h5>
                      </div>
                      <Store_Category params={params} />
                    </div>
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
              <Store_Btn params={params} />
            </div>
            <div className="coupons-section container p-0 ">
              {keys ? (
                <div className="row">
                  <Store_Coupon params={params} />
                </div>
              ) : (
                <div className="row">
                  <Store_Deal params={params} />
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

export default View_Store;
