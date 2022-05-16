import React, { useState } from "react";

function AddGame(props){
    const [addGame, setAddGame] = useState("")
    const [addOwner, setOwner] = useState("")

    const createGame =(e)=>{
        e.preventDefault();
        const GAMES_ENDPOINT = "https://crudcrud.com/api/ec991fc9e93c48e695e8a11af4c27f83/boardgames";

        fetch(GAMES_ENDPOINT,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                name: addGame,
                owner: addOwner
            })
        }).then(()=>{
            props.fetchData();
        });
    };

    return (
        <div className="form-group component mainComponent">
            <form>
                <label>Game Title</label>
                <input className="form-control" value={addGame} onChange={(e)=>setAddGame(e.target.value)}></input>
                <label>Game Owner</label>
                <input className="form-control" value={addOwner} onChange={(e)=>setOwner(e.target.value)}></input>
                <button className="btn-primary button" onClick={createGame}>Add Game</button>
            </form>
        </div>
    )
}

export default AddGame;