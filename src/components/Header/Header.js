import React from 'react'
import './header.css'
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { auth } from '../../config/firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth'
import { signOut } from 'firebase/auth';

function Header() {
    const categories = ["Health", "Food", "Travel", "Technology"];
    const [user] = useAuthState(auth)

    return (
        <div className="header-container">
            <Link to="/"><FaHome className="home-icon" /></Link>
            <div className="categories-container">
                {
                    categories.map(item => {
                        return <Link key={item} className="nav-link" to={`/category/${item}`}>{item}</Link>
                    })
                }
            </div>
            {
                user
                    ?
                    <div>
                        <span className="username">{user?.displayName ? user?.displayName : user?.email}</span>
                        <button className="auth-link" onClick={() => signOut(auth)}>Log Out</button>
                    </div>
                    :
                    <Link className="auth-link" to={`/signup`}>Sign Up</Link>
            }


        </div>

    )
}

export default Header