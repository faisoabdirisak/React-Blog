const Home = () => {
    const handleClick=(e)=>{
        console.log("hello", e)
    }
    const handleClickAgain=(name, e)=>{
        console.log("hello", name, e.target)
    }

    return (  
        <div className="home">
            <h2>Home Page</h2>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={(e)=> handleClickAgain("faska",e)
            }>Click me Again</button>
        </div>
    );
}
 
export default Home;