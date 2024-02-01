import Link from "next/link";
import React from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

function About() {
  return (
    <>
      <Navbar />
      <div className="casddost-about-banner-div">
        <div className="casddost-about-banner-div-text">
          <h1 className="main-heading">About Cashdost</h1>
        </div>
      </div>
      <div className="casddost-about-banner-div-all-text ">
        <div className="casddost-about-banner-div-all-text-1 container ">
          <h2 className="mt-3">Cashdost</h2>
          <p className="mt-3">
            We at cashdost come with the motive of friendship with the customer
            by providing them the best shopping experience and giving them the
            best offers and deals in the industry. We believe that shopping
            should always bring happiness and this can only be possible when the
            buyers gets additional discounts and counts the deal that he has
            made the best deal in the current time.
          </p>
          <p className="mt-3">
            We are not a direct shopping website but we make sure that if a
            buyer is coming to cashdost, he should get the best deal as he can
            compare the price provided by different websites. We let you grab
            the best discount/deals in the fashion, electronics, travel,
            apparels and a lot more.
          </p>
          <p className="mt-3">
            With the user friendly filters and quick links the experience of the
            customers becomes easy as he can quickly find the best deal of the
            product or brand he is looking for. We keep updating the offers
            daily so that the buyers will always have the genuine offers that
            are cross checked by our deal personally before getting them
            activated for the buyers.
          </p>
        </div>
      </div>

      <div className="about-bottom container mb-4">
        <div className="about-bottom-text">
          <p>
            {" "}
            We re always looking to know how we re doing. So if you have any
            comments or compliments, please get in touch with us.
          </p>
          <Link
            className="btn btn-outline-light mt-1 button_bottom"
            href="/contact-us"
          >
            Contact us
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
