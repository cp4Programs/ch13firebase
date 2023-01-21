import React from 'react'
import './header.css'
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Header() {

    const categories = ["Health", "Food", "Travel", "Technology"];

    return (
        <div className="header-container">
            <Link to="/"><FaHome className="home-icon" /></Link>
            {
                categories.map(item => {
                    return <Link key={item} className="nav-link" to={`/category/${item}`}>{item}</Link>
                })
            }
            <Link className="auth-link" to={`/signup`}>Log In</Link>
        </div>

    )
}

export default Header