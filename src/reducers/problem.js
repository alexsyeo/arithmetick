import { getRandomProblem } from '../utility/math';

export default (state = '', action) => {
    switch (action.type) {
        case 'RESET_PROBLEM':
            return getRandomProblem(action.numElements, action.numDigits);
        default:
            return state;
    }
};