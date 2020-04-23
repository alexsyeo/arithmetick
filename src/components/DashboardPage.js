import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import UserStatistics from '../components/UserStatistics';
import { startSignInAnonymous } from '../actions/auth';

const DashboardPage = ({ startSignInAnonymous, uid, username }) => {
    useEffect(() => {
        if (!uid) {
            startSignInAnonymous()
        }
    }, []);
    return (
        <div className="container">
            <div className="content-container">
                <div className="column-container">
                    <h1>{username}</h1>
                    <Link className="button button--big" to="/play">Play</Link>
                </div>
                <UserStatistics />
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    const username = state.auth.username;
    return {
        uid: state.auth.uid,
        username
    };
}

const mapDispatchToProps = (dispatch) => ({
    startSignInAnonymous: () => dispatch(startSignInAnonymous())
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);