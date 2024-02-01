import Link from "next/link";

function Blog_Category(filterCategory) {
  let cate = filterCategory?.filterCategory;
  return (
    <>
      <div className="col-lg-12 col-md-12 col-12">
        <div className="category-filter">
          <h6 className="mb-3">Category Filter</h6>
          <ul>
            <li>
              {cate?.map((val, ind) => {
                return (
                  <Link key={ind} href={`/blog/category/filter/${val}`}>
                    {val}
                  </Link>
                );
              })}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Blog_Category;
