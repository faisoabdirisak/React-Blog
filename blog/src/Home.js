import { useState } from 'react';


const Home = () => {

    const [blogs, setBlogs]= useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'faiso', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'abdirisak', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'faska', id: 3 }
    ]);

    const changeContent=()=>{
        setBlogs([
    { title: 'My First Blog', body: 'lorem ipsum...', author: 'nanii', id: 1 },
    { title: 'Second Best Blog!', body: 'lorem ipsum...', author: 'ali', id: 2 },
    { title: 'Web dev topics', body: 'lorem ipsum...', author: 'shukri', id: 3 }
        ])
    }

    return (  
        <div className="home">
          {blogs.map((blog)=>(
              <div className="blog-preview" key={blog.id}>
                  <h2>{blog.title}</h2>
                  <p>Written by {blog.author}</p>

              </div>

          ))}
          <button style={{
                    color:"white",
                    backgroundColor:"#f1356d",
                    borderRadius:"8px"
                }} onClick={changeContent}>Change content</button>
          
        </div>
    );
}
 
export default Home;