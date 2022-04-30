import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create = () => {
    const [title, setTitle]=useState('');
    const [body, setBody]=useState('');
    const [author, setAuthor]=useState('mario');
    const [isPending, setPending] = useState(false)
    const history=useHistory();


    const handleSubmit=(e)=>{
        e.preventDefault();
        const blog = {title, body, author}
        fetch('http://localhost:8000/blogs', {
            method:'POST',
            headers:{'Content-Type' : 'application/json'},
            body: JSON.stringify(blog)
        }). then(()=>{
            console.log('new blog added')
            setPending(false)
            history.push('/')
        })
        
    }
    return ( 
        <div className='create'>
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
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
                 {!isPending && <button>Add Blog</button>}
                 {isPending && <button disabled>Adding blog.......</button>}
            
               
            </form>
        </div>
     );
}
 
export default Create;  