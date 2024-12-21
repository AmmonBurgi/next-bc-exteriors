import Image from "next/image";

import styles from "./styles.headers.module.css";

export default function SectionHeader({ title, subtitle, imageData }) {
  return (
    <div className={styles.sectionHeader}>
      <Image src={imageData.src} alt={imageData.alt} />
      <span></span>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}
