import React from 'react';
import './signup.css';

const Signup = () => {
    return (
        <div className='signup-page'>
            <div className='signup-container'>
                <h1>Create an Account</h1>
                <p>Fill in the form below to sign up.</p>
                <form>
                    <div className='input-group'>
                        <label htmlFor='name'>Name</label>
                        <input type='text' id='name' name='name' placeholder='Enter your full name' required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' name='email' placeholder='Enter your email' required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' name='password' placeholder='Enter your password' required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor='confirm-password'>Confirm Password</label>
                        <input type='password' id='confirm-password' name='confirm-password' placeholder='Confirm your password' required />
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
