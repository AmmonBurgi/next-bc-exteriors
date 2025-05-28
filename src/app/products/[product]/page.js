"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ImageViewer from "react-simple-image-viewer";
import Image from "next/image";

import SectionHeader from "@components/SectionHeader";

import styles from "../styles.module.css";
import imageTwo from "@public/house-two.jpg";
import deleteImage from "@public/delete-me.jpg";

const subProductsData = [
  {
    name: "Sub Product 1",
    image: deleteImage,
  },
  {
    name: "Sub Product 2",
    image: deleteImage,
  },
  {
    name: "Sub Product 3",
    image: deleteImage,
  },
  {
    name: "Sub Product 4",
    image: deleteImage,
  },
  {
    name: "Sub Product 5",
    image: deleteImage,
  },
  {
    name: "Sub Product 6",
    image: deleteImage,
  },
];

export default function ProductPage() {
  const { product } = useParams();

  const [subProducts, setSubProducts] = useState([]);
  const [toggleViewer, setToggleViewer] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  useEffect(() => {
    setSubProducts(subProductsData);
  }, [subProductsData]);

  const handleClick = (image) => {
    setCurrentImage(image);
    setToggleViewer(true);
  };

  const handleClose = () => {
    setToggleViewer(false);
    setCurrentImage(null);
  }

  const subProductsMap = subProducts.map((subProduct, index) => {
    return (
      <div
        onClick={() => handleClick(subProduct.image)}
        className={styles.subProduct}
        key={index}
      >
        <span>
          <Image src={subProduct.image} alt={subProduct.name} />
        </span>
        <h3>{subProduct.name}</h3>
      </div>
    );
  });

  return (
    <section>
      <SectionHeader
        title={product}
        imageData={{ src: imageTwo, alt: "House Two" }}
      />
      <div className="content-wrapper">
        <div className={styles.productContent}>
          <h2>Our selection of {product}</h2>
          <div className={styles.subProductsGrid}>{subProductsMap}</div>
        </div>
      </div>
      {toggleViewer && (
        <ImageViewer
          styles
          src={["https://static.wixstatic.com/media/c346c1_961174f63c114958a46d3fdc6e978f06~mv2.png/v1/fill/w_1416,h_1398,al_c,q_95,enc_auto/c346c1_961174f63c114958a46d3fdc6e978f06~mv2.png"]}
          currentIndex={0}
          closeOnClickOutside={true}
          disableScroll={true}
          onClose={handleClose}
          backgroundStyle={{ zIndex: 1000 }}
        />
      )}
    </section>
  );
}
