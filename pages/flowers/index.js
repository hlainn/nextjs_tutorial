import styles from '../../styles/Flowers.module.css'
import Head from 'next/head'
import Link from 'next/link'

export const getStaticProps = async ()=>{

    const res= await fetch('http://jsonplaceholder.typicode.com/users');
    const data= await res.json();

    return {
        props:{flowers:data}
    }

}

const Flowers = ({flowers}) => {
    return ( 
        <>
        <Head>
            <title>Flowers | All Lists</title>
            <meta name="keywords" content="flowers"/>
        </Head>
        <div>
            <h2 className={styles.text}>Here are all flowers!</h2>
            {flowers.map(flower=>(
                <Link href={"/flowers/"+flower.id} key={flower.id}>
                    <a className={styles.single}>
                        <h3>{flower.name}</h3>
                    </a>
                </Link>
            ))}
        </div>
        
        </>
     );
}
 
export default Flowers;