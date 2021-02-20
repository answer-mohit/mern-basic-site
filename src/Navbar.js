import React from 'react'
import {NavLink} from 'react-router-dom';
import logo from './logo_size.jpg';
import "./navbar.css";
function Navbar() {
    return (
        <div className="nav">
        
            <NavLink exact activeClassName="link" to="/" className="text">home</NavLink>
            <NavLink exact activeClassName="link" to="/about" className="text">about</NavLink>
            <NavLink exact activeClassName="link" to="/services" className="text">services</NavLink> 
            <NavLink exact activeClassName="link" to="/contact" className="text">Contact</NavLink>
            

        </div>
    )
}

export default Navbar
