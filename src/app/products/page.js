"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation"; 

import { useAppData } from "@/contexts/AppDataContext";
import BreadcrumbMenu from "@/components/BreadcrumbMenu";
import SectionHeader from "@components/SectionHeader";

import styles from "./styles.module.css";

import imageTwo from '@public/house-two.jpg';

export default function ProductsPage() {
  const { categories } = useAppData();
  const router = useRouter();

  return (
    <section>
      <SectionHeader
        title="Products"
        subtitle={"Browse our selection of high-quality products."}
        imageData={{ src: imageTwo, alt: "House Two" }}
      />
      <BreadcrumbMenu />
      <div className="content-wrapper">
        <div className={styles.productsGrid}>
          {categories.map((category, index) => {
            return (
              <div 
                key={index} 
                className={styles.productContainer}
                onClick={() => router.push(`/products/${category.name}`)}
              >
                <span></span>
                <Image src={category.image} alt={category.name} />
                <h2>{category.name}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
