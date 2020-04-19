import database from '../firebase/firebase';
import moment from 'moment';

export const incrementScore = () => ({
    type: 'INCREMENT_SCORE'
});

export const setIncrementValue = (incrementValue) => ({
    type: 'SET_INCREMENT_VALUE',
    incrementValue
});

export const postScore = () => ({
    type: 'POST_SCORE'
});

export const startPostScore = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const { value, posted } = getState().score;
        if (!posted) {
            const scoreObject = {
                value,
                timestamp: moment().format()
            };
            return database.ref(`users/${uid}/scores`).push(scoreObject).then(() => {
                dispatch(postScore());
            });
        }
    };
};

export const resetScoreState = () => ({
    type: 'RESET_SCORE'
});
