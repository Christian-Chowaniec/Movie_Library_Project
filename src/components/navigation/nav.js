import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "./search-bar";
// import "./NavBar.css";

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

                        {/*CodeBucks*/}
                        {/*<i className="fas fa-code"></i>*/}
                    </NavLink>

                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/tv-series"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                TV Series
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/movies"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Movies
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/popular"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Popular
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/my_list"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                My List
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/search"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}

                            >
                                <i className="fas fa-search"></i>
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
// import React , {useEffect} from 'react'
// // import './Navbar.css';
// import { NavLink } from 'react-router-dom';
// import $ from 'jquery';
//
// const Navbar = () => {
//
//     function animation(){
//         var tabsNewAnim = $('#navbarSupportedContent');
//         var activeItemNewAnim = tabsNewAnim.find('.active');
//         var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
//         var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
//         var itemPosNewAnimTop = activeItemNewAnim.position();
//         var itemPosNewAnimLeft = activeItemNewAnim.position();
//         $(".hori-selector").css({
//             "top":itemPosNewAnimTop.top + "px",
//             "left":itemPosNewAnimLeft.left + "px",
//             "height": activeWidthNewAnimHeight + "px",
//             "width": activeWidthNewAnimWidth + "px"
//         });
//         $("#navbarSupportedContent").on("click","li",function(e){
//             $('#navbarSupportedContent ul li').removeClass("active");
//             $(this).addClass('active');
//             var activeWidthNewAnimHeight = $(this).innerHeight();
//             var activeWidthNewAnimWidth = $(this).innerWidth();
//             var itemPosNewAnimTop = $(this).position();
//             var itemPosNewAnimLeft = $(this).position();
//             $(".hori-selector").css({
//                 "top":itemPosNewAnimTop.top + "px",
//                 "left":itemPosNewAnimLeft.left + "px",
//                 "height": activeWidthNewAnimHeight + "px",
//                 "width": activeWidthNewAnimWidth + "px"
//             });
//         });
//     }
//
//     useEffect(() => {
//
//         animation();
//         $(window).on('resize', function(){
//             setTimeout(function(){ animation(); }, 500);
//         });
//
//     }, []);
//
//     return (
//         <nav className="navbar navbar-expand-lg navbar-mainbg">
//
//             <NavLink className="navbar-brand navbar-logo" to="/" exact>
//                 Web Solutions
//             </NavLink>
//
//
//             <button
//                 className="navbar-toggler"
//                 onClick={ function(){
//                     setTimeout(function(){ animation(); });
//                 }}
//                 type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                 <i className="fas fa-bars text-white"></i>
//             </button>
//
//             <div
//                 className="collapse navbar-collapse" id="navbarSupportedContent">
//                 <ul className="navbar-nav ml-auto">
//
//                     <div className="hori-selector">
//                         <div className="left"></div>
//                         <div className="right"></div>
//                     </div>
//
//                     <li className="nav-item active">
//                         <NavLink className="nav-link" to="/" exact>
//                             <i
//                                 className="fas fa-tachometer-alt">
//                             </i>Home
//                         </NavLink>
//                     </li>
//
//                     <li className="nav-item">
//                         <NavLink className="nav-link" to="/about" exact>
//                             <i
//                                 className="far fa-address-book">
//                             </i>About
//                         </NavLink>
//                     </li>
//
//                     <li className="nav-item">
//                         <NavLink className="nav-link" to="/service" exact>
//                             <i
//                                 className="far fa-clone">
//                             </i>Services
//                         </NavLink>
//                     </li>
//                     <li className="nav-item">
//                         <NavLink className="nav-link" to="/testimonial" exact>
//                             <i
//                                 className="far fa-chart-bar">
//                             </i>Testimonial
//                         </NavLink>
//                     </li>
//                     <li className="nav-item">
//                         <NavLink className="nav-link" to="/contact" exact>
//                             <i
//                                 className="far fa-copy">
//                             </i>Contact Us
//                         </NavLink>
//                     </li>
//                 </ul>
//             </div>
//         </nav>
//     )
// }
// export default Navbar;


// // import React from 'react';
// // import {Link} from "react-router-dom";
// // import SearchBar from "./search-bar";
//
// import React from 'react';
// import {
//     Nav,
//     NavLink,
//     Bars,
//     NavMenu,
//     NavBtn,
//     NavBtnLink
// } from './NavbarElements';
// import SearchBar from "./search-bar";
//
//
// // import React, {Component} from 'react';
// // import React from 'react';
//
// const Navi = () => {
//     return (
//         <>
//             <Nav>
//                 <NavLink to='/'>
//                     {/*<img src={require('../../images/logo.svg')} alt='logo' />*/}
//                 </NavLink>
//                 <Bars />
//                 <NavMenu>
//                     <NavLink to='/about' activeStyle>
//                         About
//                     </NavLink>
//                     <NavLink to='/services' activeStyle>
//                         Services
//                     </NavLink>
//                     <NavLink to='/contact-us' activeStyle>
//                         Contact Us
//                     </NavLink>
//                     <NavLink to='/sign-up' activeStyle>
//                         Sign Up
//                     </NavLink>
//                     {/* Second Nav */}
//                     {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
//                 </NavMenu>
//                 <NavBtn>
//                     <NavBtnLink to='/signin'>Sign In</NavBtnLink>
//                 </NavBtn>
//             </Nav>
//         </>
//     );
// };
//
// export default Navi;


// <NavLink to='/' activeStyle>
//     <li className="navigation-bar-item-logo">CC<span> 🎬</span></li>
// </NavLink>
// <NavLink to='/' activeStyle>
//     <li className="navigation-bar-item">Home</li>
// </NavLink>
// <NavLink to='/tv-serials' activeStyle>
//     <li className="navigation-bar-item">TV Series</li>
// </NavLink>
// <NavLink to='/movies' activeStyle>
//     <li className="navigation-bar-item">Movies</li>
// </NavLink>
//
// <NavLink to='/popular' activeStyle>
//     <li className="navigation-bar-item">Popular</li>
// </NavLink>
// <NavLink to='/my-list' activeStyle>
//     <li className="navigation-bar-item">My List</li>
// </NavLink>
// <NavLink to='/search' activeStyle>
//     <SearchBar/>
// </NavLink>

///////////////////////////////

//
// <div className="containerrr">
//     <span className="logo">CHCH</span>
//     <input className="burger" type="checkbox" id="burger-input"/>
//
//     <label id="burger-icon" htmlFor="burger-input">
//         <i className="fa fa-bars menu-open" aria-hidden="true"></i>
//         <i className="fa fa-times menu-close" aria-hidden="true"></i>
//
//         <link rel="stylesheet"
//               href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
//               integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
//               crossOrigin="anonymous" referrerPolicy="no-referrer"/>
//     </label>
//     <nav className="navigation">
//
//         <ul className="menu navigation-bar">
//             {/*<li className="menu__item ">WHY US</li>*/}
//             {/*<li className="menu__item">BENEFITS</li>*/}
//             {/*<li className="menu__item">PRICES</li>*/}
//             {/*<li className="menu__item">CONTACT</li>*/}
//
//
//             {/*<ul className={this.state.clicked ? 'navigation-bar-active' : 'navigation-bar'}>*/}
//             <Link to="/">
//                 <li className="navigation-bar-item-logo">CC<span> 🎬</span></li>
//             </Link>
//             <Link to="/">
//                 <li className="navigation-bar-item">Home</li>
//             </Link>
//
//             <Link to="/tv-serials">
//                 <li className="navigation-bar-item">TV Series</li>
//             </Link>
//
//             <Link to="/movies">
//                 <li className="navigation-bar-item">Movies</li>
//             </Link>
//
//             <Link to="/popular">
//                 <li className="navigation-bar-item">Popular</li>
//             </Link>
//
//             <Link to="/my-list">
//                 <li className="navigation-bar-item">My List</li>
//             </Link>
//
//             <Link to="/search">
//                 <SearchBar/>
//             </Link>
//
//         </ul>
//     </nav>
// </div>














///////////////////////////


// class Nav extends Component {
//     state ={clicked:false}
//
//     handleClick = () =>{
//         this.setState({clicked:!this.state.clicked})
//
//     }
//     render() {
//
//         // <i className="gg-close"></i>
//         // <i className="gg-details-more"></i>
//         {/*<div className="menu-icon" onClick={this.handleClick}>*/}
//         {/*    <i className={this.state.clicked ? 'gg-close' : 'gg-details-more'}></i>*/}
//         {/*</div>*/}
//
//         return (
//             <>
//
//
//
//
//
//             </>
//         );
//     }
// }
// export default Nav;


// <nav>
//     <ul className="navigation-bar">
//         {/*<ul className={this.state.clicked ? 'navigation-bar-active' : 'navigation-bar'}>*/}
//         <Link to="/">
//             <li className="navigation-bar-item-logo">CC<span> 🎬</span></li>
//         </Link>
//
//         <Link to="/">
//             <li className="navigation-bar-item">Home</li>
//         </Link>
//
//         <Link to="/tv-serials">
//             <li className="navigation-bar-item">TV Series</li>
//         </Link>
//
//         <Link to="/movies">
//             <li className="navigation-bar-item">Movies</li>
//         </Link>
//
//         <Link to="/popular">
//             <li className="navigation-bar-item">Popular</li>
//         </Link>
//
//         <Link to="/my-list">
//             <li className="navigation-bar-item">My List</li>
//         </Link>
//
//         <Link to="/search">
//             <SearchBar/>
//         </Link>
//     </ul>
// </nav>


// const Nav = () => {
//     return (
//         <nav>
//                 <ul className="navigation-bar">
//
//                     <Link to="/">
//                         <li onClick={() => window.scroll(0, 0)} className="navigation-bar-item-logo">CC<span> 🎬</span></li>
//                     </Link>
//
//                     <Link to="/">
//                         <li className="navigation-bar-item">Home</li>
//                     </Link>
//
//                     <Link to="/tv-serials">
//                         <li className="navigation-bar-item">TV Series</li>
//                     </Link>
//
//                     <Link to="/movies">
//                         <li className="navigation-bar-item">Movies</li>
//                     </Link>
//
//                     <Link to="/popular">
//                         <li className="navigation-bar-item">Popular</li>
//                     </Link>
//
//                     <Link to="/my-list">
//                         <li className="navigation-bar-item">My List</li>
//                     </Link>
//
//                     <Link to="/search">
//                         <SearchBar/>
//                     </Link>
//                 </ul>
//         </nav>
//     );
// };
//
// export default Nav;
