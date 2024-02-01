import { FiChevronRight } from "react-icons/fi";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import View_Coupon from "@/app/components/view_coupon/View_Coupon";

function CouponDetails({ params }) {
  const titles = params?.title;
  const store = params?.client;
  const spe = titles?.split("-")?.join(" ");

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
                <Link href="/coupon/All">Coupons</Link>
              </li>
              <span>
                <FiChevronRight />
              </span>
              <li>
                <Link href={`/coupon/${store}`}>{store}</Link>
              </li>
              <span>
                <FiChevronRight />
              </span>
              <li>
                <Link href="#">{spe}</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <View_Coupon params={params}/>
      <Footer />
    </>
  );
}

export default CouponDetails;
