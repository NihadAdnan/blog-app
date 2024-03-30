"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"


export default function page() {

    const router=useRouter()
    const pathName = usePathname()
    const query = useSearchParams()

    const q = query.get("q")

    console.log(pathName)
    console.log(q)

    const handleClick=()=>{
        console.log('Clicked')
        router.push('/')
    }
  return (
    <button onClick={handleClick}>Go back</button>
  )
}
