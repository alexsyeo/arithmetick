import database from '../firebase/firebase';
import moment from 'moment';

export const incrementScore = (incrementValue) => ({
    type: 'INCREMENT_SCORE',
    incrementValue
});

export const startPostScore = (score) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const scoreObject = {
            value: score,
            timestamp: moment().format()
        };
        return database.ref(`users/${uid}/scores`).push(scoreObject);
    };
};

export const resetScoreState = () => ({
    type: 'RESET_SCORE'
});
