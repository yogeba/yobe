import Image from "next/legacy/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.carL}>
        <h1 className={styles.title}>AV0CAD0 CREATIVES.</h1>
        <h1 className={styles.linkTitle}>
          <span className={styles.linkText}>WORK WITH US</span>
          <Link href="/contact" passHref>
            <Image src="/img/link.png" height={40} width="40" />
          </Link>
        </h1>
      </div>
      <div className={styles.carS}>
        <div className={styles.cardIten}>
          12 ADAM STREET NY <br /> LOCKPORT, NY 14094, USA
        </div>
        <div className={styles.cardIten}>
          HELLO@AVOCADOCREATIVES.COM <br /> (717) 550-1675
        </div>
      </div>
      <div className={styles.cardItem}>
        © 2022 AVOCADO CREATIVES,
        <br />
        ALL RIGHTS RESERVED
      </div>
    </div>
  );
};

export default Footer;
