import React, { Component } from 'react';
import {Link, NavLink} from 'react-router-dom';

const NavBar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Sentiment</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/my-score">My Score</NavLink>
                    </li>
                    {/* <li className="nav-item">
                        <NavLink className="nav-link" to="/monthly-report">Report</NavLink>
                    </li> */}
                    {/* <li className="nav-item">
                        <NavLink className="nav-link" to="/login">Login</NavLink>
                    </li> */}
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Report
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <NavLink className="dropdown-item" to="/monthly-report">Monthly Report</NavLink>
                            <NavLink class="dropdown-item" to="/weekly-report">Weekly Report</NavLink>
                            <NavLink class="dropdown-item" to="/daily-report">Daily Report</NavLink>
                            {/* <div class="dropdown-divider"></div> */}
                        </div>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
     );
}
 
export default NavBar;