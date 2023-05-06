import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {
    console.log('IS AUTHENTICATED: ' + isAuthenticated);

    return (
        <Route {...rest} component={(props) => (
            isAuthenticated ? (
                <div>
                    <Component {...props} />
                </div>
            ) : (
                <Redirect to="/arithmetick" />
            )
        )} />
    );
}



const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.username
});

export default connect(mapStateToProps)(PrivateRoute);