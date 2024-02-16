"use client"
import { useState } from "react";
import { AiFillAppstore } from "react-icons/ai";
import { ImTicket } from "react-icons/im";

function Store_Btn({ params }) {
  const client_key = params?.client?.split("-")?.join(" ");
  const cate_key = params?.category;
  const [show, setShow] = useState(false)
  //   const { data: allData } = useAllSearchCouponAndDealsQuery(client_key);
  //   const SearchDATA = allData?.Search;

  const dealHandlerFun = () => {
    setShow(true);
  };
  const couponHandlerFun = () => {
    setShow(false);
  };
  
  return (
    <>
      {/* <span>{SearchDATA?.length}+</span> */}
      <div className="fillter-coupons-design d-flex align-items-center justify-content-start">
        <button type="button" onClick={dealHandlerFun}>
          <AiFillAppstore /> ALL
        </button>
        <button type="button" onClick={couponHandlerFun}>
          <ImTicket /> COUPONS
        </button>
        <span>Result : {cate_key}</span>
      </div>
    </>
  );
}

export default Store_Btn;
