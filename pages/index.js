import Navbar from "../Components/Navbar"
import {useRouter} from "next/router"

export default function index() {
  const router = useRouter();
  const handleInput = () =>{
    router.push("/Home");
  }
  return (
    <>
    <Navbar />
    <button onClick={handleInput}> Go To Home</button>
    </>
  )
}
