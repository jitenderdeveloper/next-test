import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

export async function getData() {
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

async function Card_Store() {
  const { props } = await getData();
  const findalStore = await props?.store?.filter((item) =>
    item.post_data.includes("success")
  );
  return (
    <>
      <ul>
        {findalStore?.map((val, ind) => {
          let clients = val.title?.split(" ");
          let aClient = clients?.join("-");
          return (
            <li key={ind} className="nav-items">
              <Link href={`/coupon/${aClient}`} className="nav-link">
                <span>
                  <FiChevronRight />
                </span>
                {val.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Card_Store;
