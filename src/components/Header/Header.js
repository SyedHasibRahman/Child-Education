
import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.css";
import logo from '../../images/logo.png'


// Header Section 
const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "white",
        border: "2px solid white",
        borderRadius: "5px"

    }
    return (
        <div className="bg-warning">
            <div className="d-flex justify-content-between container p-3">
                <div>
                    <img className="logo" src={logo} alt="Logo" />
                </div>
                <nav className="">
                    <NavLink activeStyle={activeStyle} className="p-2 menu-item" to="/home">Home</NavLink>
                    <NavLink activeStyle={activeStyle} className="p-2 menu-item" to="/about">About US</NavLink>
                    <NavLink activeStyle={activeStyle} className="p-2 menu-item" to="/gallery">Gallery</NavLink>
                    <NavLink activeStyle={activeStyle} className="p-2 menu-item" to="/courses">Courses</NavLink>
                    <NavLink activeStyle={activeStyle} className="p-2 menu-item" to="/contactus">Contact US</NavLink>
                </nav>
            </div>
        </div>
    );
};

export default Header;