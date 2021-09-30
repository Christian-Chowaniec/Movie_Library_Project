import React from 'react';
// import {Link} from "react-router-dom";
import {Link} from "react-router-dom";
import SearchBar from "./search-bar";


const Nav = () => {
    return (
        <nav>
            <ul className="navigation-bar">

                    <Link to="/">
                        <li className="navigation-bar-item-logo">CC<span> 🎬</span></li>
                    </Link>

                    <Link to="/">
                        <li className="navigation-bar-item">Home</li>
                    </Link>

                    <Link to="/tv-serials">
                        <li className="navigation-bar-item">TV Serials</li>
                    </Link>

                    <Link to="/movies">
                        <li className="navigation-bar-item">Movies</li>
                    </Link>

                    <Link to="/popular">
                        <li className="navigation-bar-item">Popular</li>
                    </Link>

                    <Link to="/my-list">
                        <li className="navigation-bar-item">My List</li>
                    </Link>

                    <SearchBar/>

            </ul>

        </nav>
    );
};

export default Nav;