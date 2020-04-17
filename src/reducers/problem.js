import { getRandomProblem } from '../utility/math';

const numDigits = 1;
const numElements = 2;
const problem = getRandomProblem(numDigits, numElements);

export default (state = { numDigits, numElements, problem }, action) => {
    switch (action.type) {
        case 'RESET_PROBLEM':
            return {
                ...state,
                problem: getRandomProblem(state.numDigits, state.numElements)
            };
        case 'RESET_PROBLEM_STATE':
            return {
                numDigits,
                numElements,
                problem: getRandomProblem(numDigits, numElements)
            };
        case 'SET_NUM_DIGITS':
            return {
                ...state,
                numDigits: action.numDigits
            };
        case 'SET_NUM_ELEMENTS':
            return {
                ...state,
                numElements: action.numElements
            };
        default:
            return state;
    }
};