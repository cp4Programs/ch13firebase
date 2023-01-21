import React, { useState } from 'react'
import './signup.css'
import { auth } from '../../config/firebaseConfig'
import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'



function SignUp() {
    let navigate = useNavigate()
    const [existingUser, setExistingUser] = useState(true)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(res => {
                navigate('/')
            })
            .catch(err => { alert(err.code) })
    }

    const handleSignup = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then(res => {
                console.log(res.user)
                updateProfile(auth.currentUser, { displayName: name })
            })
            .catch(err => { console.log(err) })

    }


    return (
        <div className="auth-container">
            {
                existingUser
                    ?
                    <form className="auth-form" onSubmit={handleLogin}>
                        <div className="form-group">
                            <h1>Login with your email</h1>
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                placeholder="Enter your email"
                                required
                            />
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                placeholder="Enter you password"
                                required
                            />
                        </div>
                        <button type="submit">Log In</button>
                        <div>
                            <p>Don't have an account?</p>
                            <span onClick={() => setExistingUser(false)} className="form-link">Sign up</span>
                        </div>
                    </form>
                    :
                    <form className="auth-form" onSubmit={handleSignup}>
                        <div className="form-group">
                            <h1>Sign Up</h1>
                            <input
                                onChange={(e) => setName(e.target.value)}
                                type="User Name"
                                placeholder="Create your user name"
                                required />
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                placeholder="Input your email"
                                required />
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                placeholder="Create your password"
                                required />
                        </div>
                        <button type="submit">Sign Up</button>
                        <div>
                            <p>Already have an account?</p>
                            <span onClick={() => setExistingUser(true)} className="form-link">Log in</span>
                        </div>
                    </form>
            }

        </div>
    )
}

export default SignUp