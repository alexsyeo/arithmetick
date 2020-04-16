import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ loggedIn, startLogout }) => {
    const location = useLocation();

    console.log(location);
    console.log(loggedIn);

    return (
        <header className="header">
            <div className="content-container">
                <div className="header__content">
                    <Link className="header__title" to="/">
                        <h1>Arithmetick</h1>
                    </Link>
                    {loggedIn ? (
                        <button className="button button--link" onClick={startLogout}>Logout</button>
                    ) : location.pathname !== '/login' && (
                        <Link className="button button--link" to="/login">Login</Link>
                    )}
                </div>
            </div>
        </header>
    );
};

const mapStateToProps = (state) => ({
    loggedIn: !!state.auth.username
});

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);