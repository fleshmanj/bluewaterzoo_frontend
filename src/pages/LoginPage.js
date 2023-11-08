import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from "../hooks/useUserContext";


const LoginPage = () => {
    const {dispatch} = useUserContext();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    const handleLogin = async (event) => {
        event.preventDefault(); // Prevent the default form submit action

        try {
            const response = await fetch('/users/login', { // Replace '/api/login' with your actual login endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log('Login Successful:', data);
            dispatch({type: 'LOGIN', payload: data.token});
            dispatch({type: 'SET_USER_ROLE', payload: username});

            // Redirect to the homepage on successful login
            navigate('/');
        } catch (error) {
            console.error('Login failed:', error);
            // Handle errors such as displaying a message to the user
        }
    };

    return (
        <div className="login-form">
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginPage;
