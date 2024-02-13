import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

export async function getServerSideProps() {
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

async function Client_Store() {
  const { props } = await getServerSideProps();
  const findalClient = props?.store?.filter((item) =>
    item.post_data.includes("success")
  );

  return (
    <>
      <ul>
        {findalClient?.map((val, ind) => {
          let clients = val.title?.split(" ")?.join("-");
          return (
            <li key={ind} className="nav-items">
              <Link href={`/store/${clients}/All`} className="nav-link">
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

export default Client_Store;
