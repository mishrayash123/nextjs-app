import {useRouter} from "next/router";

 const pageno = ()=> {
    const router = useRouter();
    const pagenumber = router.query.pageno;
    return (
      <div>
        <h1>blog {pagenumber}</h1>
      </div>
    )
  }

  export default pageno;
  
