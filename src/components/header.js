import React from 'react';

const Header = () => {
    return (
        <nav className="navigation-bar">
            <a className="navigation-bar-item-logo" href="/home"> CC<span> 🎬</span> </a>
            <a className="navigation-bar-item" href="/home">Home</a>
            <a className="navigation-bar-item" href="/tv-serials">TV Serials</a>
            <a className="navigation-bar-item" href="/movies">Movies</a>
            <a className="navigation-bar-item" href="/popular">Popular</a>
            <a className="navigation-bar-item" href="/my-list">My List</a>
            {/*<a className="navigation-bar-item" href="/my-games">my games</a>*/}
            <div className="search-box">
                <button className="btn-search">
                    <div className="gg-search_icon">
                        <i className="gg-search"></i>
                    </div>
                </button>
                <input type="text" className="input-search" placeholder="Type to Search..."/>
            </div>
        </nav>
)};
export default Header;