"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

import SectionHeader from "@components/SectionHeader";

import imageTwo from "@public/house-two.jpg";

export default function ProductDetailsPage() {
  const router = useRouter();
  const pathname = usePathname();
  
  const [toggleViewer, setToggleViewer] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  // const handleClick = (image) => {
  //   setCurrentImage(image);
  //   setToggleViewer(true);
  // };

  // const handleClose = () => {
  //   setToggleViewer(false);
  //   setCurrentImage(null);
  // }

  return (
    <section>
      <SectionHeader 
        title="Product Details"
        imageData={{ src: imageTwo, alt: "House Two" }}
      />
      <div className="content-wrapper">
        <div className="product-details">
          <div>
            Inspiration
          </div>
          <div>
            <h1>Product Name</h1>
            <h2>Brand Name</h2>
            <p>Description</p>
            <div>
              Map Images
            </div>
          </div>
        </div>
      </div>
      {/* {toggleViewer && (
        <ImageViewer
          styles
          src={["https://static.wixstatic.com/media/c346c1_961174f63c114958a46d3fdc6e978f06~mv2.png/v1/fill/w_1416,h_1398,al_c,q_95,enc_auto/c346c1_961174f63c114958a46d3fdc6e978f06~mv2.png"]}
          currentIndex={0}
          closeOnClickOutside={true}
          disableScroll={true}
          onClose={handleClose}
          backgroundStyle={{ zIndex: 1000 }}
        />
      )} */}
    </section>
  )
}