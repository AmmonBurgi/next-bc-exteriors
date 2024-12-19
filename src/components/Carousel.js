'use client'

import { useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoPlay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade'
import Image from 'next/image';

import imageOne from '@public/house-one.jpg';
import imageTwo from '@public/house-two.jpg';
import imageThree from '@public/house-three.jpg';
import imageFour from '@public/house-four.jpg';

import styles from './styles.carousel.module.css'

const slideData = [
  {
    image: imageOne,
    title: 'Slide 1',
    content: 'This is the content of slide 1.',
  },
  {
    image: imageTwo,
    title: 'Slide 2',
    content: 'This is the content of slide 2.',
  },
  {
    image: imageThree,
    title: 'Slide 3',
    content: 'This is the content of slide 3.',
  },
  {
    image: imageFour,
    title: 'Slide 4',
    content: 'This is the content of slide 4.',
  }
]

export function Slide({ 
  houseImage,
  title,
  content,
}) {
  return (
    <div className={styles.slide}>
      <Image src={houseImage} alt='house' />
      <div>
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    watchDrag: false,
    loop: true,
  }, [AutoPlay({ delay: 10000 }), Fade()]);

  const autoplay = useRef(AutoPlay({ delay: 10000 }));

  const scrollNext = () => {
    if (emblaApi) {
      emblaApi.scrollNext();
      autoplay.current.reset();
    }
  };

  const scrollPrev = () => {
    if (emblaApi) {
      emblaApi.scrollPrev();
      autoplay.current.reset();
    }
  };

  const slideMap = slideData.map((e, i) => <Slide 
    key={i}
    houseImage={e.image}
    title={e.title}
    content={e.content}
  />);

  return (
    <div className={styles.carousel} ref={emblaRef}>
      <div className={styles.carouselContainer}>
        {slideMap}
      </div>
      <button className={`${styles.button} ${styles.buttonPrev}`} onClick={scrollPrev}>
        Previous
      </button>
      <button className={`${styles.button} ${styles.buttonNext}`}onClick={scrollNext}>
        Next
      </button>
    </div>
  );
};