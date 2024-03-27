import Link from 'next/link'
import styles from './blogCard.module.css'
import Image from 'next/image'
import watch from '/public/stopwatch-5382626_1280.jpg'

export default function BlogCard() {
  return (
    <div className={styles.container}>
        <div className={styles.top}>
            <div className={styles.imgContainer}>
                <Image src={watch} alt='stopwatch image' fill className={styles.img}/>
            </div>
            <span className={styles.date}>
                28.03.2024
            </span>
        </div>
        <div className={styles.bottom}>
            <h1 className={styles.title}>Time Management</h1>
            <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, error.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, error.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, error.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, error.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, error.</p>
            <Link href='/blog/post' className={styles.link}>READ MORE</Link>
        </div>
    </div>
  )
}
