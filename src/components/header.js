import React from 'react';

const Header = () => {
    return (
        <nav className="navigation-bar">
            <a className="navigation-bar-item-logo" href="/home"> CC<span> 🎬</span> </a>
            <a className="navigation-bar-item" href="/popular-games">Home</a>
            <a className="navigation-bar-item" href="/popular-games">TV Serials</a>
            <a className="navigation-bar-item" href="/popular-games">Movies</a>
            <a className="navigation-bar-item" href="/popular-games">Popular</a>
            <a className="navigation-bar-item" href="/popular-games">My List</a>
            {/*<a className="navigation-bar-item" href="/my-games">my games</a>*/}
            <div className="search-box">
                <button className="btn-search">
                    {/*<i className="fas fa-search"></i>*/}
                    <div className="gg-search_icon">
                        <i className="gg-search"></i>
                    </div>

                </button>
                <input type="text" className="input-search" placeholder="Type to Search..."/>
            </div>


        </nav>
)};


export default Header;


    {/*<div className="search-box">*/
    }
    {/*    <button className="btn-search"><i className="fas fa-search"><i/><button/>*/
    }
    {/*    <input type="text" className="input-search" placeholder="Type to Search...">*/
    }
    {/*<div/>*/
    }
    {/*<form className="search-form">*/
    }
    {/*    <input*/
    }
    {/*        type="text"*/
    }
    {/*        placeholder="search for movies..."*/
    }
    {/*        required*/
    }

    {/*    />*/
    }
    {/*</form>*/
    }
    {/*<a className="navigation-bar-item" href="/add-game">+</a>*/
    }
