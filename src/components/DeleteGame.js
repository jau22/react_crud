import React from "react";

function DeleteGame(props){
    const GAMES_ENDPOINT = "https://crudcrud.com/api/ec991fc9e93c48e695e8a11af4c27f83/boardgames";

    const deleteGame=()=>{
        console.log(props.gameId)
        fetch(`${GAMES_ENDPOINT}/${props.gameId}`
            ,{method: "DELETE"},
        ).then(()=>{props.fetchData();})
    }

return(
    <div>
        <button className="btn-warning button " onClick={deleteGame}>Delete</button>
    </div>
)
};

export default DeleteGame;