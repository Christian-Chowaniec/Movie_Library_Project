import {useState, useEffect} from 'react';
import './main.scss';
import Header from "./components/header";
// import Movie from "./components/movieCard";
import PopularList from "./components/popular-list";
// import axios from 'axios';

// const featured_api = "https://api.themoviedb.org/3/movie/popular?api_key=76578856efa3b3119d5ebe76dc5498b0&language=en-US&page=1";


function App() {
    // const [GameList, SetGameList] = useState([]);
    // const [topGame, SetTopGame] = useState([]);
    // const [search, SetSearch] = useState("");
    // const [movies, SetMovies] = useState([]);

    // useEffect(() => {
    //     fetch(featured_api)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             SetMovies(data.results)
    //         });
    // }, []);
    // const handleOnSubmit = (e) => {
    //     e.preventDefault();
    // }

    return (
        <>
            <Header/>
          <PopularList/>
        </>
    );
}

export default App;