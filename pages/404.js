import Link from 'next/link'
/**redirecting user**/
import {useEffect} from 'react'
import {useRouter} from 'next/router'

const NotFound = () => {
    const router=useRouter();

    useEffect(()=>{
        // console.log('use effect ran')
        setTimeout(()=>{
        //router.go(1)
        router.push('/')   //redirect to home page after 3sec
        },3000) //3seconds
    },[])
    return ( 
        <div className="not-found">
             <h1>Oooops....</h1>
            <h2>This Page cannot be found!</h2>
            <p>Go back to the
            <Link href="/"><a>Home Page</a></Link>
            </p>
        </div>
       
     );
}
 
export default NotFound;