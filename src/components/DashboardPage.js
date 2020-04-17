import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import UserStatistics from '../components/UserStatistics';
import { startSignInAnonymous } from '../actions/auth';
import { loggedIn } from '../selectors/auth';

const DashboardPage = ({ loggedIn, startSignInAnonymous, uid }) => {
    useEffect(() => {
        if (!uid) {
            startSignInAnonymous()
        }
    }, []);
    return (
        <div>
            Dashboard content.
            <Link className="button" to="/play">Play</Link>
            {loggedIn && <UserStatistics />}
        </div>
    );
};

const mapStateToProps = (state) => ({
    uid: state.auth.uid,
    loggedIn: loggedIn(state.auth.username)
});

const mapDispatchToProps = (dispatch) => ({
    startSignInAnonymous: () => dispatch(startSignInAnonymous())
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);