import React, { useState } from 'react';
import './signup.css';
import axios from 'axios';

const Signup = () => {
    // State to store form values
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        // Check if passwords match
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        // Create a data object to send to the backend
        const signupData = {
            name,
            email,
            password,
        };

        // Send POST request to the backend
        axios.post('http://localhost:3001/signup', signupData)
            .then((response) => {
                console.log('Signup successful:', response.data);
                // Handle successful signup (e.g., redirect to login or dashboard)
            })
            .catch((err) => {
                setError('Signup failed. Please try again.');
                console.error('Error:', err);
            });
    };

    return (
        <div className='signup-page'>
            <div className='signup-container'>
                <h1>Create an Account</h1>
                <p>Fill in the form below to sign up.</p>
                {error && <p className='error-message'>{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className='input-group'>
                        <label htmlFor='name'>Name</label>
                        <input
                            type='text'
                            id='name'
                            name='name'
                            placeholder='Enter your full name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className='input-group'>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            placeholder='Enter your email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className='input-group'>
                        <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            id='password'
                            name='password'
                            placeholder='Enter your password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className='input-group'>
                        <label htmlFor='confirm-password'>Confirm Password</label>
                        <input
                            type='password'
                            id='confirm-password'
                            name='confirm-password'
                            placeholder='Confirm your password'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type='submit'>Sign Up</button>
                    <p className='login-link'>
                        Already have an account? <a href='/login'>Login</a>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Signup;
