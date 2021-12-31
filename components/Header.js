import styles from '../styles/Header.module.scss'
import Image from 'next/image'

export default function Header() {
  return (
    <div className={styles.header}>
      <a href="/"><img height="135" width="346" src="/a/images/dahlia-nextjs-smaller.webp" alt="dah.li/a" /></a>
      <h3 className={styles.tagline}>literaiiy's blog built with Next.js and WordPress</h3>
      <hr />
    </div>
  )
}