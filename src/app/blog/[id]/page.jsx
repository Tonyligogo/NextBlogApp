import Image from 'next/image'
import { notFound } from 'next/navigation'
import React from 'react'

const fetchSingleBlog = async(id)=>{
  const res = await fetch('http:/localhost:8000/post/getSinglePost/'+id)
  const singleBlog = await res.json()
  console.log(singleBlog)
  return singleBlog
}

async function BlogPost({params : {id}}) {
  const singleBlog = await fetchSingleBlog(id);

  if(!singleBlog.id) return notFound();

  return (
    <div>
      {singleBlog && 
        <div> 
          <h3>{singleBlog?.post?.title}</h3>
          <p>{singleBlog?.post?.description}</p>
          <p>{singleBlog?.post?.category}</p>
          <Image src={`http://localhost:8000/${singleBlog?.post?.image}`} alt="image" width={300} height={300}/>
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