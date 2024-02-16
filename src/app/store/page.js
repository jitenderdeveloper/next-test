import { FiChevronRight } from "react-icons/fi";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import Multi_Store from "../components/multi_store/Multi_Store";

function Store() {
  return (
    <>
      <Navbar />
      <div className="container mt-4 mb-3">
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
                <Link href="#">Store</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Multi_Store />
      <Footer />
    </>
  );
}

export default Store;

export function generateMetadata() {
  return {
    title: "All Stores",
    description:"Explore Best Online Deals, Discounts, Coupons & Shopping offers for top online shopping websites in India. Save your money with Discounts from Cashdost.",
  };
}