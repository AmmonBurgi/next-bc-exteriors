import Image from 'next/image'

import Carousel from '@components/Carousel'

import imageOne from '@public/house-one.jpg';
import imageTwo from '@public/house-two.jpg';
import styles from './page.module.css'

export default function Home() {

  return (
    <section styles={styles.homeSection}>
      <Carousel>
        <div>
          <h1>Slide 1</h1>
          <p>This is the content of slide 1.</p>
        </div>
        <div>
          <h1>Slide 2</h1>
          <p>This is the content of slide 2.</p>
        </div>
        <div>
          <h1>Slide 3</h1>
          <p>This is the content of slide 3.</p>
        </div>
      </Carousel>
      <div className='content-wrapper'>
        <div className={styles.productContent}>
          <div>
            <h1>Our product</h1>
            <h2></h2>
            <p>Some text about our product</p>
          </div>
          <div>
            <div className={styles.productContentBlocks}>
              <Image src={imageOne} alt='product' />
              <div>
                <h3>Products</h3>
                <p></p>
                <button>See More</button>
              </div>
            </div>
            <div className={styles.productContentBlocks}>
              <Image src={imageTwo} alt='product' />
              <div>
                <h3>Inspiration</h3>
                <p></p>
                <button>See More</button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.aboutContent}>
          <div>
            <h1>About us</h1>
            <h2></h2> 
            <p>Some text about us</p>
          </div>
          <div>

          </div>
        </div>
      </div>
    </section>
  );
}
