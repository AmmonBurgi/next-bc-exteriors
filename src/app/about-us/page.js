import SectionHeader from '@components/SectionHeader'

import imageTwo from '@public/house-two.jpg';

export default function AboutPage() {
  return (
    <section>
      <SectionHeader 
        title="About Us"
        subtitle={"Learn more about B&C Exteriors and our commitment to quality and service."}
        imageData={{ src: imageTwo, alt: "House Two" }}
      />
      <div className='content-wrapper'>
        <p>With years of hands-on experience, we’ve turned our passion for quality home exteriors into a business that helps homeowners transform their houses into beautiful, lasting sanctuaries.</p>
        <p>We take pride in every detail, offering expert services in siding, roofing, windows, and more, all tailored to withstand Utah’s unique climate. Our commitment is simple: to treat every home like it’s our own. From the first consultation to the final inspection, we’re dedicated to providing exceptional service, innovative solutions, and results that stand the test of time. At B&C Exteriors, your home’s exterior is our canvas—and your satisfaction is our greatest reward.</p>
      </div>
    </section>
  )
}