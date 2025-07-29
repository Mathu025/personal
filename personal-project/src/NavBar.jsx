import React from 'react'
import { NavLink } from 'react-router-dom'
import "./NavBar.css"

const NavBar = () => {
    return (
    <nav className="Nav">
        <h1 className="header">GAMES COLLECTION</h1>
        <div className="Bar">
        <NavLink to="/" className="one">Home</NavLink>
        <NavLink to="/new" className="one">Add New Game</NavLink>
        <NavLink to="/coming" className="one">Coming Soon</NavLink>
        </div>
        
    </nav>
)
}

export default NavBar