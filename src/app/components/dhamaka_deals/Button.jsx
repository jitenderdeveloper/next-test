"use client";
import { useState } from "react";

function Button({ params }) {

  const [show, setShow] = useState(true);
  const dealHandlerFun = () => {
    setShow(true);
  };

  const couponHandlerFun = () => {
    setShow(false);
  };
  return (
    <>
      <div className="filter_button_section ">
        <button className="btn" onClick={dealHandlerFun} disabled>
          DEALS
        </button>
        <button className="btn" onClick={couponHandlerFun} disabled>
          COUPONS
        </button>
      </div>
    </>
  );
}

export default Button;
