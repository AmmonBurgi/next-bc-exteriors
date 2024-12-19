import styles from './styles.headers.module.css'

export default function SectionHeader({ title, subtitle }) {
  return (
    <div className={styles.sectionHeader}>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  )
}