import React, { useState } from 'react';
import './login.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    // State for storing email, password, and error
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        // Reset any previous errors
        setError(null);

        // Send login data to backend
        axios.post('http://localhost:3001/login', { email, password })
            .then((response) => {
                console.log('Login successful:', response.data);
                // You can handle successful login here (e.g., store user token, redirect to dashboard, etc.)
            })
            .catch((err) => {
                setError('Login failed. Please check your credentials.');
                console.error('Error:', err);
            });
            
    };

    return (
        <div className='login-page'>
            <div className='login-container'>
                <h1>Login</h1>
                {error && <p className='error-message'>{error}</p>} {/* Display error if login fails */}
                <form onSubmit={handleSubmit}>
                    <div className='input-group'>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            value={email} // Bind email input to state
                            onChange={(e) => setEmail(e.target.value)} // Update state on input change
                            required
                        />
                    </div>
                    <div className='input-group'>
                        <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            id='password'
                            name='password'
                            value={password} // Bind password input to state
                            onChange={(e) => setPassword(e.target.value)} // Update state on input change
                            required
                        />
                    </div>
                    <button type='submit'>Login</button>
                    <br />
                    <br />
                    If you are not a user! <Link style={{ textDecoration: "none" }} to="/signup">Sign Up</Link>
                </form>
            </div>
        </div>
    );
};

export default Login;
