import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import problemReducer from '../reducers/problem';
import scoreReducer from '../reducers/score';
import livesReducer from '../reducers/lives';
import timerReducer from '../reducers/timer';
import leaderboardReducer from '../reducers/leaderboard';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            lives: livesReducer,
            problem: problemReducer,
            score: scoreReducer,
            timer: timerReducer,
            leaderboard: leaderboardReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
};