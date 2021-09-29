import React from 'react';
// import {useState, useEffect} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
    , Link
} from "react-router-dom";
import './main.scss';
import Nav from "./components/navigation/nav";
import Home from "./components/navigation/home";
import TvSerials from "./components/navigation/tv-serials";
import Movies from "./components/navigation/movies";
import Popular from "./components/navigation/popular";
import MyList from "./components/navigation/my-list";
import SearchBar from "./components/navigation/search-bar";

function App() {


    return (
        <Router>
            <div>
                <Nav/>

                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/tv-serials" component={TvSerials}/>
                    <Route path="/popular" component={Popular}/>
                    <Route path="/movies" component={Movies}/>
                    <Route path="/my-list" component={MyList}/>
                </Switch>
            </div>
        </Router>
    );
}


export default App;

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