"use client";

import { useRouter, usePathname } from 'next/navigation';

import SectionHeader from "@components/SectionHeader"

import imageTwo from '@public/house-two.jpg';

export default async function ProductPage({
  params,
}) {
  const pathname = (await params).product;

  console.log('product', pathname);
  return (
    <section>
      <SectionHeader 
        title="Product"
        imageData={{ src: imageTwo, alt: "House Two" }}
      />
      <div className="content-wrapper">
        
      </div>
    </section>
  )
}