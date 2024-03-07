import React from "react";
import styles from "./singlePost.module.css";
import Image from "next/image";
const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/15575179/pexels-photo-15575179/free-photo-of-closeup-of-a-brunette-girl-wearing-red-lipstick.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            src="https://images.unsplash.com/photo-1506795660198-e95c77602129?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2V4eSUyMGdpcmx8ZW58MHx8MHx8fDA%3D"
            alt=""
            width={50}
            height={50}
          />
          <div className={styles.detailText}>
            <div className={styles.detailTitle}>Author</div>
            <div className={styles.detailValue}>Terry Jefferson</div>
          </div>
          <div className={styles.detailText}>
            <div className={styles.detailTitle}>Published</div>
            <div className={styles.detailValue}>01.01.2024</div>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum cumque
          nobis natus itaque, veritatis a ad expedita debitis enim nam similique
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
