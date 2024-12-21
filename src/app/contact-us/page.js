"use client"

import ReusableForm from '@/components/ReusableForm'
import SectionHeader from '@components/SectionHeader'

import styles from './styles.module.css'
import imageTwo from '@public/house-two.jpg';

const inputData = [
  [
    {
      label: "First Name",
      properties: {
        type: "text",
        name: "first_name",
        id: "first_name",
        required: true,
      },
    },
    {
      label: "Last Name",
      properties: {
        type: "text",
        name: "last_name",
        id: "last_name",
        required: true,
      },
    },
  ],
  [
    {
      label: "Email",
      properties: {
        type: "text",
        name: "email",
        id: "email",
        required: true,
      },
    },
    {
      label: "Phone Number",
      properties: {
        type: "tel",
        name: "phone",
        id: "phone",
        required: true,
      },
    },
  ],
  [
    {
      label: "Street Address",
      properties: {
        type: "text",
        name: "street_address",
        id: "street_address",
        required: false,
      },
    }
  ],
  [
    {
      label: "City",
      properties: {
        type: "text",
        name: "city",
        id: "city",
        required: false,
      },
    },
    {
      label: "State/Region",
      properties: {
        type: "text",
        name: "state_region",
        id: "state_region",
        required: false,
      },
    },
    {
      label: "Postal Code",
      properties: {
        type: "text",
        name: "postal_code",
        id: "postal_code",
        required: true,
      },
    },
  ],
  // [
  //   {
  //     label: "How did you hear about us?",
  //     properties: {
  //       type: "text",
  //       name: "message",
  //       id: "message",
  //       required: false,
  //     },
  //   }
  // ],
  [
    {
      label: "Message",
      properties: {
        type: "textarea",
        name: "message",
        id: "message",
        required: true,
      },
    }
  ],
]

export default function ContactPage() {

  const handleSubmit = () => {

  } 

  return (
    <section className={styles.contactSection}>
      <SectionHeader title="Contact Us" imageData={{ src: imageTwo, alt: "Second House"}} />
      <div className='content-wrapper'>
        <div className={styles.contactContent}>
          <div>
            <h2>Get in touch</h2>
            <p>Fill out the form below to get in touch with us. We'll get back to you as soon as possible</p>
          </div>
          <div>
            <ReusableForm 
              handleSubmit={handleSubmit}
              inputs={inputData}
            />
          </div>
        </div>
      </div>
    </section>
  )
}