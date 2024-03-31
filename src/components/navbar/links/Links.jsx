"use client"

import { useState } from 'react'
import styles from './links.module.css'
import NavLinks from "./navLinks/NavLinks"
import Image from 'next/image'
import menu from '/public/menu_FILL0_wght400_GRAD0_opsz24.png'
import { handleLogout } from '@/lib/action'


const links = [
    {
        title:'Home',
        path:'/'
    },
    {
        title:'Blog',
        path:'/blog'
    },
    {
        title:'About',
        path:'/about'
    },
    {
        title:'Contact',
        path:'/contact'
    },

]

export default function Links({session}) {

    const [open,setOpen] = useState(false)
    // temp
    const isAdmin=true
  return (
    <div className={styles.container}>
        <div className={styles.links}>
        {links.map((link=>(
            <NavLinks item={link} key={link.title}/>
        )))}
        {session?.user ? (
            <>
            {
             session.user?.isAdmin && (
                <NavLinks item={{title:'Admin',path:'/admin'}} />
              ) 
            }
            <form action={handleLogout}>
            <button className={styles.logout}>Logout</button>
            </form>
            </>
                 
        ) : (
            <NavLinks item={{title:'Login',path:'/login'}} />
        )}
    </div>
    <Image src={menu}  className={styles.menuImg} alt='menubar' width={30} height={30} onClick={()=>setOpen((prev)=>(!prev))}/>
    {
        open && (
            <div className={styles.mobileLinks}>
                {links.map((link)=>(
                    <NavLinks item={link} key={link.title}/>
                ))}
            </div>
        )
    }
    </div>
  )
}
