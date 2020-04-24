import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { login, startFetchUsers, startSignup, startSetUsername } from '../actions/auth';
import { goBack } from '../utility/history';

const SignupPage = ({ history, login, startFetchUsers, startSetUsername, startSignup }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [userSnapshots, setUserSnapshots] = useState([]);

    const usernameExists = () => {
        let exists = false;
        userSnapshots.forEach((userSnapshot) => {
            if (userSnapshot.val().username === username) {
                exists = true;
            }
        })

        return exists;
    };

    useEffect(() => {
        startFetchUsers().then((userSnapshots) => { setUserSnapshots(userSnapshots) });
    }, []);

    useEffect(() => {
        if (usernameExists()) {
            const newErrorMessage = 'That username already exists.';
            setErrorMessage(newErrorMessage);
        } else {
            setErrorMessage('');
        }
    }, [username]);

    const onSubmit = (e) => {
        e.preventDefault();
        startSignup(email, password)
            .then(({ user }) => login(user.uid))
            .then(() => startSetUsername(username))
            .catch((error) => {
                const errorCode = error.code;
                let newErrorMessage = '';
                switch(errorCode) {
                    case 'auth/email-already-in-use':
                        newErrorMessage = 'There is already an account using this email address.';
                        break;
                    case 'auth/operation-not-allowed':
                        alert('Email/password accounts are not currently enabled.');
                        break;
                    case 'auth/invalid-email':
                        newErrorMessage = 'Invalid email address. Please use a valid email address.';
                        break;
                    case 'auth/weak-password':
                        newErrorMessage = 'The password was too weak. Please use a password containing at least six characters.';
                }
                setErrorMessage(newErrorMessage);
            }
        );
    };

    return (
        <div>
            <button className="button button--separated button__no-bottom" onClick={() => { goBack(history) }}>&#x2190;</button>
            <div className="centered-container">
                <form className="form" onSubmit={onSubmit}>
                    <input
                        autoFocus
                        type="text"
                        placeholder="Username"
                        className="text-input"
                        value={username}
                        onChange={(e) => {
                            const newVal = e.target.value.trim();
                            if (newVal.length < 20) {
                                setUsername(newVal);
                            }
                        }}
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
                        disabled={errorMessage || !email || !password || !username}
                    >
                        Create Account
                    </button>
                    {errorMessage && <p className="form__error">{errorMessage}</p>}
                </form>
            </div>
        </div>
    );
};
        
const mapDispatchToProps = (dispatch) => ({
    login: (uid) => dispatch(login(uid)),
    startFetchUsers: () => dispatch(startFetchUsers()),
    startSignup: (email, password) => dispatch(startSignup(email, password)),
    startSetUsername: (username) => dispatch(startSetUsername(username))
});

export default connect(undefined, mapDispatchToProps)(SignupPage);