import { FiCalendar } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

export async function getServerSideProps() {
  const res = await fetch("https://api.cashdost.com/api/product", {
    cache: "force-cache",
  });
  const data = await res.json();
  return {
    props: {
      product: data?.product_data || {},
    },
  };
}

const Deals = async () => {
  const data = await getServerSideProps();
  const serverData = data?.props?.product;
  const findalData = serverData?.filter((item) =>
    item.post_data.includes("success")
  );

  return (
    <div className="home-coupon-section mt-5 mb-5">
      <div className="home-coupon container">
        <div className="row mb-5">
          <div className="col-12 ">
            <div className="deals-heading">
              <h4>Today Top Deals</h4>
              <Link href="/store">View All</Link>
            </div>
          </div>
        </div>
        <div className="coupon-grid">
          <div className="row">
            {findalData?.slice(0, 40)?.map((val) => {
              const {
                client,
                description,
                image,
                title,
                category,
                createdAt,
                link,
                _id,
              } = val;
              const titles = title?.split(" ")?.join("-");
              const clients = client?.title?.split(" ")?.join("-");
              const encodedTitle = encodeURIComponent(titles);
              return (
                <div key={_id} className="col-12 col-lg-3 col-md-4 mt-2 mb-4">
                  <Link href={`/deals/${clients}/${encodedTitle}/${_id}`}>
                    <div className="outer-items">
                      <div className="items-image">
                        <Image
                          width={100}
                          height={100}
                          src={image}
                          alt={title}
                          loading="lazy"
                        />
                        <span>
                          <Image
                            width={100}
                            height={100}
                            src={client?.logo}
                            alt={client?.title}
                          />
                        </span>
                      </div>
                      <div className="items-content">
                        <div className="items-icon d-flex justify-content-between mb-2 mt-1">
                          <span>{category?.name}</span>
                          <span>
                            <FiCalendar /> {createdAt?.slice(0, 10)}
                          </span>
                        </div>
                        <div className="main-content">
                          <h4>{title?.slice(0, 26)}...</h4>
                          <p>{description?.slice(0, 65)}...</p>
                          <Link
                            href={`/deals/${clients}/${encodedTitle}/${_id}`}
                            type="button"
                          >
                            Grab Deal
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;
