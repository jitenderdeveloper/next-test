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
