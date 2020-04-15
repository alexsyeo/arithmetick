import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const [error, setError] = useState('');

    // {this.state.error && <p className="form__error">{this.state.error}</p>}

    return (
        <form className="form" onSubmit={() => console.log('onSubmit')}>
            <input
                type="text"
                placeholder="Email/Username"
                autoFocus
                className="text-input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="text"
                placeholder="Password"
                className="text-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button className="button">Login</button>
            <button className="button">Go Anonymous</button>
            <Link className="button" to="/signup">Create Account</Link>
        </form>
    );
};

export default LoginPage;