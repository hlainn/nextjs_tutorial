import styles from '../styles/Home.module.css'
import Head from 'next/head'

const  About = () => {
    return ( 
        <>
            <Head>
                <title>Flowers List | About</title>
                <meta name="keywords" content="flowers"/>
            </Head>
            <div>
                <h1 className={styles.title}>About</h1>
                <p className={styles.text}>Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
            </div>
        </>
     );
}
 
export default About;