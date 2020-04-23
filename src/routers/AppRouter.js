import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
import ForgotPasswordPage from '../components/ForgotPasswordPage';
import Game from '../components/Game';
import Header from '../components/Header';
import LoginPage from '../components/LoginPage';
import NotFoundPage from '../components/NotFoundPage';
import SignupPage from '../components/SignupPage';
import PrivateRoute from '../routers/PrivateRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history} >
        <div>
            <Header history={history} />
            <Switch>
                <Route path="/" component={DashboardPage} exact={true} />
                <Route path="/login" component={LoginPage} />
                <Route path="/signup" component={SignupPage} />
                <Route path="/forgotpassword" component={ForgotPasswordPage} />
                <PrivateRoute path="/play" component={Game} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;