import React, { useState, useEffect } from 'react'



function UseStateComp() {
    // let name = "sachin";
    const [players, setPlayers] = useState(["sachin", "Dhoni", "Surya Kumar"]);
    
    useEffect(()=>{
        alert("sai");
       });

    const addKohli = () => {
        setPlayers([...players,["kohli"]]);
    }
    return (
        <div>

            {players.map((player, index) => {
                return <div key={index}><h1>{player}</h1></div>

            })}
            <button type='button' onClick={() => addKohli()}>Change Name</button>
        </div>
    )
    const addPlayer=()=>{
        setPlayers([...players,['kohli']]);
    }
    return (
        <div>
            <h1>Players List</h1><ol>
                {

                    players.map((playerName, index) => {
                        return <div><li>{playerName}{index}</li></div>

                    })
                }
            </ol>
            <button type='button' onClick={()=>addPlayer()}>Adding player</button>
        </div>

    )

}
export default UseStateComp;