import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                {/* <h1>HLaine Poe Ei</h1> */}
                {/* <img src="/logo.jfif" alt="logo"/> */}
                <Image src="/logo.jfif" width={100} height={100}></Image>
            </div>
            
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/flowers"><a>Flowers List</a></Link>
        </nav>
     );
}
 
export default Navbar;