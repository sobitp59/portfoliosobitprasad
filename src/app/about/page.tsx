import React from "react";
import * as motion from "motion/react-client";
import HeaderNavbar from "@/components/header-nav";

const AboutPage = () => {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <HeaderNavbar title={"About"} />
    </div>
  );
};

export default AboutPage;
