
import BlogCard from '@/components/blogCard/BlogCard'
import styles from './blog.module.css'
import { revalidatePath } from 'next/cache'
import { getPosts } from '@/lib/data'

//FETCHING WITH API
const getData = async()=>{
  const res = await fetch("http://localhost:3000/api/blog",{next:{revalidate:3600}})

  if(!res.ok){
    throw new Error("Something went wrong")
  }
  return res.json()
}


const BlogPage = async()=> {

  //FETCHING WITH API
  const posts = await getData()

  //FETCHING WITHOUT API
  // const posts=await getPosts()
  return (
    <div className={styles.container}>
      {posts.map((post)=>(
        <div className={styles.post} key={post.id}>
        <BlogCard post={post}/>
        </div>
      ))}
    </div>
  )
}


export default BlogPage