import { getRandomElement } from '../utility/array';
import { dispatchSetIncrementValue } from '../actions/score';

const getRandomNumber = (numDigits) => Math.floor(Math.random() * Math.floor(Math.pow(10, numDigits)));

export const getRandomProblem = (modes) => {
    let problem = '';
    const { numDigits, numElements, operators, value } = getRandomElement(modes);

    for (let i = 0; i < numElements - 1; i++) {
        problem = problem + `${getRandomNumber(numDigits)} ${getRandomElement(operators)} `;
    }
    problem = problem + `${getRandomNumber(numDigits)}`;
    return [problem, value];
};