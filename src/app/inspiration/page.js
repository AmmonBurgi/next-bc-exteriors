import SectionHeader from "@components/SectionHeader"

import imageTwo from '@public/house-two.jpg';

export default function InspirationPage() {
  return (
    <div>
      <SectionHeader 
        title="Inspiration"
        subtitle={"Get inspired by our past projects and see what we can do for you."}
        imageData={{ src: imageTwo, alt: "House Two" }}
      />
    </div>
  )
}