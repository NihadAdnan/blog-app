import styles from "./singlePost.module.css"
import Image from "next/image"
import watch from '/public/stopwatch-5382626_1280.jpg'
import avatar from '/public/21104.png'

export default function SinglePost() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={watch} alt="stop watch image" fill className={styles.img}/>
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>
          Time Management
        </h1>
        <div className={styles.detail}>
          <Image src={avatar} alt="avatar image"
          width={50} height={50} className={styles.avatar}/>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Nihad Adnan</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique ab quod eligendi deleniti id eaque, nihil molestiae ullam quam quasi.
        </div>
      </div>
    </div>
  )
}
