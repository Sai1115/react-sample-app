import React, { useState } from 'react'



import ThridComponent from './ThridComponent';


function FirstComponent(props) {

    const [place, setPlace]  = useState('Dallas');

    const changePlace = ()=>{
        setPlace('Austin');
    }

    const setDish = (food) => {
        props.sendDish(food);
    }

    const location = "Austin"
    const sendBackLocation = () => {
        props.sendAustin(location);
    }
    return (
        <div>
            <h1>My First component</h1>
            <h1>{place}</h1>
            <ThridComponent sendRice={(dish) => setDish(dish)} />

            <button type='button' onClick={() => {sendBackLocation(), changePlace()}}>Send Data to Parent</button>
            {/* <button type="button" onClick={changePlace()}>Change the place</button> */}


        </div>
    )
}
export default FirstComponent;