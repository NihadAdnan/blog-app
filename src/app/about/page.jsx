import styles from './about.module.css'
import Image from 'next/image'
import aboutImg from '/public/typewriter-210640_1280.jpg'


export const metadata = {
  title:"About Page",
  description: "About Description",
};

export default function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Company</h2>
        <h1 className={styles.title}>Transforming Ideas into Reality</h1>
        <p className={styles.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil fuga ducimus aliquid provident alias! Ducimus aliquid placeat ab voluptatem saepe magni rem velit incidunt voluptates sint, atque est possimus labore hic nobis distinctio soluta, recusandae error, aperiam similique doloremque rerum!</p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10k+</h1>
            <p>years of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10k+</h1>
            <p>years of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10k+</h1>
            <p>years of experience</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src={aboutImg} alt='about image' fill className={styles.img}/>
      </div>
    </div>
  )
}
