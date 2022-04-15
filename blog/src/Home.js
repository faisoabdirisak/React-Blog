import { useState } from 'react';
const Home = () => {
    // let name='faiso';
     const [name, setName] = useState('faiso');
     const [age, setAge] = useState(26)

    const handleClick=()=>{
     setName('faska');
     setAge(24);
    }
   
    return (  
        <div className="home">
            <h2>Home Page</h2>
            <p>{name} is {age} years old </p>
            <button onClick={handleClick}>Click Me</button>
          
        </div>
    );
}
 
export default Home;