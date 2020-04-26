import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { login, startFetchUsers, startSetUsername, startSignInAnonymous } from '../actions/auth';
import { goBack } from '../utility/history';

const QuickPlay = ({ history, login, startFetchUsers, startSetUsername, startSignInAnonymous }) => {
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
        startSignInAnonymous().then((user) => {
            login(user.user.uid);
            startSetUsername(username);
            history.push('/dashboard');
        });
    };

    return (
        <div>
            <button className="button button--separated button__no-bottom" onClick={() => goBack(history)}>&#x2190;</button>
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
                    <button
                        className="button"
                        disabled={errorMessage || !username}
                    >
                        Choose Username
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
    startSetUsername: (username) => dispatch(startSetUsername(username)),
    startSignInAnonymous: () => dispatch(startSignInAnonymous())
});

export default connect(undefined, mapDispatchToProps)(QuickPlay);