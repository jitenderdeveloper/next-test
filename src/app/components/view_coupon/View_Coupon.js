import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import Button from "./Button";
import Social_Share from "./Social_Share";

export async function getData(params) {
  const id = params?.id;
  const res = await fetch(`https://api.cashdost.com/api/coupons/${id}`, {
    cache: "force-cache",
  });
  const data = await res.json();
  return {
    props: {
      coupon: data?.coupons || {},
    },
  };
}

async function View_Coupon({ params }) {
  const titles = params?.title;
  const store = params?.client;

  const { props } = await getData(params);

  const share_loc = `https://cashdost.com/coupon/view/${store}/${titles}/${params?.id}`;

  const { client, description, feature, coupon_input, offer } =
    props?.coupon || {};

  // const redirectCouponHandler = (client) => {
  //   const client_link = client?.link;
  //   setTimeout(() => {
  //     window.open(client_link);
  //   }, 2000);
  // };

  return (
    <>
      <div className="container mt-5 mb-5 single-coupons-details">
        <div className="row">
          <div className="col-8">
            <div className="coupons-details">
              <div className="coupon-logo-img">
                <img src={client?.logo} alt={client?.title} />
              </div>
              <h1>{offer}</h1>
              <p>{description}</p>
            </div>
            <div className="copy-coupons-details mt-2 d-flex justify-content-start">
              <h4
                className="mb-0"
                // onClick={() => redirectCouponHandler(client)}
              >
                {coupon_input}
              </h4>
              <Button coupon_input={coupon_input} client={client} />
            </div>
            <div className="coupons-web-redirect mt-2">
              <Link href={`${client?.link}`} target="_blank">
                <FiArrowUpRight /> Go to {client?.title}
              </Link>
            </div>
            <Social_Share share_loc={share_loc} />
          </div>
          <div className="col-4">
            <ul className="feature-list">
              {feature?.map((val, ind) => {
                return <li key={ind}>{val}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default View_Coupon;
