'use client'

import axios from "axios"
import Image from "next/image"
import { useState } from "react"
axios.defaults.withCredentials = true

function CreatePost() {

    const [formValues, setFormValues] = useState({title:'', description:'', category:''})
    const [file, setFile] = useState('')
    const [post, setPost] = useState(null)

    function handleChange(e){
        setFormValues({...formValues, [e.target.name]:e.target.value})
    }

    async function handleSave(e){
        e.preventDefault()

        const data = new FormData()
        const {title, description, category} = formValues
        data.set('title', title);
        data.set('description', description);
        data.set('category', category);
        data.set('image', file[0]);

        await axios.post('http://localhost:8000/post/createPost', data)
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err, 'my error')
        })
    }
    async function handleFetch(e){
        e.preventDefault()
        await axios.get('http://localhost:8000/post/getPosts')
        .then((res)=>{
            // console.log(res.data)
            setPost(res.data[0])
        })
    }
    console.log(post, 'posts')

  return (
    <div>
        <form onSubmit={handleSave}>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" value={formValues.title} required onChange={handleChange}/>
            <label htmlFor="description">Description</label>
            <input type="text" name="description" id="description" value={formValues.description} required onChange={handleChange}/>
            <label htmlFor="category">Category</label>
            <input type="text" name="category" id="category" value={formValues.category} required onChange={handleChange}/>
            <label htmlFor="file">Image</label>
            <input type="file" id="file" onChange={e => setFile(e.target.files)}/>
            <button type="submit">Save</button>
        </form>
        <button onClick={handleFetch}>Fetch posts</button>
        {post !== null &&
            <div>
                <h3>{post?.title}</h3>
                <p>{post?.description}</p>
                <p>{post?.category}</p>
                <Image src={`http://localhost:8000/${post?.image}`} alt="image" width={300} height={300}/>
                {/* <img src={`http://localhost:8000/${post?.image}`} alt="imagess" /> */}
            </div>
        }
    </div>
  )
}

export default CreatePost