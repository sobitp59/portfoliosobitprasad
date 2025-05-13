import LeftArrowIcon from "@/assets/icons/icons";
import Link from "next/link";
import React from "react";

const HeaderNavbar = ({ title }: { title: string }) => {
  return (
    <div className="w-full max-w-xl  flex justify-between items-center">
      <Link href={"/"} className="flex items-center gap-2">
        <LeftArrowIcon /> Back
      </Link>

      <h2 className="font-[family-name:var(--font-fraunces)] text-lg">
        {title}
      </h2>
    </div>
  );
};

export default HeaderNavbar;
