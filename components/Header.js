import styles from '../styles/Header.module.scss'

export default function Header() {
  return (
    <div className={styles.header}>
      <a href="/"><img height="135" width="346" src="../images/dahlia-nextjs-smaller.webp" alt="dah.li/a" /></a>
      <h3>literaiiy's blog built with Next.js and WordPress</h3>
      <hr />
    </div>
  )
}