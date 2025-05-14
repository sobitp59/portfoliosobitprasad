import Link from "next/link";
import React from "react";
import LeftArrowIcon from "../assets/icons/icons";

const HeaderNavbar = ({ title }: { title: string }) => {
  return (
    <div className="w-full flex justify-between items-center">
      <Link href={"/"} className="flex text-sm items-center gap-2">
        <LeftArrowIcon /> go back
      </Link> 

      <h2 className="text-md font-semibold">
        {title}
      </h2>
    </div>
  );
};

export default HeaderNavbar;
