import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  TwitterIcon,
} from "../assets/icons/icons";
import Link from "next/link";
import React from "react";

const links = [
  {
    name: "github",
    href: "https://github.com/sobitp59",
    icon: GithubIcon,
  },
  {
    name: "linkedin",
    href: "https://www.linkedin.com/in/sobit-prasad",
    icon: LinkedinIcon,
  },
  {
    name: "twitter",
    href: "https://twitter.com/sobit_prasad",
    icon: TwitterIcon,
  },
  {
    name: "contact",
    href: "mailto:sobitp59@gmail.com",
    icon: MailIcon,
  },
];

const Socials = () => {
  return (
    <ul className="flex gap-4 text-xs font-light text-slate-300">
      {links.map(({ name, href, icon : Icon }) => (
        <li key={name}>
          <Link href={href} target="_blank">
             <Icon />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Socials;
