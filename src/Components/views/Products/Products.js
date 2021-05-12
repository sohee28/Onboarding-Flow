import React from "react";
import "../../utils/Style/BasicLayout2.css";

import Navbar from "../../utils/Navbar/Navbar";
import ProgressBar from "../../utils/ProgressBar/ProgressBar";
import Footer from "../../utils/Footer/Footer";
import Products_Left from "./utils/Products_Left";
import Products_Right from "./utils/Products_Right";

function Products() {
  return (
    <div className="Whole_Layout_2">
      <Navbar title="Current Environment" />
      <ProgressBar value={54.6} />
      <div className="Container_2">
        <section className="Left_2">
          <Products_Left />
          <Footer back={"/Orchtools"} next={"/Evaluation"} />
        </section>
        <section className="Right_2">
          <Products_Right />
        </section>
      </div>
    </div>
  );
}

export default Products;
