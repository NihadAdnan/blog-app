import Image from "next/image"
import logo from '/public/android-chrome-192x192.png'
import styles from './logo.module.css'

export default function Logo() {
  return (
    <div className={styles.imgContainer}>
        <Image src={logo} alt="logo" fill/>
    </div>
  )
}
