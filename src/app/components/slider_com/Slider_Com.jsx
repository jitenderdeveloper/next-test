"use client";
import { useGetBannerQuery } from "@/app/redux/Slice/bannerSlice";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Slider_Com() {
  const { data } = useGetBannerQuery();
  const banner = data?.banner_data;

  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (index) => {
    setActiveIndex(index);
  };

  const findalData = banner?.filter((item) => item.status.includes("success"));

  return (
    <>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {findalData?.map((val, ind) => {
            const {
              title,
              description,
              category,
              client,
              link,
              image,
              createdAt,
            } = val;
            return (
              <>
                <div key={val?._id}
                  className={`carousel-item ${ ind === activeIndex ? "active" : "" }`} 
                >
                  <Link href={link} target="_blank">
                    <div className="slider-items">
                      <div className="slider-img">
                        <Image width={1000} height={100} src={image} alt={title} />
                      </div>
                      <div className="slider-content d-flex justify-content-arround">
                        <span className="slider_side_content">
                          <h1>{title?.slice(0, 70)}</h1>
                          <p>{description?.slice(0, 180)}</p>
                          <ul>
                            <li>
                              <span>{client?.title}</span>
                            </li>
                            <li>
                              <span>{category?.name}</span>
                            </li>
                            <li>
                              <span>{createdAt?.slice(0, 10)}</span>
                            </li>
                          </ul>
                        </span>
                        <span className="slider_banner">
                          <Link href={link} type="button" target="_blank">
                            Grab Now
                          </Link>
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              </>
            );
          })}
        </div>
        <button
        style={{background:'none'}}
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
          onClick={() =>
            handleSlideChange(
              (activeIndex - 1 + findalData.length) % findalData.length
            )
          }
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
        style={{background:'none'}}
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
          onClick={() =>
            handleSlideChange((activeIndex + 1) % findalData.length)
          }
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Slider_Com;
