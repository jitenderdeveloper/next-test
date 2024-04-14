import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiCalendar } from "react-icons/fi";

export async function getData(params) {
  const q = params?.category;
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

const Dhamaka_Deal = async ({ params }) => {
  const { props } = await getData(params);
  const serverData = props?.product;
  const findalProduct = serverData?.filter((item) =>
    item.post_data.includes("success")
  );

  return (
    <>
      {findalProduct?.length === 0 ? (
        <p className="text-center text-danger">No Product Found</p>
      ) : (
        <>
          {findalProduct?.map((val, ind) => {
            const {
              client,
              description,
              _id,
              link,
              title,
              image,
              category,
              createdAt,
            } = val;
            const titles = title?.split(" ")?.join("-");
            const encodedTitle = encodeURIComponent(titles);
            return (
              <div key={ind} className="col-12 col-lg-4 col-md-4 mt-4">
                <Link href={`/store/${client?.title}/${encodedTitle}/${_id}`}>
                  <div className="outer-items">
                    <div className="items-image">
                      <Image width={100} height={100} src={image} alt={title} lazy="loading" />
                      <span>
                        <Image width={100} height={100}
                          src={client?.logo}
                          alt={client?.title}
                          lazy="loading"
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
                          href={`/store/${client?.title}/${encodedTitle}/${_id}`}
                          type="button"
                        >
                          Grab Now
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
};

export default Dhamaka_Deal;
