import React, { useState } from 'react';

const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async (event) => {
        event.preventDefault(); // Prevent default form submit action

        try {
            const response = await fetch('/users/register', { // Replace with your registration endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log('Registration Successful:', data);

            // You can redirect the user to the login page or anywhere else
            // after successful registration.
        } catch (error) {
            console.error('Registration failed:', error);
            // Handle errors here such as showing an error message to the user
        }
    };

    return (
        <div className="register-form">
            <h1>Register</h1>
            <form onSubmit={handleRegister}>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default RegisterPage;
