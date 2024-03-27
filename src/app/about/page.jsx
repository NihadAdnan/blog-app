import aboutImg from '/public/typewriter-210640_1280.jpg'
import Image from 'next/image'
import styles from './about.module.css'

export default function AboutPage() {
  return (
    <div>
      <div className={styles.imgContainer}>
      <Image src={aboutImg} alt='typewriter image' fill/>
      </div>
    </div>
  )
}
