import Image from 'next/image'
import { notFound } from 'next/navigation'
import React from 'react'

const fetchSingleBlog = async(id)=>{
  const res = await fetch('http:/localhost:8000/post/getSinglePost/'+id)
  if(!res.ok) return notFound();
  const singleBlog = await res.json()
  return singleBlog
}

async function BlogPost({params : {id}}) {
  const singleBlog = await fetchSingleBlog(id);

  return (
    <div>
      {singleBlog && 
        <div> 
          <h3>{singleBlog?.post?.title}</h3>
          <p>{singleBlog?.post?.description}</p>
          <p>{singleBlog?.post?.category}</p>
          {singleBlog?.post?.image && <Image src={`http://localhost:8000/${singleBlog?.post?.image}`} alt="image" width={300} height={300}/>}
        </div>
      }
    </div>
  )
}

export default BlogPost

export async function generateStaticParams(){
  const res =  await fetch('http://localhost:8000/post/getPosts');
  const blogs = await res.json();

  return blogs.map(blog =>{
    id: blog._id.toString();
  })
}