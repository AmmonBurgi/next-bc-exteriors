"use client";

import { useRouter } from 'next/navigation';
import Image from 'next/image'

import Carousel from '@components/Carousel'

import imageOne from '@public/house-one.jpg';
import imageTwo from '@public/house-two.jpg';
import styles from './page.module.css'

export default function Home() {
  const router = useRouter();

  return (
    <section className={styles.homeSection}>
      <Carousel />
      <div className={`content-wrapper ${styles.homeContent}`}>
        <div className={styles.productContent}>
          <div>
            <h1>Our Product</h1>
            <p>Transform your home’s exterior with expert siding installation and repair from our trusted team. We offer a wide range of high-quality siding materials, professional craftsmanship, and reliable service to protect and beautify your property. Whether you’re looking for classic vinyl, durable fiber cement, or stylish wood siding, we deliver lasting results that enhance curb appeal and increase home value.</p>
          </div>
          <div>
            <div 
              onClick={() => router.push('/products')} 
              className={styles.productContentBlock}
            >
              <Image src={imageOne} alt='products' />
              <div>
                <h2>Products</h2>
                {/* <button>See More</button> */}
              </div>
            </div>
            <div 
              onClick={() => router.push('/inspiration')} 
              className={styles.productContentBlock}
            >
              <Image src={imageTwo} alt='products' />
              <div>
                <h2>Inspiration</h2>
                {/* <button>See More</button> */}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.aboutContent}>
          <div>
            <h1>About us</h1> 
            <p>With years of hands-on experience, we’ve turned our passion for quality home exteriors into a business that helps homeowners transform their houses into beautiful, lasting sanctuaries. We take pride in every detail, offering expert services in siding, roofing, windows, and more, all tailored to withstand Utah’s unique climate. <br /> Our commitment is simple: to treat every home like it’s our own. From the first consultation to the final inspection, we’re dedicated to providing exceptional service, innovative solutions, and results that stand the test of time. At B&C Exteriors, your home’s exterior is our canvas—and your satisfaction is our greatest reward.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
