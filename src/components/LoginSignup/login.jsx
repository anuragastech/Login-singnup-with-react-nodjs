import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        // Send a POST request to the backend using Axios
        axios.post('http://your-backend-url/login', { email, password })
            .then((response) => {
                console.log('Login successful:', response.data);
                // Handle successful login (e.g., redirect or store token)
            })
            .catch((err) => {
                setError('Login failed. Please try again.');
                console.error('Error:', err);
            });
    };

    return (
        <div>
            <h1>Login</h1>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
            <p>
                If you're not a user, <Link to="/signup">Sign Up</Link>
            </p>
        </div>
    );
};

export default Login;
