"use client";

import Image from "next/image";
import { useRouter } from "next/navigation"; 

import SectionHeader from "@components/SectionHeader";

import styles from "./styles.module.css";

import imageOne from "@public/house-one.jpg";
import imageTwo from '@public/house-two.jpg';

const products = [
  {
    location: "/stone",
    name: "Product 1",
    image: imageOne
  },
  {
    location: "/stone",
    name: "Product 2",
    image: imageOne
  },
  {
    location: "/stone",
    name: "Product 3",
    image: imageOne
  },
  {
    location: "/stone",
    name: "Product 4",
    image: imageOne
  },
  {
    location: "/stone",
    name: "Product 5",
    image: imageOne
  },
  {
    location: "/stone",
    name: "Product 6",
    image: imageOne
  },
]

export default function ProductsPage() {
  const router = useRouter();

  return (
    <section>
      <SectionHeader
        title="Products"
        subtitle={"Browse our selection of high-quality products."}
        imageData={{ src: imageTwo, alt: "House Two" }}
      />
      <div className="content-wrapper">
        <div className={styles.productsGrid}>
          {products.map((product, index) => {
            return (
              <div 
                key={index} 
                className={styles.productContainer}
                onClick={() => router.push(`/products${product.location}`)}
              >
                <span></span>
                <Image src={product.image} alt={product.name} />
                <h2>{product.name}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
