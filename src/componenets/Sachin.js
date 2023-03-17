import React, { useState } from 'react'


function Sachin() {
    // let name = "sachin";
    const [players, setPlayers] = useState(["sachin", "Dhoni", "sachin"]);
    const [name, setName] = useState("sachin");
    const changeName = () => {
        //  name = "sachin Tendulkar";
        // console.log(name);
        setName("sachin Tendulkar");

    }
    const addKohli = () => {
        // const updatedPlayers = players.push("kohli");
        // console.log(updatedPlayers);
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

}
export default Sachin;