"use client";
import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Navigation, Scrollbar, A11y, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { useGetBannerQuery } from "@/app/redux/Slice/bannerSlice";
import Link from "next/link";

// SwiperCore.use([Navigation, Scrollbar, A11y, Autoplay]);

function Slider_Com() {
  const { data } = useGetBannerQuery();
  const banner = data?.banner_data;

  const findalData = banner?.filter((item) => item.status.includes("success"));

  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        scrollbar={{ draggable: true }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
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
            <SwiperSlide key={ind}>
              <Link href={link} target="_blank">
                <div className="slider-items">
                  <div className="slider-img">
                    <img src={image} alt={title} loading="lazy" />
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
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default Slider_Com;
