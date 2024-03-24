import axios from 'axios'
import React, { useState } from 'react'

const CreatePost = () => {
    const [title, setTitle] = useState('')
    
    const onSubmit = async (e) => {
        e.preventDefault()

        await axios.post("http://localhost:4000/posts", {
            title
        })
        setTitle('')

    }

  return (
    <div onSubmit={onSubmit} style={{ textAlign: 'center' }}>
      <form action="" style={{ margin: '20px auto', width: '300px' }} >
        <label  htmlFor="title" style={{ display: 'block', marginBottom: '10px' }}>Title</label>
        <input  type="text" id="title" name="title"  value={title} onChange={(e)=>setTitle(e.target.value)} style={{ width: '100%', padding: '8px', marginBottom: '10px' }}/>
        <button style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>Submit</button>
      </form>
    </div>
  )
}

export default CreatePost
