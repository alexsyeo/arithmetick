import database from '../firebase/firebase';

export const incrementScore = (incrementValue) => ({
    type: 'INCREMENT_SCORE',
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
            return database.ref(`users/${uid}/scores`).push(value).then(() => {
                dispatch(postScore());
            });
        }
    };
};