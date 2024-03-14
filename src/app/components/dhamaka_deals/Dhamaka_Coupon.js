import Link from "next/link";
import React from "react";
import { FiCalendar, FiClock } from "react-icons/fi";

export async function getData(params) {
  const q = params?.category;
  const res = await fetch(`https://api.cashdost.com/api/store/search/q/${q}`, {
    cache: "force-cache",
  });
  const data = await res.json();
  return {
    props: {
      coupons: data?.client_data?.coupon || {},
    },
  };
}

async function Dhamaka_Coupon({ params }) {
  const { props } = await getData(params);
  const findalCoupons = props?.coupons?.filter((item) =>
    item.post_data.includes("success")
  );

  console.log("product------------------", findalCoupons);

  return (
    <>
      {findalCoupons?.length === 0 ? (
        <p className="text-center text-danger">No Coupons Found</p>
      ) : (
        <>
          {findalCoupons?.map((val, ind) => {
            const {
              client,
              description,
              _id,
              link,
              title,
              offer,
              category,
              createdAt,
              expired_date,
            } = val;
            const titles = title?.split(" ")?.join("-");
            const encodedTitle = encodeURIComponent(titles);
            return (
              <div key={ind} className="col-12 col-lg-4 col-md-4 mt-4">
                <Link href={`/coupon/${client?.title}/${encodedTitle}/${_id}`}>
                  <div className="outer-items">
                    <div className="items-image">
                      <img src={client?.logo} alt={title} lazy="loading" />
                      <span>
                        <h6>
                          <FiClock /> {expired_date}
                        </h6>
                      </span>
                    </div>
                    <div className="items-content">
                      <div className="items-icon d-flex justify-content-between mb-2 mt-1">
                        <span>{category?.name}</span>
                        <span>
                          <FiCalendar /> {createdAt?.slice(0, 10)}
                        </span>
                      </div>
                      <div className="main-content coupon_btn">
                        <h4>{offer?.slice(0, 26)}</h4>
                        <p>{description?.slice(0, 65)}...</p>
                        <Link
                          href={`/coupon/${client?.title}/${encodedTitle}/${_id}`}
                          //   onClick={() => redirectHandler(link)}
                          type="button"
                          className="coupon_link_btn"
                        >
                          <span>Show Coupon</span> ACTIVATE COUPON
                        </Link>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </>
      )}
    </>
  );
}

export default Dhamaka_Coupon;
