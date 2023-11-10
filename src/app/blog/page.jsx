import Image from 'next/image'
import React from 'react'
import styles from './page.module.css'
import axios from 'axios';
import Link from 'next/link';

const fetchBlogs = async ()=>{
    const res =  await fetch('http://localhost:8000/post/getPosts',
    {next: {revalidate: 60} }
    );
    const blogs = await res.json();
    return blogs;
}

async function Blog() {

    const blogs = await fetchBlogs();

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
                    <Link href={`/blog/${blog?._id}`}>
                        <Image src={`http://localhost:8000/${blog?.image}`} alt="image" width={300} height={300}/>
                    </Link>
                </div>
            ))

            }
        </div>
    </div>
  )
}

export default Blog