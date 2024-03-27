import styles from './home.module.css'
import Image from 'next/image'
import gif from '/public/giphy.gif'

export default function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Nihad's Nexus: Connecting Hearts and Minds</h1>
        <p className={styles.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil fuga ducimus aliquid provident alias! Ducimus aliquid placeat ab voluptatem saepe magni rem velit incidunt voluptates sint, atque est possimus labore hic nobis distinctio soluta, recusandae error, aperiam similique doloremque rerum!</p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src={gif} alt='ideas gif' fill/>
      </div>
    </div>
  )
}
