import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
import ForgotPasswordPage from '../components/ForgotPasswordPage';
import Game from '../components/Game';
import Header from '../components/Header';
import LoginPage from '../components/LoginPage';
import NotFoundPage from '../components/NotFoundPage';
import PrivateRoute from '../routers/PrivateRoute';
import QuickPlay from '../components/QuickPlay';
import SignupPage from '../components/SignupPage';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history} >
        <div>
            <Header history={history} />
            <Switch>
                <Route path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/dashboard" component={DashboardPage} />
                <Route path="/forgotpassword" component={ForgotPasswordPage} />
                <PrivateRoute path="/play" component={Game} />
                <Route path="/quickplay" component={QuickPlay} />
                <Route path="/signup" component={SignupPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;