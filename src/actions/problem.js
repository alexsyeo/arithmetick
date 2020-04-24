export const resetProblem = () => ({
    type: 'RESET_PROBLEM'
});

export const resetProblemState = () => ({
    type: 'RESET_PROBLEM_STATE'
});

const setModes = (modes) => ({
    type: 'SET_MODES',
    modes
});

const pushModes = (modes) => ({
    type: 'PUSH_MODES',
    modes
});

export const setLevelTwo = () => {
    return (dispatch) => {
        const numElements = 2;
        const numDigits = 2;
        const operators = ['+', '-'];
        const value = 1;
        // const value = 2;
        const modes = [{
            numElements,
            numDigits,
            operators,
            value
        }];
        dispatch(setModes(modes));
    };
};

export const setLevelThree = () => {
    return (dispatch) => {
        const operators = ['+', '-'];
        const value = 4;
        const modes = [{
            numElements: 3,
            numDigits: 2,
            operators,
            value
        }, {
            numElements: 2,
            numDigits: 3,
            operators,
            value
        }];
        dispatch(pushModes(modes));
    };
};

export const setLevelFour = () => {
    return (dispatch) => {
        const numElements = 2;
        const numDigits = 2;
        const operators = ['*'];
        const value = 7;
        const modes = [{
            numElements,
            numDigits,
            operators,
            value
        }];
        dispatch(pushModes(modes));
    };
};