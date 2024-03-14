import Link from "next/link";
import React from "react";
import { FiCalendar, FiClock } from "react-icons/fi";

export async function getServerSideProps(keys) {
  const q = keys;
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

async function Store_Coupon({ params }) {
  const client_key = params?.client?.split("-")?.join(" ");
  const { props } = await getServerSideProps(client_key);
  const findalCoupon = props?.coupons?.filter((item) =>
    item.post_data.includes("success")
  );

  return (
    <>
      {findalCoupon?.length === 0 ? (
        <p>Empty Data</p>
      ) : (
        <>
          {findalCoupon?.map((val, ind) => {
            const {
              client,
              description,
              offer,
              _id,
              link,
              title,
              expired_date,
              createdAt,
              category,
            } = val;
            const titles = offer?.split(" ")?.join("-");
            const encodedTitle = encodeURIComponent(titles);
            if (client_key === client.title) {
              return (
                <div key={ind} className="col-12 col-lg-4 col-md-4 mt-4">
                  <Link
                    href={`/coupon/view/${client?.title}/${encodedTitle}/${_id}`}
                  >
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
                            href={`/coupon/view/${client?.title}/${encodedTitle}/${_id}`}
                            // onClick={() => redirectHandler(link)}
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
            }
            return;
          })}
        </>
      )}
    </>
  );
}

export default Store_Coupon;
