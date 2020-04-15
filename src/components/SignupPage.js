import React, { useState } from 'react';
import { connect } from 'react-redux';
import { startSignup, startSetUsername } from '../actions/auth';

// TODO:
// validate user input, and display error messages next to the input areas if applicable
// include back button

const SignupPage = ({ startSetUsername, startSignup }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        startSignup(email, password)
            .then(() => startSetUsername(username))
            .catch((error) => {
                const errorCode = error.code;
                let newErrorMessage = '';
                switch(errorCode) {
                    case 'auth/email-already-in-use':
                        newErrorMessage = 'There is already an account using this email address.';
                    case 'auth/invalid-email':
                        newErrorMessage = 'This is not a valid email address. Please use a valid email address.';
                    case 'auth/operation-not-allowed':
                        alert('email/password accounts are not currently enabled.');
                    case 'auth/weak-password':
                        newErrorMessage = 'The password was too weak. Please use a password containing at least six characters.';
                    default:
                        setErrorMessage(newErrorMessage);
                }
            }
        );
    };

    return (
        <form className="form" onSubmit={onSubmit}>
            <input
                autoFocus
                type="text"
                placeholder="Username"
                className="text-input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="text"
                placeholder="Email"
                className="text-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                className="text-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button
                className="button"
                disabled={!email || !password || !username}
            >
                Create Account
            </button>
            {errorMessage && <p className="form__error">{errorMessage}</p>}
        </form>
    );
};

const mapDispatchToProps = (dispatch) => ({
    startSignup: (email, password) => dispatch(startSignup(email, password)),
    startSetUsername: (username) => dispatch(startSetUsername(username))
});

export default connect(undefined, mapDispatchToProps)(SignupPage);