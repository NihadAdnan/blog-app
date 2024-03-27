import Link from "next/link"
import Links from "./links/Links"
import styles from "./navbar.module.css"
import Logo from "../logo/Logo"

export default function Navbar() {
  return (
    <div className={styles.container}>
        <Link href='/' className={styles.logo}>
          <Logo/>
        </Link>
        <div>
            <Links />
        </div>
    </div>
  )
}
