"use client";
import React, { useEffect, useState, useCallback } from "react";
import { FiGift, FiGrid, FiSearch } from "react-icons/fi";
import { ImTicket } from "react-icons/im";
import { useGetClientSearchQueryQuery } from "@/app/redux/Slice/clientSlice";
import Link from "next/link";

function Search_Bar() {
  const [search, setSearch] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // Create a debounced function
  const handleDebounce = useCallback((searchTerm) => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 2000); // Adjust the delay as needed (e.g., 300ms)

    // Clear the previous timeout when the component re-renders
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    handleDebounce(search);
    if (search) {
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  }, [search, handleDebounce]);

  const { data, isLoading } = useGetClientSearchQueryQuery(debouncedSearch);
  const searchClient = data?.client_data?.client;
  const searchCoupon = data?.client_data?.coupon;
  const searchProduct = data?.client_data?.product;

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
            {isLoading ? (
              <p>Fetching data...</p>
            ) : (
              <>
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
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default Search_Bar;
