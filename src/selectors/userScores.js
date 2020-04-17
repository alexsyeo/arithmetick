import { objectIsEmpty, reduceObjectValues } from '../utility/obj';

export const averageScore = (scores) => objectIsEmpty(scores) ? 0 : (reduceObjectValues(scores, (a, b) => a + b, 0) / numberOfScores(scores)).toFixed(2);

const numberOfScores = (scores) => Object.keys(scores).length;