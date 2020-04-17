import { resetScoreState } from './score';
import { resetTimer } from './timer';
import { resetLives } from './lives';
import { resetProblemState } from './problem';

export const resetGameState = () => {
    return (dispatch) => {
        dispatch(resetLives());
        dispatch(resetProblemState());
        dispatch(resetScoreState());
        dispatch(resetTimer());
    }
};