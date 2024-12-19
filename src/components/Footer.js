import Image from 'next/image'

import logo from '@public/main-logo.png'

import styles from './styles.footer.module.css'

export default function Footer() {

  const getCurrentYear = () => {
    const currentDate = new Date();
    return currentDate.getFullYear();
  }

  return (
    <footer className={styles.footer}>
      <nav>
        <Image src={logo} alt="B&C Exteriors Logo" />
        <ul className={styles.footerMainNav}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact-us">Contact</a>
          </li>
          <li>
            <a href="/inspiration">Inspiration</a>
          </li>
          <li>
            <a href="/products">Products</a>
          </li>
          <li>
            <a href="/quote">Quote</a>
          </li>
        </ul>
        <div className={styles.footerSocial}>
          <span>
            <a href="#facebook">Facebook</a>
            <a href="#facebook">Facebook</a>
          </span>
        </div>
        <p>© {getCurrentYear()} B&C Exteriors</p>
      </nav>
    </footer>
  )
}