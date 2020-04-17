import { evaluate } from 'mathjs';

export const evaluateProblem = (problem) => evaluate(problem).toString(10);

export const formatProblem = (problem) => problem.replace('*', 'x') + ' = ?';