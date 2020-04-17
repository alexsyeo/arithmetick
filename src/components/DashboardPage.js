import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import UserStatistics from '../components/UserStatistics';
import { startSignInAnonymous } from '../actions/auth';
import { loggedIn } from '../selectors/auth';

const DashboardPage = ({ loggedIn, startSignInAnonymous, uid, username }) => {
    useEffect(() => {
        if (!uid) {
            startSignInAnonymous()
        }
    }, []);
    return (
        <div>
            <h1>{username}</h1>
            <Link className="button" to="/play">Play</Link>
            {loggedIn ? (
                <UserStatistics />
            ) : (
                <h2>Log in to track your statistics and get on the leaderboard!</h2>
            )}
        </div>
    );
};

const mapStateToProps = (state) => {
    const username = state.auth.username;
    return {
        loggedIn: loggedIn(state.auth.username),
        uid: state.auth.uid,
        username
    };
}

const mapDispatchToProps = (dispatch) => ({
    startSignInAnonymous: () => dispatch(startSignInAnonymous())
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);