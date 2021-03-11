import styles from '../../styles/Flowers.module.css'

export const getStaticPaths=async()=>{
    const res=await fetch('http://jsonplaceholder.typicode.com/users');
    const data=await res.json();

    const paths=data.map(flower=>{
        return{
            params:{id:flower.id.toString()}
        }
    })

    return{
        paths,
        fallback:false
    }
}

export const getStaticProps=async(context)=>{
    const id=context.params.id;
    const res=await fetch('http://jsonplaceholder.typicode.com/users/'+id);
    const data= await res.json();

    return{
        props:{flower:data}
    }

}

const Details = ({flower}) => {
    return ( 
        <div>
            <h1 className={styles.text}>{flower.name}</h1>
            <p className={styles.text}>{flower.username}</p>
            <p className={styles.text}>{flower.email}</p>
            <p className={styles.text}>{flower.address.street}</p>
            <p className={styles.text}>{flower.address.city}</p>
        </div>
     );
}
 
export default Details;