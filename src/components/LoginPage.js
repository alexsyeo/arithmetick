import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startSignIn, startSignInAnonymous } from '../actions/auth';

const LoginPage = ({ startSignIn, startSignInAnonymous }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        startSignIn(email, password)
            .catch((error) => {
                const errorCode = error.code;
                let newErrorMessage = '';
                switch(errorCode) {
                    case 'auth/invalid-email':
                        newErrorMessage = 'This is not a valid email address. Please use a valid email address.';
                        break;
                    case 'auth/user-disabled':
                        newErrorMessage = 'Your account is currently disabled.';
                        break;
                    case 'auth/user-not-found':
                        newErrorMessage = 'There is no account associated with this email address. If you would like to create an account, click on the button below.';
                        break;
                    case 'auth/wrong-password':
                        newErrorMessage = 'The password was incorrect.';
                }
                setErrorMessage(newErrorMessage);
            }
        );
    };

    return (
        <form className="form" onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Email Address"
                autoFocus
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
            <button className="button">Login</button>
            <Link className="button" to="/">Go Anonymous</Link>
            <Link className="button" to="/signup">Create Account</Link>
            {errorMessage && <p className="form__error">{errorMessage}</p>}
        </form>
    );
};

const mapDispatchToProps = (dispatch) => ({
    startSignIn: (email, password) => dispatch(startSignIn(email, password)),
    startSignInAnonymous: () => dispatch(startSignInAnonymous)
});

export default connect(undefined, mapDispatchToProps)(LoginPage);