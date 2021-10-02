import React from 'react';
import './main.scss';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Nav from "./components/navigation/nav";
import Home from "./components/navigation/home";
import TvSerials from "./components/navigation/tv-serials";
import Movies from "./components/navigation/movies";
import Popular from "./components/navigation/popular";
import MyList from "./components/navigation/my-list";
// import SearchBar from "./components/navigation/search-bar";
import Search from "./components/search";
import AddObject from "./components/add-object/add-object";
// import AddObject from "./components/add-object/add-object";

function App() {

    // const [type, setType] = useState([]);
    // const [title, setTitle] = useState([]);
    // const [description, setDescription] = useState([]);
    // const [date, setDate] = useState([]);
    // const [image, setImage] = useState([]);

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

                    <Route path="/search" component={Search}/>
                    <Route path="/my-list/add" component={AddObject}/>


                    {/*<Route path="/my-list/add" component={AddObject}/>*/}
                </Switch>


            </div>
        </Router>
    );
}

export default App;
