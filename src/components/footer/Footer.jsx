import React from "react";
import styles from "./footer.module.css";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>NgoKhoa</div>
      <div className={styles.text}>
        Khoa creative thoughts agency © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
