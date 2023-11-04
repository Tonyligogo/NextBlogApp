'use client'

import axios from "axios"
import { useState } from "react"
axios.defaults.withCredentials = true

function CreatePost() {

    const [formValues, setFormValues] = useState({title:'', description:'', category:''})

    function handleChange(e){
        setFormValues({...formValues, [e.target.name]:e.target.value})
    }

    async function handleSave(e){
        e.preventDefault()
        await axios.post('http://localhost:8000/post/createPost', formValues)
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err, 'my error')
        })
    }

  return (
    <div>
        <form onSubmit={handleSave}>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" value={formValues.title} required onChange={handleChange}/>
            <label htmlFor="description">Description</label>
            <input type="text" name="description" id="description" value={formValues.description} required onChange={handleChange}/>
            <label htmlFor="category">Category</label>
            <input type="text" name="category" id="category" value={formValues.category} required onChange={handleChange}/>
            <button type="submit">Save</button>
        </form>
    </div>
  )
}

export default CreatePost