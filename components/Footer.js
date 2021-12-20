import styles from '../styles/Footer.module.scss'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <span>
          Copyright © {new Date().getFullYear()} <a className="styled_a" href="https://literaiiy.me">literaiiy</a>. All rights reserved.
          Built with <a className="styled_a" href="https://nextjs.org">Next.js</a>{" "}
          & <a className="styled_a" href="https://wordpress.org">WordPress</a>.
          Powered by <a className="styled_a" href="https://vercel.com">Vercel</a>.
        </span>
      </footer>
    </>
  )
}