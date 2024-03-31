import { getUser } from '@/lib/data'
import styles from './postUser.module.css'
import Image from 'next/image'
//FETCHING WITH API
// const getData = async(userId)=>{
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`,{cache:'no-store'})

//     if(!res.ok){
//         throw new Error("Something went wrong!")
//     }
//     return res.json()
// }

const PostUser=async({userId})=> {

    //FETCHING WITH API
    // const user = await getData(userId)

    //FETCHING WITHOUT API
    const user = await getUser(userId)

  return (
   
    <div className={styles.container}>
        {
            user.img && <Image src={user.img} alt="avatar image"
            width={50} height={50} className={styles.avatar}/>
        }
    <div className={styles.text}>
    <span className={styles.title}>Author</span>
    <span className={styles.titleValue}>{user.username}</span>
    </div>
  </div>
  )
}

export default PostUser
