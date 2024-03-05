import React from "react";
import styles from "./postCard.module.css";
import Image from "next/image";
import Link from "next/link";
const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/19367230/pexels-photo-19367230/free-photo-of-stone-bridge-in-a-forest.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            className={styles.img}
          />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa amet
          fugit repudiandae optio praesentium iusto, aspernatur minus sit!
          Molestiae vel neque, ullam natus voluptas perspiciatis adipisci. Minus
          dolorem rerum aperiam. Reiciendis expedita possimus amet quisquam sed
          reprehenderit, aut nobis explicabo nemo minima totam nisi, harum
          voluptatem porro. Eligendi quam, voluptatem aut quis tenetur nam
          assumenda eum molestias quod maiores rem.
        </p>
        <Link className={styles.link} href="/blog/post">
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
