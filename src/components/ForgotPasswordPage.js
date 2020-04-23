import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { startSendPasswordResetEmail } from '../actions/auth';

const ForgotPasswordPage = ({ history, startSendPasswordResetEmail }) => {
    const [email, setEmail] = useState('');
    const [displayMessage, setDisplayMessage] = useState('');

    const goBack = () => {
        history.goBack();
    };

    const onSubmit = (e) => {
        e.preventDefault();
        startSendPasswordResetEmail(email)
            .then(() => {
                const displayMessage = 'A link to reset your password has been sent to your email address.';
                setDisplayMessage(displayMessage);
            });
    };

    return (
        <div className="column-container">
            <button className="button button--separated button__no-bottom" onClick={goBack}>&#x2190;</button>
            <div className="centered-container">
                <form className="form" onSubmit={onSubmit}>
                    <input
                        type="text"
                        placeholder="Email"
                        className="text-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button
                        className="button"
                        disabled={!email}
                    >
                        Submit
                    </button>
                    {displayMessage && <p className="form__error">{displayMessage}</p>}
                </form>
            </div>
        </div>
    );
};
        
const mapDispatchToProps = (dispatch) => ({
    startSendPasswordResetEmail: (email) => dispatch(startSendPasswordResetEmail(email))
});

export default connect(undefined, mapDispatchToProps)(ForgotPasswordPage);