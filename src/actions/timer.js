import { startPostScore } from '../actions/score';
import { outOfTime } from '../selectors/timer';

export const tick = () => ({
    type: 'TICK'
});

export const resetTimer = () => ({
    type: 'RESET_TIMER'
});

export const startTick = () => {
    return (dispatch, getState) => {
        const timer = getState().timer;
        if (outOfTime(timer)) {
            dispatch(startPostScore());
        }
        dispatch(tick());
    };
};