import { evaluate } from 'mathjs';

export default (problem) => evaluate(problem).toString(10);