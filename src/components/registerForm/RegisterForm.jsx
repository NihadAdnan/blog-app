"use client"

import { register } from "@/lib/action";
import styles from "./registerForm.module.css"
import { useFormState } from "react-dom";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function RegisterForm() {
    const [state, formAction] = useFormState(register, undefined);

    const router = useRouter()

    useEffect(()=>{
        state?.success && router.push("/login")
    },[state?.success,router])

  return (
    <form className={styles.form} action={formAction}>
    <input type="text" placeholder='Username' name='username'/>
    <input type="email" placeholder='Email' name='email'/>
    <input type="password" placeholder='Password' name='password'/>
    <input type="password" placeholder='Repeat Password' name='passwordRepeat'/>
    <button>Register</button>
    {state?.error}
    <Link href='/login'>
    Already Have an account? <b>Login</b>
    </Link>
  </form>
  )
}
