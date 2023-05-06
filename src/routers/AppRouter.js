import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
import Game from '../components/Game';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history} >
        <div>
            <Header history={history} />
            <Switch>
                <Route path="/arithmetick/" component={DashboardPage} exact={true} />
                <Route path="/arithmetick/play" component={Game} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;