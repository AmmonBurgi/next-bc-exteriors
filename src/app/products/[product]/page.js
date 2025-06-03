"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";

import { useAppData } from "@/contexts/AppDataContext";
import BreadcrumbMenu from "@/components/BreadcrumbMenu";
import SectionHeader from "@components/SectionHeader";

import styles from "../styles.module.css";
import imageTwo from "@public/house-two.jpg";

export default function SubProducts() {
  const router = useRouter();
  const { product: productParam } = useParams();

  const { products } = useAppData();

  const productsMap = products.map((product, index) => {
    return (
      <div
        onClick={() => router.push(`/products/${productParam}/${product._id}`)}
        className={styles.subProduct}
        key={index}
      >
        <span>
          <Image fill src={product.images[0].base64} alt={product.name} />
        </span>
        <h3>{product.name}</h3>
      </div>
    );
  });

  return (
    <section>
      <SectionHeader
        title={productParam}
        imageData={{ src: imageTwo, alt: "House Two" }}
      />
      <BreadcrumbMenu />
      <div className="content-wrapper">
        <div className={styles.productContent}>
          <h2>Our selection of {productParam}</h2>
          <div className={styles.subProductsGrid}>{productsMap}</div>
        </div>
      </div>
    </section>
  );
}
