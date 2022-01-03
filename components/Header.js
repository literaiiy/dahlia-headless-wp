import styles from '../styles/Header.module.scss'
import Image from 'next/image'

export default function Header() {
  return (
    <header className={styles.header}>
      <a className={styles.header_image} href="/"><img height="135" width="346" src="/a/images/dahlia-nextjs-smaller.webp" alt="dah.li/a" /></a>
      <p className={styles.tagline}>literaiiy's personal blog</p>
      <hr />
    </header>
  )
}