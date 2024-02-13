import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Deals from "./deals/page";
import Footer from "./components/Footer";
import Blog_Grid from "./components/blog/Blog_Grid";

export default function Page() {
  return (
    <>
      <Navbar />
      <Slider />
      <Deals />
      <Blog_Grid />
      <Footer />
    </>
  );
}

export function generateMetadata() {
  return {
    title: "Best Online Deals, Coupons & Shopping offers in India - Cashdost",
    description:"Explore Best Online Deals, Discounts, Coupons & Shopping offers for top online shopping websites in India. Save your money with Discounts from Cashdost.",
  };
}
