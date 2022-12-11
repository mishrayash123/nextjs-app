import Link from "next/link"
import {useRouter} from "next/router"

export default function index() {
  const router = useRouter();
  const handleInput = () =>{
    router.push("/Home");
  }
  return (
    <nav>
      <ul>
        <li>
        <Link href="/Home">
          Home
        </Link>
        </li>
        <li>
        <Link href="/about">
          About
        </Link>
        </li>
        <li>
        <Link href="/blog">
          Blog
        </Link>
        </li>
      </ul>

      <button onClick={handleInput}> Go To Home</button>
    </nav>
  )
}
