import React, {useState} from "react";
import {NavLink} from "react-router-dom";

function NavBar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <NavLink exact to="/" className="nav-logo">
                        <li className="navigation-bar-item-logo"
                            onClick={() => window.scroll(0, 0)}>CC<span> 🎬</span></li>
                    </NavLink>

                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/tv-series"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >TV Series
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/movies"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >Movies
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/popular"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >Popular
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/my_list"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >My List
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/search"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            ><i className="fas fa-search"></i>
                            </NavLink>
                        </li>
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;