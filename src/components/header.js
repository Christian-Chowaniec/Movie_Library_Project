import React from 'react';

const Header = () => {
    return (
        <nav className="navigation-bar">
            <a className="navigation-bar-item-logo" href="/home"> CC<span>GAME LIBRARY</span> </a>
            <a className="navigation-bar-item" href="/popular-games">popular games</a>
            {/*<a className="navigation-bar-item" href="/my-games">my games</a>*/}
            <a className="navigation-bar-item" href="/add-game">+ add game</a>
            <form className="search-form">
                <input
                    type="text"
                    placeholder="search for games..."
                    required

                />
            </form>
            
        </nav>
    );
};

export default Header;