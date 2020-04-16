import React from 'react'
import {Link} from 'react-router-dom'
import "./Navbar.css"

export default function Navbar() {
    return (
        <div className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Signup">SignUp</Link></li>
                <li><Link to="/Postings">Post a request</Link></li>
                <li><Link to="/Listings">Search</Link></li>
                <li><Link to="/Settings">Settings</Link></li>
                <li></li>
            </ul>
        </div>
    )
}
