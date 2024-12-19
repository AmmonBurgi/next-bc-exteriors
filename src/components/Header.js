import Image from 'next/image'
import Link from 'next/link'

import styles from './styles.headers.module.css'
import logo from '@public/main-logo.png'
import facebookIcon from '@public/facebook-icon.svg'
import linkedInIcon from '@public/linkedin-icon.svg'

export default function Header() {
  return (
    <header className="header-main">
      <div className="content-wrapper">
        <div className={styles.headerContent} >
          <span className={styles.logo}>
            <Image src={logo} alt="B&C Exteriors Logo" />
          </span>
          <nav className={styles.navigation}>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact-us">Contact</Link>
              </li>
              <li>
                <Link href="/inspiration">Inspiration</Link>
              </li>
              <li>
                <Link href="/products">Products</Link>
              </li>
              <li>
                <Link href="/quote">Quote</Link>
              </li>
            </ul>
          </nav>
          {/* <nav className={styles.social}>
            <ul>
              <li>
                <Link href="#facebook">
                  <Image className={styles.navIcons} src={facebookIcon} alt='Facebook Icon' />
                </Link>
              </li>
              <li>
                <Link href="#linkedin">
                  <Image className={styles.navIcons} src={linkedInIcon} alt='LinkedIn Icon' />
                </Link>
              </li>
            </ul>
          </nav> */}
        </div>
      </div>
    </header>
  )
}