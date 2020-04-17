const getRandomOperator = () => {
    const operators = ['+', '-', '*'];
    return operators[Math.floor(Math.random() * operators.length)];
}

const getRandomNumber = (numDigits) => Math.floor(Math.random() * Math.floor(Math.pow(10, numDigits)));

export const getRandomProblem = (numDigits, numElements) => {
    let problem = '';
    for (let i = 0; i < numElements - 1; i++) {
        problem = problem + `${getRandomNumber(numDigits)} ${getRandomOperator()} `;
    }
    problem = problem + `${getRandomNumber(numDigits)}`;
    return problem;
};