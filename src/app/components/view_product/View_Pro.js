import { FiChevronRight } from "react-icons/fi";

import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Social_Share from "../social_share/Social_Share";

export async function getData(params) {
  const id = params?.id;
  const res = await fetch(`https://api.cashdost.com/api/product/${id}`, {
    cache: "force-cache",
  });
  const data = await res.json();
  return {
    props: {
      product: data?.product_data || {},
    },
  };
}

async function View_Pro({ params }) {
  const titles = params?.title;
  const store = params?.client;
  const spe = titles?.split("-")?.join(" ");

  const { props } = await getData(params);

  const share_loc = `https://cashdost.com/deals/${store}/${titles}/${params?.id}`;

  const {
    category,
    client,
    title,
    feature,
    image,
    link,
    mrp_rate,
    real_rate,
    offer,
    description,
  } = props?.product || {};

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
                <Link href="/store">Store</Link>
              </li>
              <span>
                <FiChevronRight />
              </span>
              <li>
                <Link href={`/store/${store}/All`}>{store}</Link>
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

      <div className="container mt-5 mb-5 ">
        <div className="row single-product">
          <div className="col-lg-5 col-md-5 col-12 p-0">
            <div className="heading-img">
              <img src={image} alt={title} />
              <span>
                <img src={client?.logo} alt={title} />
              </span>
            </div>
          </div>
          <div className="col-lg-7 col-md-7 col-12 p-0">
            <div className="Details_card">
              <div className="product-single-content">
                <h2>{title}</h2>
                <h6 className="mb-3">{offer}</h6>
                <span className="mx-3">{category?.name}</span>
                <span>{client?.title}</span>
                <h6 className="mt-3 mb-3">
                  {mrp_rate === null || mrp_rate === undefined ? null : (
                    <s className="text-danger">₹ {mrp_rate}</s>
                  )}{" "}
                  {real_rate === null || real_rate === undefined
                    ? null
                    : `₹ ${real_rate}`}
                </h6>
                <div className="deals-btn-product d-flex justify-content-between">
                  <Link
                    type="button"
                    className="button_btn"
                    href=""
                    target="_blank"
                  >
                    Deals Now
                  </Link>
                  <Social_Share share_loc={share_loc} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row single-product mt-4">
          <div className="col-12">
            <div className="description-product">
              <h5>Description</h5>
              <p>{description}</p>
              <h5>Feature</h5>
              <ul>
                {feature?.map((val, ind) => {
                  return <li key={ind}>{val}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default View_Pro;
