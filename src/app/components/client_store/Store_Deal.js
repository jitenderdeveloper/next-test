import Link from "next/link";
import React from "react";
import { FiCalendar, FiClock } from "react-icons/fi";

export async function getData(keys) {
  const q = keys;
  const res = await fetch(`https://api.cashdost.com/api/store/search/q/${q}`, {
    cache: "force-cache",
  });
  const data = await res.json();
  return {
    props: {
      product: data?.client_data?.product || {},
    },
  };
}

const Store_Deal = async ({ params }) => {
  
  const client_key = params?.client?.split("-")?.join(" ");
  const { props } = await getData(client_key);
  const serverData = props?.product;
  const finalFilterDeals = serverData?.filter((item) =>
    item.post_data.includes("success")
  );

  return (
    <>
    {
      finalFilterDeals?.length === 0 ?
      <p>Empty Data</p>
      :
      <>

      </>
    }
      {finalFilterDeals?.map((val, ind) => {
        const {
          client,
          description,
          _id,
          link,
          title,
          coupon_input,
          image,
          category,
          createdAt,
          expired_date,
          offer,
        } = val;
        const titles = title?.split(" ")?.join("-");
        const encodedTitle = encodeURIComponent(titles);

        const titlees = offer?.split(" ")?.join("-");
        const encodedTitles = encodeURIComponent(titlees);
        if (client_key === client.title) {
          return (
            <div key={ind} className="col-12 col-lg-4 col-md-4 mt-4">
              <Link href={`/deals/${client?.title}/${encodedTitle}/${_id}`}>
                <div className="outer-items">
                  <div className="items-image">
                    {coupon_input ? (
                      <img src={client?.logo} alt={title} lazy="loading" />
                    ) : (
                      <img src={image} alt={title} lazy="loading" />
                    )}
                    {coupon_input ? (
                      <span>
                        <h6>
                          <FiClock /> {expired_date}
                        </h6>
                      </span>
                    ) : (
                      <span>
                        <img
                          src={client?.logo}
                          alt={client?.title}
                          lazy="loading"
                        />
                      </span>
                    )}
                  </div>
                  <div className="items-content">
                    <div className="items-icon d-flex justify-content-between mb-2 mt-1">
                      <span>{category?.name}</span>
                      <span>
                        <FiCalendar /> {createdAt?.slice(0, 10)}
                      </span>
                    </div>
                    <div className="main-content coupon_btn">
                      {coupon_input ? (
                        <h4>{offer?.slice(0, 26)}</h4>
                      ) : (
                        <h4>{title?.slice(0, 26)}...</h4>
                      )}
                      <p>{description?.slice(0, 65)}...</p>
                      {coupon_input ? (
                        <Link
                          href={`/coupon/${client?.title}/${encodedTitles}/${_id}`}
                          //   onClick={() => redirectHandler(link)}
                          type="button"
                          className="coupon_link_btn"
                        >
                          <span>Show Coupon</span> ACTIVATE COUPON
                        </Link>
                      ) : (
                        <Link
                          href={`/store/${client?.title}/${encodedTitle}/${_id}`}
                          //   onClick={() => redirectHandler(link)}
                          type="button"
                        >
                          Grab Now
                        </Link>
                      )}
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
  );
};

export default Store_Deal;
