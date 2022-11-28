import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <Link className="header_image" href="/">
        <a>
          <img height="135" width="346" src="/a/images/dahlia-nextjs-smaller.webp" alt="dah.li/a" />
        </a>
      </Link>
      <hr />
    </header>
  )
}
