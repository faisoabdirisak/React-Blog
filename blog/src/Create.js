import { useState } from "react";
const Create = () => {
    const [title, setTitle]=useState('');
    const [body, setBody]=useState('');
    const [author, setAuthor]=useState('mario');
    return ( 
        <div className='create'>
            <h2>Add a new Blog</h2>
            <form>
                <label>Blog title</label>
                <input
                type='text'
                required 
                value={body}
                onChange= {(e) => setBody(e.target.value)}
                />
                  <label>Body content</label>
                <textarea  
                 required
                 value={title}
                 onChange= {(e) => setTitle(e.target.value)}
                 ></textarea>
                 <label>Author</label>
                 <select 
                 value={author}
                 onChange={(e)=> setAuthor(e.target.value)}>
                     <option value='mario'>Mario</option>
                     <option value='yoshi'>Yoshi</option>
                 </select>
                 <button>Add Blog</button>
                 <p>{title}</p>
                 <p>{body}</p>
                 <p>{author}</p>
               
            </form>
        </div>
     );
}
 
export default Create;  