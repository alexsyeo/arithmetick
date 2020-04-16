import { startPostScore } from '../actions/score';

export const loseLife = () => ({
    type: 'LOSE_LIFE'
});

export const startLostLife = () => {
    return (dispatch, getState) => {
        const numLives = getState().lives;
        if (numLives === 1) {
            dispatch(startPostScore());
        }
        dispatch(loseLife);
    };
};