import Link from "next/link";
import React from "react";

const links = [
  {
    name: "skills",
    href: "/skills",
  },
  {
    name: "blogs",
    href: "/blogs",
  },
  {
    name: "experience",
    href: "/experience",
  },
  {
    name: "recommendations",
    href: "/recommendations",
  },
  {
    name: "contact",
    href: "/contact",
  },
];

const Navbar = () => {
  return (
    <ul className="flex-wrap flex gap-4 text-sm font-light text-slate-300">
      {links.map(({ name, href }) => (
        <li key={name}>
          <Link className="hover:underline" href={href}>
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
