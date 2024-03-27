
import styles from './footer.module.css'

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.name}>
        Nihad Adnan Shah
      </div>
      <div className={styles.socials}>
        Github | LinkedIn | Facebook | WhatsApp
      </div>
    </div>
  )
}
