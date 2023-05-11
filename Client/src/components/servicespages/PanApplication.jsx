import React from "react";
import Navbar from "../Navbar";
import Navlinks from "../Navlinks";
import Footer from "../Footer";
import PanCorrection from "../servicesdetails/PanCorrectiondetails";

const PanApplication = () => {
  return (
    <>
      <Navbar />
      <Navlinks />
      <PanCorrection/>
      <Footer/>
    </>
  );
};

export default PanApplication ;