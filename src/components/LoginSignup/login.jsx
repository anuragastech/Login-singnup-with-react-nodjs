import React, { useState } from 'react';
import './login.css'; // Import the CSS file for styling
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import axios from 'axios';

const Login = () => {
    // State for storing email, password, and error
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    
    const navigate = useNavigate(); // Initialize useNavigate for redirection

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        setError(null); // Reset any previous errors

        try {
            // Send login data to backend
            const response = await axios.post('https://reactmy-node-server-ng3uc85ut-anurags-projects-4c990b3d.vercel.app/login', { email, password });
            console.log('Login successful:', response.data);
            navigate('/dashboard'); // Redirects to the '/dashboard' route (or any other page)

            // You can handle successful login here (e.g., store user token, etc.)
        } catch (err) {
            // Handle error responses from the backend
            if (err.response && err.response.data) {
                setError(err.response.data.message || 'Login failed. Please check your credentials.');
            } else {
                setError('Network error. Please try again later.');
            }
            console.error('Error:', err);
        }
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
