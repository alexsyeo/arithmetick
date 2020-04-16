import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startSignInAnonymous } from '../actions/auth';

const DashboardPage = ({ startSignInAnonymous, uid }) => {
    useEffect(() => {
        if (!uid) {
            startSignInAnonymous()
        }
    }, []);
    return (
        <div>
            Dashboard content.
            <Link className="button" to="/play">Play</Link>
        </div>
    );
};

const mapStateToProps = (state) => ({
    uid: state.auth.uid
});

const mapDispatchToProps = (dispatch) => ({
    startSignInAnonymous: () => dispatch(startSignInAnonymous())
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);