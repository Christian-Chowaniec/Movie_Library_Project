import {useState, useEffect} from 'react';
import './main.scss';
import Header from "./components/header";
import Body from "./components/body";
import gameCard from "./components/gameCard";
// import axios from 'axios';

function App() {
    // const [GameList, SetGameList] = useState([]);
    const [topGame, SetTopGame] = useState([]);
    // const [search, SetSearch] = useState("");

    useEffect(() => {
        fetch(`https://api.rawg.io/api/games`)
            .then(res => res.json())
            .then((data) => {
                console.log(data)
                SetTopGame(data)
            })
    }, []);

    return (
        <>
            <Header/>
            <Body>
                <div> {topGame.length > 0 && topGame.map((game) => <gameCard/>)}</div>
            </Body>
        </>
    );
}

export default App;


// useEffect(()=>{
//    fetch("https://api.rawg.io/api/games").then(res=>{
//         console.log(res.data.slice(0,10))
//     })
// },[]);

// useEffect(()=>{
//     fetch(`https://api.rawg.io/api/games`)
//         .then(res=>res.json())
//     .then((data)=>{
//         console.log(data)
//         SetTopGame(data)
//     })
// },[]);
