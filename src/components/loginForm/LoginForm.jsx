"use client"

import { login } from "@/lib/action";
import styles from "./loginForm.module.css"
import { useFormState } from "react-dom";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function LoginForm() {
    const [state, formAction] = useFormState(login, undefined);

    const router = useRouter()

    useEffect(()=>{
        state?.success && router.push("/login")
    },[state?.success,router])

  return (
    <form className={styles.form} action={formAction}>
    <input type="text" placeholder='Username' name='username'/>
    <input type="password" placeholder='Password' name='password'/>
    <button>Login</button>
    {state?.error}
    <Link href='/register'>
    <div>Don&apos;t have an account?</div>
 <b>Register</b>
    </Link>
  </form>
  )
}
