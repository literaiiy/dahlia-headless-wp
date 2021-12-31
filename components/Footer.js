import { getSimpleCategories } from "../lib/utils";
import React, { useEffect, useState } from 'react'
import Link from "next/link";
import styles from '../styles/Footer.module.scss'

export default function Footer(props) {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.copyright}>
          <span>Copyright © {new Date().getFullYear()} <a className="styled_a" href="https://literaiiy.me">literaiiy</a>.</span>
          <span>All rights reserved.</span>
          <span>Built with <a className="styled_a" href="https://nextjs.org">Next.js</a></span>
          <span>Served with <a className="styled_a" href="https://wordpress.org">WordPress</a>.</span>
          <span>Powered by <a className="styled_a" href="https://vercel.com">Vercel</a>.</span>
        </div>
        <div className={styles.categories}>
          <b className={styles.cat_title}>Categories</b>
          <ul>
            {props.categories.map(edge => {
              return (
                <li>
                  <Link href={`/category/${edge.node.slug}`}>{edge.node.name}</Link>
                </li>
              )
            })}
          </ul>
        </div>
      </footer>
    </>
  )
}
