"use client";
import React, { useEffect, useState } from "react";
import { FiGift, FiGrid, FiSearch } from "react-icons/fi";
import { ImTicket } from "react-icons/im";
import { useGetClientSearchQueryQuery } from "@/app/redux/Slice/clientSlice";
import Link from "next/link";

function Search_Bar() {
  const [search, setSearch] = useState("");
  const [showResults, setShowResults] = useState(false);
  const { data } = useGetClientSearchQueryQuery(search);
  const searchClient = data?.client_data?.client;
  const searchCoupon = data?.client_data?.coupon;
  const searchProduct = data?.client_data?.product;
  //   console.log("result : ", searchClient);

  useEffect(() => {
    if (search) {
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  }, [search]);

  const redirectHandler = (link) => {
    setTimeout(() => {
      window.open(link);
    }, 2000);
  };

  const clientRedirectHandler = (link) => {
    setTimeout(() => {
      window.open(link);
    }, 2000);
  };

  const couponRedirectHandler = (link) => {
    setTimeout(() => {
      window.open(link);
    }, 2000);
  };
  return (
    <>
      <div className="navbar-search">
        <div className="search-input-fileds">
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <span>
            <FiSearch />
          </span>
        </div>
        {showResults && (
          <div className="search-result-section">
            <ul>
              {searchClient?.map((val, ind) => {
                let clients = val?.title?.split(" ")?.join("-");
                return (
                  <li
                    key={ind}
                    className="nav-items d-flex justify-content-start"
                  >
                    <Link
                      href={`/store/${clients}/All`}
                      className="nav-link"
                      title="Store"
                      onClick={() => clientRedirectHandler(val?.link)}
                    >
                      <FiGrid />
                      {val?.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <ul>
              {searchCoupon?.map((val, ind) => {
                const titles = val?.offer?.split(" ")?.join("-");
                const encodedTitle = encodeURIComponent(titles);
                return (
                  <li
                    key={ind}
                    className="nav-items d-flex justify-content-start"
                  >
                    <Link
                      href={`/coupon/${val?.client?.title}/${encodedTitle}/${val?._id}`}
                      className="nav-link"
                      title="Coupon"
                      onClick={() => couponRedirectHandler(val?.link)}
                    >
                      <ImTicket />
                      {val?.offer?.slice(0, 44)}...
                    </Link>
                  </li>
                );
              })}
            </ul>
            <ul>
              {searchProduct?.map((val, ind) => {
                const titles = val?.title?.split(" ")?.join("-");
                const encodedTitle = encodeURIComponent(titles);
                return (
                  <li
                    key={ind}
                    className="nav-items d-flex justify-content-start"
                  >
                    <Link
                      href={`/store/${val?.client?.title}/${encodedTitle}/${val?._id}`}
                      onClick={() => redirectHandler(val?.client?.link)}
                      className="nav-link"
                      title="Today Deals"
                    >
                      <FiGift />
                      {val?.title?.slice(0, 44)}...
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Search_Bar;
