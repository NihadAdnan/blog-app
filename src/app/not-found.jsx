import Link from "next/link";

export default function notFound() {
  return (
    <div>
        <h1>Page not Found</h1>
        <p>Sorry the page you are looking for is not found!</p>
        <Link href='/'>Return to Home</Link>
    </div>
  )
}
