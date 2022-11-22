import React from "react";
import LowerSection from "./Body/LowerSection/LowerSection";
import MiddleSection from "./Body/MiddleSection/MiddleSection";
import UpperSection from "./Body/UpperSection/UpperSection";
import Navbar from "./Header/Navbar/Navbar";

const Airbnb = () => {
  return (
    <>
      {/* ------------HEADER------------ */}

      {/* ------NAVBAR------ */}
      <Navbar />

      {/* --------------BODY------------- */}

      {/* -----UPPER SECTION----- */}
      <UpperSection />

      {/* ----MIDDLE SECTION----- */}
      <MiddleSection />

      {/* -----LOWER SECTION----- */}
      <LowerSection />
    </>
  );
};

export default Airbnb;
