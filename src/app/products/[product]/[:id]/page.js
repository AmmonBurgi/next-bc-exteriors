"use client";

import { useRouter, usePathname } from "next/navigation";

import SectionHeader from "@components/SectionHeader";

import imageTwo from "@public/house-two.jpg";

export default function ProductDetailsPage() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div>
      <SectionHeader 
        title="Product Details"
        imageData={{ src: imageTwo, alt: "House Two" }}
      />
    </div>
  )
}