import React from 'react';
import './login.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';

const Login = () => {
    return (

        <div className='login-page'>
            <div className='login-container'>
                <h1>Login</h1>
                <form>
                    
                  
                    <div className='input-group'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' name='email' required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' name='password' required />
                    </div>
                    <button type='submit'>Login</button>

                    <br/>
                    <br/>
                    if you are not a user !<Link style={{ textDecoration: "none" }} to="/signup"> signUp</Link>
                </form>
            </div>
        </div>
    );
}

export default Login;
