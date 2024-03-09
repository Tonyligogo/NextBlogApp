import Image from 'next/image'
import styles from './page.module.css'
import axios from 'axios';
import Link from 'next/link';
import { format} from 'date-fns';
axios.defaults.withCredentials = true

// import { cookies } from "next/headers";
const fetchBlogs = async ()=>{
    const res = await fetch('http://localhost:8000/post/getPosts', 
    {next:{ revalidate: 100}}
    ) 
    if(!res.ok){
        throw new Error('There was an error fetching the blogs')
    }
    return res.json();
}

const Blog = async ()=> {
    const blogs = await fetchBlogs()
    // const [blogs, setBlogs] = useState([])
    // useEffect(()=>{
    //    getBlogs()
    // },[])
    // async function getBlogs(){
    //     const res = await axios.get('http://localhost:8000/post/getPosts')
    //     .then(res =>{
    //         setBlogs(res.data)
    //     })
    // }

  return (
    <div className={styles.container}>
        <div className={styles.stories}>Get started with our <strong>best stories</strong></div>
        <div className={styles.blogs}>
            {blogs?.map((blog)=>(
                <div key={blog._id}>
                    <Link href={`/blog/${blog?._id}`}>
                        <h3>{blog?.title}</h3>
                    </Link>
                    <p>{blog?.description}</p>
                    <p>{blog?.category}</p>
                    <p>{blog?.postedBy?.username}</p>
                    <p>{format(new Date(blog?.createdAt), 'MMM d, yyyy HH:mm')}</p>
                    {blog?.image && 
                        <Link href={`/blog/${blog?._id}`}>
                            <Image src={`http://localhost:8000/${blog?.image}`} alt="image" width={300} height={300}/>
                        </Link>
                    }
                </div>
            ))

            }
        </div>
    </div>
  )
}

export default Blog