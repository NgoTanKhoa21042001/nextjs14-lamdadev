import Image from "next/image";
import React from "react";
import styles from "./about.module.css";
const AboutPage = () => {
  return (
    <div>
      <div className={styles.imgContainer}></div>
      <Image src="/about.png" alt="" width={500} height={500} />
    </div>
  );
};

export default AboutPage;
