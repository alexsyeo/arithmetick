import { getRandomProblem } from '../utility/math';

const numDigits = 1;
const numElements = 2;
const operators = ['+', '-', '*'];
const value = 1;
const modes = [{
    numDigits,
    numElements,
    operators,
    value
}];
const [problem] = getRandomProblem(modes);


export default (state = {
    modes,
    problem,
    value
}, action) => {
    switch (action.type) {
        case 'RESET_PROBLEM': {
            const [problem, value] = getRandomProblem(state.modes);
            return {
                ...state,
                problem,
                value
            };
        }
        case 'RESET_PROBLEM_STATE': {
            const [problem, value] = getRandomProblem(modes);
            return {
                modes,
                problem,
                value
            };
        }
        case 'SET_MODES': {
            return {
                ...state,
                modes: action.modes
            };
        }
        case 'PUSH_MODES': {
            return {
                ...state,
                modes: [...state.modes, ...action.modes]
            }
        }
        default:
            return state;
    }
};