import React from 'react';
import './main.scss';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navi from "./components/navigation/nav";
import Home from "./components/navigation/home";
import TvSerials from "./components/navigation/tv-serials";
import Movies from "./components/navigation/movies";
import Popular from "./components/navigation/popular";
import MyList from "./components/navigation/my-list";
import Search from "./components/search";

function App() {

    return (
        <Router>
            <div>
                <Navi/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/movies" component={Movies}/>
                    <Route path="/tv-series" component={TvSerials}/>
                    <Route path="/popular" component={Popular}/>
                    <Route path="/my_list" component={MyList}/>
                    <Route path="/search" component={Search}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
