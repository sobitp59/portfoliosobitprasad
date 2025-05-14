import Link from "next/link";
import React from "react";
import LeftArrowIcon from "../assets/icons/icons";

const HeaderNavbar = ({ title }: { title: string }) => {
  return (
    <div className="w-full flex justify-center items-center">
      <Link href={"/"} className="flex text-sm items-center gap-2 absolute left-4 text-primary hover:text-primary/80 transition-all duration-200 ease-in-out">
        <LeftArrowIcon /> go back
      </Link>

      <h2 className="text-md font-semibold">
        {title}
      </h2>
    </div>
  );
};

export default HeaderNavbar;
