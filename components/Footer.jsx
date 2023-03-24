import Image from 'next/legacy/image'
import Link from 'next/link'
import React from 'react'
import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.carL}>
          <h1 className={styles.title}>AV0CAD0 CREATIVES.</h1>
          <h1 className={styles.linkTitle}>
            <span className={styles.linkText}>WORK WITH US</span>
            <Link href="/contact" passHref>
            <Image src="/img/link.png" height={40} width="40"/>
            </Link>
          </h1>
        </div>
        <div className={styles.carS}>
          <div className={styles.cardIten}>
            12 ADAM STREET NY <br/> USA
          </div>
          <div className={styles.cardIten}>
            CONTACT@LAMA.DEV <br/> 2123124312312
          </div>
        </div>
        <div className={styles.carS}>
          FOLLOW US:
          <br /> __FB __IN __BE __TW
        </div>
        <div className={styles.cardItem}>
          © 2022 LAMA INTERACTIVE,
          <br />
          ALL RIGHTS RESERVED
        </div>
    </div>
  )
}

export default Footer