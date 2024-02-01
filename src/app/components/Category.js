import Link from "next/link";
import React from "react";

export async function getData() {
  const res = await fetch("https://api.cashdost.com/api/category", {
    cache: "force-cache",
  });
  const data = await res.json();
  return {
    props: {
      category: data?.category || {},
    },
  };
}

async function Category() {
  const data = await getData();
  const serverData = data?.props?.category;
  const findalCategory = serverData?.filter((item) =>
    item.status.includes("success")
  );
  return (
    <>
      <div className="category">
        <div className="category-list">
          <ul>
            {findalCategory?.map((val, ind) => {
              return (
                <li key={ind}>
                  <Link href={`/dhamaka-deals/${val.name}`}>
                    <span>
                      <img src={val.image} alt={val.name} lazy="loading" />
                    </span>
                    <span>{val.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Category;