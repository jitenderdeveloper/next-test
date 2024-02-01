import { FiChevronRight } from "react-icons/fi";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Blog_Category from "@/app/components/blog/Blog_Category";
import Popular_Blog from "@/app/components/blog/Popular_Blog";

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

export async function getFilterData(params) {
  const q = params?.category;
  const res = await fetch(
    `https://api.cashdost.com/api/blog/category/filter/${q}`,
    {
      cache: "force-cache",
    }
  );
  const data = await res.json();
  return {
    props: {
      blog: data?.search_blog || {},
    },
  };
}

async function Blog({ params }) {
  const categoryFilter = "params";
  // let spin = categoryFilter.split("-")?.join(" ");
  console.log("params", params);

  const { props: allBlog } = await getData();
  const { props } = await getFilterData(params);
  const filterBlog = props;

  const findalData = allBlog?.blog?.filter((item) =>
    item.status.includes("success")
  );

  const allCategory = [
    ...new Set(
      findalData?.map((val) => {
        return val.category;
      })
    ),
    "All",
  ];
  const filterCategory = allCategory?.reverse();

  //   const filterData = () => {
  //     if (categoryFilter === "All") {
  //       return data?.blog;
  //     } else {
  //       return filterBlog;
  //     }
  //   };

  return (
    <>
      <Navbar />
      {/* <LatestBlog /> */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <div className="blog-brade-cramp">
              <ul className="d-flex">
                <li>
                  <Link href="/">Home</Link>
                </li>{" "}
                <span>
                  {" "}
                  <FiChevronRight />{" "}
                </span>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-4 mb-5">
        <div className="row">
          <div className="col-lg-9 col-md-9 col-12">
            <div className="row">
              {findalData?.map((val, ind) => {
                const {
                  _id,
                  category,
                  image,
                  short_desc,
                  status,
                  title,
                  createdAt,
                } = val;
                let titles = title?.split(" ")?.join("-");
                if (status === "pending") {
                  return;
                }
                return (
                  <div key={ind} className="col-lg-4 col-md-4 col-12 mb-4">
                    <Link href={`/blog/${titles}/${_id}`}>
                      <div className="blog-card">
                        <div className="blog-image">
                          <img src={image} alt="cashdost" />
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
          <div className="col-lg-3 col-md-3 col-12">
            <Blog_Category filterCategory={filterCategory} />
            <br />
            <Popular_Blog />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Blog;
