import React from 'react';

const Header = () => {
    return (
        <nav className="navigation-bar">
            <a className="navigation-bar-item-logo" href="/home"> CC<span> Movies</span> </a>
            <a className="navigation-bar-item" href="/popular-games">popular movies</a>
            {/*<a className="navigation-bar-item" href="/my-games">my games</a>*/}
            <a className="navigation-bar-item" href="/add-game">+ add movie</a>
            <form className="search-form">
                <input
                    type="text"
                    placeholder="search for movies..."
                    required

                />
            </form>
            
        </nav>
    );
};

export default Header;