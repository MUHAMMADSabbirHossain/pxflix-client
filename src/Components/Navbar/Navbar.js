import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to="/">HOME</NavLink></li>
                        <li><NavLink to="/free-movies">FREE MOVIES</NavLink></li>
                        <li><NavLink to="/free-web-series">FREE WEB SERIES</NavLink></li>
                        <li><NavLink to="/free-tv-shows">FREE TV SHOWS</NavLink></li>
                        <li><NavLink to="/movie-hub">MOVIE HUB</NavLink></li>
                        <li><NavLink to="/account">ACCOUNT</NavLink></li>
                        <li><NavLink to="/login">Login</NavLink></li>
                        <li><NavLink to="/register">Register</NavLink></li>
                        {/* <li><a>Item 1</a></li>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li> */}
                    </ul>
                </div>
                <NavLink className="btn btn-ghost text-xl" to="/">Px FLIX</NavLink>
            </div>
            {/* <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Item 1</a></li>
                    <li>
                        <details>
                            <summary>Parent</summary>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a>Item 3</a></li>
                </ul>
            </div> */}
            <div className="navbar-end hidden lg:flex">
                <NavLink className="mx-4" to="/">Home</NavLink>
                <NavLink className="mx-4" to="/free-movies">FREE MOVIES</NavLink>
                <NavLink className="mx-4" to="/free-web-series">FREE WEB SERIES</NavLink>
                <NavLink className="mx-4" to="/free-tv-shows">FREE TV SHOWS</NavLink>
                <NavLink className="mx-4" to="/movie-hub">MOVIE HUB</NavLink>
                <NavLink className="mx-4" to="/account">ACCOUNT</NavLink>
                <NavLink className="btn mx-4" to="/login">Login</NavLink>
                <NavLink className="btn mx-4" to="/register">Register</NavLink>
            </div>
        </div >
    );
};

export default Navbar;