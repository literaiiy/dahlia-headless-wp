import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import MiniDahlia from './MiniDahlia'

export default function Footer() {
  return (
    <>
      <footer>
        <MiniDahlia />
        <div className={"copyright"}>
          Copyright © {new Date().getFullYear()} <a className="styled_a" href="https://ethany.im">Ethan Yim</a>.{" "}
          All rights reserved.{" "}
          Built with <a className="styled_a" href="https://nextjs.org">Next.js</a>.{" "}
          Served with <a className="styled_a" href="https://wordpress.org">WordPress</a>.{" "}
          Powered by <a className="styled_a" href="https://vercel.com">Vercel</a>.{" "}
        </div>
      </footer>
    </>
  )
}
