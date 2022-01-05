import React, { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Footer() {
  return (
    <>
      <footer>
        <img className="footer_logo" src="../a/images/mini-dahlia.svg" alt="mini dahlia logo"/>
        <div className={"copyright"}>
          Copyright © {new Date().getFullYear()} <a className="styled_a" href="https://literaiiy.me">literaiiy</a>.{" "}
          All rights reserved.{" "}
          Built with <a className="styled_a" href="https://nextjs.org">Next.js</a>.{" "}
          Served with <a className="styled_a" href="https://wordpress.org">WordPress</a>.{" "}
          Powered by <a className="styled_a" href="https://vercel.com">Vercel</a>.{" "}
        </div>
      </footer>
    </>
  )
}
