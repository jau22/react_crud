import React, { useEffect, useState } from "react"
import DeleteGame from "./DeleteGame";
import AddGame from "./AddGame";
import EditModal from "./EditModal";

function GameList(){
    const [games, setGames] = useState([]);
    const GAMES_ENDPOINT = "https://crudcrud.com/api/ec991fc9e93c48e695e8a11af4c27f83/boardgames";

    const fetchData = () => {
        fetch(GAMES_ENDPOINT)
        .then((response) =>{
            return response.json();
        })
        .then((data) => {
            setGames(data);
        });
    };

    useEffect(()=>{fetchData();}, []);

    //modal State
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div className="component">
            <h4>Games for Gathering</h4>
            <AddGame fetchData={fetchData}/>           
           
            {games.map((game,index)=>(
                <div className="row" key={index}>
                    <div className="col-8">
                        <h4><b>{game.name}</b></h4>
                        <h6><small><b>Owner:</b> {game.owner}</small></h6>
                    </div>
                    <div className="col-4 ">
                        <button className="btn-secondary button" 
                        onClick={() => {setModalOpen(true);}}>Update Game</button>
                       <DeleteGame gameId={game._id} fetchData={fetchData}/>          
                    </div>
                    {modalOpen && <EditModal game={game} fetchData={fetchData} setOpenModal={setModalOpen} />}
                </div>
            ))}
            
            </div>

    );
};

export default GameList;