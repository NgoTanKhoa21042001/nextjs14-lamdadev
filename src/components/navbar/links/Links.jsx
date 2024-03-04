import Link from "next/link";
import React from "react";
import styles from "./links.module.css";
const links = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];
const Links = () => {
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <Link key={link.title} href={link.path}>
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Links;
