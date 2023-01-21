import React, { useState } from 'react'
import './signup.css'



function SignUp() {
    const [existingUser, setExistingUser] = useState(true)
    const [email, setEmail] = useState('')


    return (
        <div className="auth-container">
            {
                existingUser
                    ?
                    <form className="auth-form">
                        <div className="form-group">
                            <h1>Login with your email</h1>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                required
                            />
                            <input
                                type="password"
                                placeholder="Enter you password"
                                required
                            />
                        </div>
                        <div>
                            <p>Don't have an account?</p>
                            <span onClick={() => setExistingUser(false)} className="form-link">Sign up</span>
                        </div>
                    </form>
                    :
                    <form className="auth-form">
                        <div className="form-group">
                            <h1>Sign Up</h1>
                            <input
                                type="User Name"
                                placeholder="Create your user name"
                                required />
                            <input
                                type="password"
                                placeholder="Create your password"
                                required />
                        </div>
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