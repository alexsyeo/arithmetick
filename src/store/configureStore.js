import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import problemReducer from '../reducers/problem';
import scoreReducer from '../reducers/score';
import livesReducer from '../reducers/lives';
import timerReducer from '../reducers/timer';
import userScoresReducer from '../reducers/userScores';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            auth: authReducer,
            lives: livesReducer,
            problem: problemReducer,
            score: scoreReducer,
            timer: timerReducer,
            userScores: userScoresReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
};