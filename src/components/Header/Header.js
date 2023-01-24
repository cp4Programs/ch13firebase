import React from 'react'
import './header.css'
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { auth } from '../../config/firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth'
import { signOut } from 'firebase/auth';

function Header({ categories }) {
    //categories coming from App.js//
    const [user] = useAuthState(auth)

    return (
        <div className="header-container">

            <Link to="/"><FaHome className="home-icon" /></Link>
            {
                user
                    ? <Link className="auth-link" to="/addarticle">Add Article</Link>
                    : null
            }

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
                    <Link className="auth-link" to={`/signup`}>Log In</Link>
            }


        </div>

    )
}

export default Header