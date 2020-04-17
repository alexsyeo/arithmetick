import { startPostScore } from '../actions/score';

export const loseLife = () => ({
    type: 'LOSE_LIFE'
});

export const resetLives = () => ({
    type: 'RESET_LIVES'
});

export const startLoseLife = () => {
    return (dispatch, getState) => {
        const numLives = getState().lives;
        if (numLives === 1) {
            dispatch(startPostScore());
        }
        dispatch(loseLife());
    };
};