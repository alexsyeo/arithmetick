import database from '../firebase/firebase';

export const setUserScores = (scoresObject) => ({
    type: 'SET_USER_SCORES',
    scoresObject
});

export const startFetchUserScores = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/scores`).once('value', (snapshot) => {
            console.log(snapshot.val());
            dispatch(setUserScores(snapshot.val()));
        });
    };
};