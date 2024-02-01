import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

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

async function Dhamaka_Category() {
  const data = await getData();
  const serverData = data?.props?.category;
  const findalCategory = serverData?.filter((item) =>
    item.status.includes("success")
  );
  return (
    <>
      <ul>
        {findalCategory?.map((val, ind) => {
          return (
            <li key={ind} className="nav-items">
              <Link href={`/dhamaka-deals/${val.name}`} className="nav-link">
                <span>
                  <FiChevronRight />
                </span>{" "}
                {val.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dhamaka_Category;
