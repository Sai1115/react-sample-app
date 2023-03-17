import React from 'react'
import Sachin from './componenets/Sachin';


function ThridComponent(props) {
    const food = "friedRice"


    const sendFood = () => {
        console.log("send food");
        props.sendRice(food);

    }
    return (
        <div><h2>Third Component</h2>
            <Sachin />
            <button type='button' onClick={() => sendFood()}>Send Food</button>
        </div>
    )

}
export default ThridComponent;