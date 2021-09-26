import {useState, useEffect} from 'react';
import './main.scss';
import Header from "./components/header";
// import Body from "./components/body";
import Movie from "./components/movieCard";
// import axios from 'axios';

const featured_api = "https://api.themoviedb.org/3/movie/popular?api_key=76578856efa3b3119d5ebe76dc5498b0&language=en-US&page=1";

function App() {
    // const [GameList, SetGameList] = useState([]);
    // const [topGame, SetTopGame] = useState([]);
    // const [search, SetSearch] = useState("");
    const [movies, SetMovies] = useState([]);

    useEffect(() => {
        fetch(featured_api)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                SetMovies(data.results)
            });
    }, []);


    return (
        <>
            <Header/>
            <div className="movie_container">
                {movies.length > 0 &&
                movies.map((movie) => <Movie key={movie.id } {...movie}/>
                )}</div>
        </>
    );
}

export default App;