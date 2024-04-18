import Link from "next/link";
import { FiCalendar, FiClock } from "react-icons/fi";

export async function getData(params) {
  const q = params?.key;
  const res = await fetch(
    `https://api.cashdost.com/api/coupons/search/q/${q}`,
    {
      cache: "force-cache",
    }
  );
  const data = await res.json();
  return {
    props: {
      coupons: data?.coupons || {},
    },
  };
}

async function Coupon_Single_Card({ params }) {
  const { props } = await getData(params);
  const findalCoupon = props?.coupons?.filter((item) =>
    item.post_data.includes("success")
  );
  return (
    <>
      {findalCoupon?.length === 0 ? (
        <p className="text-center text-secondary">Result is Empty</p>
      ) : (
        <>
          {findalCoupon?.map((val) => {
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
            const split_client = client[0]?.title?.split(" ")?.join("-");
            const encodedTitle = encodeURIComponent(titles);
            return (
              <div key={_id} className="col-12 col-lg-4 col-md-4 mt-4">
                <Link
                  href={`/coupon/view/${split_client}/${encodedTitle}/${_id}`}
                  // onClick={() => redirectHandler(link)}
                >
                  <div className="outer-items">
                    <div className="items-image">
                      <img src={client[0]?.logo} alt={title} lazy="loading" />
                      <span>
                        <h6>
                          <FiClock /> {expired_date}
                        </h6>
                      </span>
                    </div>
                    <div className="items-content">
                      <div className="items-icon d-flex justify-content-between mb-2 mt-1">
                        <span>{category[0]?.name}</span>
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
          })}
        </>
      )}
    </>
  );
}

export default Coupon_Single_Card;
