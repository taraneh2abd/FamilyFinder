"use client";

import styles from "./Footer.module.scss";
import imagefoot from "@/assets/images/der.png";
import imagefoot2 from "@/assets/images/bb.png";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>
          این عکسه رو وقتی ریسپانسیوه حذف کنیم
        </p>

        <div className={styles.links}>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

        <img
          src={imagefoot.src}
          alt="footer decoration"
          className={styles.footerImage}
        />
        <img
          src={imagefoot2.src}
          alt="footer decoration"
          className={styles.footerImage2}
        />
      </div>
    </footer>
  );
}