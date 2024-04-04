import Link from 'next/link'
import styles from './blogCard.module.css'
import Image from 'next/image'
import noImg from "/public/No-Image-Placeholder.svg.png"

export default function BlogCard({post}) {
  return (
    <div className={styles.container}>
        <div className={styles.top}>
            {post.img && 
                <div className={styles.imgContainer}>
                < Image src={post.img || noImg} alt='stopwatch image' fill className={styles.img}/>
            </div>   
            }
            <span className={styles.date}>
                28.03.2024
            </span>
        </div>
        <div className={styles.bottom}>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.desc}>{post.body}</p>
            <Link href={`/blog/${post.slug}`} className={styles.link}>READ MORE</Link>
        </div>
    </div>
  )
}
