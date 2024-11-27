import Navbar from "@/components/navbar/Navbar";
import React from "react";

import HeroSection from "./HeroSection";
import BrandsSection from "./BrandsSection";
import PopularStyleSection from "../popular-style/PopularStyleSection";
import NewsLetterSection from "../newsletter/NewsLetterSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <BrandsSection />
      <PopularStyleSection />
      <NewsLetterSection />
    </>
  );
};

export default HomePage;
