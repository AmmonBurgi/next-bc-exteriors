"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import ImageViewer from "react-simple-image-viewer";
import Image from "next/image";

import BreadcrumbMenu from "@/components/BreadcrumbMenu";
import SectionHeader from "@components/SectionHeader";

import styles from "../styles.module.css";
import imageTwo from "@public/house-two.jpg";

export default function SubProducts() {
  const router = useRouter();
  const { product: subProParam } = useParams();

  const [subProducts, setSubProducts] = useState([]);

  useEffect(() => {
    if (subProducts.length > 0) return;

    fetch(`/api/products/${subProParam}`)
    .then(response => response.json())
    .then(data => {
      console.log("Sub products: ", data);
      setSubProducts(data);
    })
    .catch(error => {
      console.error('Error fetching products:', error);
    });
  }, [subProducts]);

  const subProductsMap = subProducts.map((subProduct, index) => {
    return (
      <div
        onClick={() => router.push(`/products/${subProParam}/${subProduct._id}`)}
        className={styles.subProduct}
        key={index}
      >
        <span>
          <Image fill src={subProduct.images[0]} alt={subProduct.name} />
        </span>
        <h3>{subProduct.name}</h3>
      </div>
    );
  });

  return (
    <section>
      <SectionHeader
        title={subProParam}
        imageData={{ src: imageTwo, alt: "House Two" }}
      />
      <BreadcrumbMenu />
      <div className="content-wrapper">
        <div className={styles.productContent}>
          <h2>Our selection of {subProParam}</h2>
          <div className={styles.subProductsGrid}>{subProductsMap}</div>
        </div>
      </div>
    </section>
  );
}
