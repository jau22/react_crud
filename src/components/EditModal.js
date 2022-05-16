import React, { useState } from "react";

function EditModal(props, {setOpenModal}){
    const [editGame, setEditedGame] = useState(props.game.name)
    const [editOwner, setEditedOwner] = useState(props.game.owner)

    const editExistingGame =(e)=>{
        e.preventDefault();
        const GAMES_ENDPOINT = "https://crudcrud.com/api/ec991fc9e93c48e695e8a11af4c27f83/boardgames";

        fetch(`${GAMES_ENDPOINT}/${props.game._id}`,{
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                name: editGame,
                owner: editOwner
            })
        }).then(()=>{
            props.fetchData();
            props.setOpenModal(false);
        });
    };


    return(
        <div>
            <div className="modalBackground">
                <div className="modalContainer">
                <label>Game Title</label>
                <input className="form-control" value={editGame} onChange={(e)=>setEditedGame(e.target.value)}></input>
                <label>Game Owner</label>
                <input className="form-control" value={editOwner} onChange={(e)=>setEditedOwner(e.target.value)}></input>
                <button className="btn-primary button" onClick={editExistingGame}>Update Game</button>
                <button className="btn-secondary button" onClick={()=>{props.setOpenModal(false)}}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default EditModal;