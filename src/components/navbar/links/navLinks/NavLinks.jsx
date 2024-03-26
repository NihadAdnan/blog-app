"use client"

import Link from "next/link";
import styles from "./navLinks.module.css"
import { usePathname } from "next/navigation";


export default function NavLinks({item}) {
    const pathName = usePathname()
  return (
    <div>
        <Link href={item.path} className={`${styles.container} ${pathName===item.path && styles.active}`}>{item.title}</Link>
    </div>
  )
}
