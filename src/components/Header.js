import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
import { loggedIn } from '../selectors/auth';

export const Header = ({ history, loggedIn, startLogout }) => {
    const location = useLocation();

    return (
        <header className="header">
            <div className="container">
                <div className="header__content">
                    <Link className="header__title" to="/">
                        <h1>Arithmetick</h1>
                    </Link>
                    {loggedIn ? (
                        <button
                            className="button button--link button__no-bottom"
                            onClick={() => {
                                history.push('/login');
                                startLogout();
                            }
                        }>
                            Logout
                        </button>
                    ) : location.pathname !== '/login' && (
                        <Link className="button button--link button__no-bottom" to="/login">Login</Link>
                    )}
                </div>
            </div>
        </header>
    );
};

const mapStateToProps = (state) => ({
    loggedIn: loggedIn(state.auth.username)
});

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);