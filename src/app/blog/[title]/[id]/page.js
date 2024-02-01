import { FiChevronRight } from "react-icons/fi";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Head from "next/head";
import Blog_Category from "@/app/components/blog/Blog_Category";
import Popular_Blog from "@/app/components/blog/Popular_Blog";

export async function getData(params) {
  const id = params?.id;
  const res = await fetch(`https://api.cashdost.com/api/blog/${id}`, {
    cache: "force-cache",
  });
  const data = await res.json();
  return {
    props: {
      blog: data?.blog || {},
    },
  };
}

export async function getBlogData() {
  const res = await fetch(`https://api.cashdost.com/api/blog`, {
    cache: "force-cache",
  });
  const data = await res.json();
  return {
    props: {
      blog: data?.blog || {},
    },
  };
}

const Page = async ({ params }) => {
  const { props } = await getData(params);
  const { props: BlogData } = await getBlogData();
  const serverData = props?.blog;
  const blogD = BlogData?.blog;

  const { title, image, short_desc, createdAt, description, keyword } =
    serverData;

  const body = description;

  const findalData = blogD?.filter((item) => item.status.includes("success"));

  const allCategory = [
    ...new Set(
      findalData?.map((val) => {
        return val.category;
      })
    ),
    "All",
  ];
  const filterCategory = allCategory?.reverse();
  return (
    <>
      <Navbar />
      {/* <Helmet>
      </Helmet> */}

      <Head>
        <title>{title}</title>
        <meta name="description" content={short_desc} />
        <meta name="keywords" content={keyword} />
      </Head>

      <div className="container-fluid p-0">
        <div className="row m-0 mb-5">
          <div className="col-lg-12 p-0">
            <div className="blog-banner">
              <img src={image} alt="cashdost" />
              <div className="outer-content">
                <h1>{title}</h1>
                <p>{short_desc}</p>
                <div className="blog-profile d-flex justify-content-start flex-coloumn">
                  <div className="pro-image">
                    <img
                      src="https://api.cashdost.com/public/uploads/1689068407991user.png"
                      alt="cashdost"
                    />
                  </div>
                  <div className="profile-content">
                    <h4>Written by Cashdost</h4>
                    <h5>Posted on {createdAt?.slice(0, 10)}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
                <Link href="#">Blog</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-9 col-md-9 col-12">
            <div className="blog-section-s">
              <p dangerouslySetInnerHTML={{ __html: body }} />
            </div>
            <div className="blog-keywords mb-5 mt-4">
              <h5 className="fw-bold">Tags</h5>
              <ul>
                {keyword?.map((val, ind) => {
                  return <li key={ind}>#{val}</li>;
                })}
              </ul>
            </div>
            {/* <Comments id={id} />
                <AddComment id={id} /> */}
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
};

export default Page;
