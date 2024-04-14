import Image from "next/image";
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

async function Blog_Grid() {
  const data = await getData();
  const serverData = data?.props?.blog;

  const findalData = serverData?.filter((item) =>
    item.status.includes("success")
  );

  return (
    <>
      <div className="container mb-5">
        {/* <GridHeading title="Cashdost Blog" link="/blog/category/filter/All" /> */}
        <div className="row mb-5">
          <div className="col-12 ">
            <div className="deals-heading">
              <h4>Latest Blog</h4>
              <Link href="/blog">View All</Link>
            </div>
          </div>
        </div>
        <div className="row">
          {findalData?.slice(0, 8)?.map((val, ind) => {
            const {
              _id,
              category,
              image,
              short_desc,
              status,
              title,
              trending,
              createdAt,
            } = val;
            let titles = title?.split(" ")?.join("-");
            if (status === "pending") {
              return;
            }
            return (
              <div key={ind} className="col-lg-3 col-md-4 col-12 mb-4">
                <Link href={`/blog/${titles}/${_id}`}>
                  <div className="blog-card">
                    <div className="blog-image">
                      <Image
                        width={100}
                        height={100}
                        src={image}
                        alt="cashdost"
                      />
                      <span>{category}</span>
                    </div>
                    <div className="blog-content">
                      <h3>{title?.slice(0, 50)}... </h3>
                      <p>{short_desc?.slice(0, 100)}...</p>
                      <h6>{createdAt?.slice(0, 10)}</h6>
                      <button type="button">Read More</button>
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

export default Blog_Grid;
