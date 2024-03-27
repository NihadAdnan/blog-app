import styles from './contact.module.css'
import Image from 'next/image'
import contactImg from '/public/giphy2.gif'

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>  
        <Image src={contactImg} alt='contact us' fill className={styles.img}/>
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder='Name'/>
          <input type="email" placeholder='Email'/>
          <input type="number" placeholder='Phone Number (Optional)' />
          <textarea cols="30" rows="10" placeholder='Message'></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  )
}
