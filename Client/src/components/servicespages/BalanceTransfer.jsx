import React from "react";
import Navbar from "../Navbar";
import Navlinks from "../Navlinks";
import Footer from "../Footer";
import BalanceTransfer from "../servicesdetails/Balancetransfer";

const HomeLone = () => {
  return (
    <>
      <Navbar />
      <Navlinks />
      <BalanceTransfer/>
      <Footer/>
    </>
  );
};

export default HomeLone;
