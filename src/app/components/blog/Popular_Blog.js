import Link from "next/link";

export async function getData() {
  const res = await fetch("https://api.cashdost.com/api/blog", {
    cache: "force-cache",
  });
  const data = await res.json();
  return {
    props: {
      blog: data?.blog || {},
    },
  };
}

async function Popular_Blog() {
  const data = await getData();
  const serverData = data?.props?.blog;

  const findalData = serverData?.filter((item) =>
    item.status.includes("success")
  );

  const trendingData = findalData?.filter((ele) =>
    ele.trending.includes("Yes")
  );

  return (
    <>
      <div className="col-lg-12 col-md-12 col-12">
        <div className="category-filter">
          <h6 className="mb-3">Popular Coupons & Deals</h6>
          <div className="popular-post-blog">
            <ul className="ul-list">
              {trendingData?.slice(0, 10)?.map((val, ind) => {
                const { _id, title, image } = val;
                let titles = title?.split(" ")?.join("-");
                return (
                  <li key={ind}>
                    <Link
                      href={`/blog/${titles}/${_id}`}
                      className="d-flex justify-content-start align-items-center"
                    >
                      <img
                        src={image}
                        alt="Image placeholder"
                        className="rounded"
                      />
                      <div className="blog-content-text">
                        <h4>{title?.slice(0, 55)}...</h4>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Popular_Blog;
