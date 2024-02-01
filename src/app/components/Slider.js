import Category from "./Category";
import Slider_Com from "./slider_com/Slider_Com";
function Slider() {
  return (
    <>
      <div className="container mt-4 mb-4">
        <div className="row  ">
          <div className="col-12 col-lg-4 col-md-4 ">
            <Category />
          </div>

          <div className="col-12 col-lg-8 col-md-8 col-sm-8">
            <Slider_Com />
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;
