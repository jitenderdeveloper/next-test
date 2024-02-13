import Link from "next/link";
import { FiEye } from "react-icons/fi";

export async function getServerSideProps() {
  const res = await fetch("https://api.cashdost.com/api/store", {
    cache: "force-cache",
  });
  const data = await res.json();
  return {
    props: {
      store: data?.client || {},
    },
  };
}

async function Multi_Store() {
  const { props } = await getServerSideProps();
  const findalStore = await props?.store?.filter((item) =>
    item.post_data.includes("success")
  );
  // console.log(props);
  return (
    <>
      <div className="container">
        <div className="row product-grid mt-5 mb-5">
          {findalStore?.map((val, ind) => {
            const { title, offer, logo } = val;
            let clients = title?.split(" ")?.join("-");
            return (
              <div key={ind} className="product-items">
                <Link href={`/store/${clients}/All`}>
                  <div className="slider-card">
                    <div className="card-img card-logo">
                      <img src={logo} alt={title} lazy="loading" />
                      <div className="link-live">
                        <Link
                          href={`/store/${clients}/All`}
                          title="View Product Details"
                          type="button"
                        >
                          <FiEye />
                        </Link>
                      </div>
                    </div>
                    <div className="card-content tranding-offer">
                      <h1>{title}</h1>
                      <h5 className="mt-0">{offer?.slice(0, 50)}</h5>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Multi_Store;

{
  /* <span className="total_coupons_data">
                        <Link href={`/coupon/${title}`} type="button">
                          23+ COUPONS
                        </Link>
                        <Link href="" type="button">
                          43+ DEALS
                        </Link>
                      </span> */
}
