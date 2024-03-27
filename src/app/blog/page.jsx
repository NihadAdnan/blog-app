
import BlogCard from '@/components/blogCard/BlogCard'
import styles from './blog.module.css'

export default function BlogPage() {
  return (
    <div className={styles.container}>
      <div className={styles.post}>
      <BlogCard/>
      </div>
      <div className={styles.post}>
      <BlogCard/>
      </div>
      <div className={styles.post}>
      <BlogCard/>
      </div>
      <div className={styles.post}>
      <BlogCard/>
      </div>
      <div className={styles.post}>
      <BlogCard/>
      </div>
    </div>
  )
}
