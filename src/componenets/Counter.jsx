import React, { useState, useEffect } from "react";


function Counter() {
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);
    const [posts, setPosts] = useState([]);

    // useEffect(() => {
    //     let timer = setTimeout(() => {
    //         setCount((count) => count + 1);
    //     }, 1000);

    //     return () => clearTimeout(timer)
    // }, [count]);


    const getPosts = async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const result = await response.json();
            setPosts(result);




            // const result = await response.json();
     } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        getPosts();
    }, []);


    // useEffect(() => {
    //     setCalculation(() => count * 2);
    // }, [count]); // <- add the count variable here

    return (
        <>
            {posts.length}
            {posts.map((post, index) => {
                return <div key={index}><h1>{post.title}</h1></div>

            })}
            {/* <p>Count: {count}</p>
            <button onClick={() => setCount((c) => c + 1)}>+</button>
            <p>Calculation: {calculation}</p> */}
        </>
    );
}
export default Counter;