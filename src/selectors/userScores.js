import { objectIsEmpty, reduceObjectValues } from '../utility/obj';
import moment from 'moment';

const numberOfScores = (scores) => Object.keys(scores).length;

export const averageScore = (scores) => objectIsEmpty(scores) ? 0 : (reduceObjectValues(scores, (a, { value }) => a + value, 0) / numberOfScores(scores)).toFixed(2);

// Returns the (up to) past ten scores, sorted by date (descending order).
export const recentScores = (scores) => {
    if (scores) {
        return Object.values(scores).sort((scoreOne, scoreTwo) => moment(scoreTwo.timestamp).valueOf() - moment(scoreOne.timestamp).valueOf()).slice(0, 10);
    };
};

export const recentScoresAverage = (scores) => {
    if (!objectIsEmpty(scores)) {
        const recentScoresArray = recentScores(scores);
        return (recentScoresArray.reduce((a, { value }) => a + value, 0) / recentScoresArray.length).toFixed(2);
    }
};

export const atLeastOneScore = (scores) => scores && numberOfScores(scores) > 0;

export const atLeastTenScores = (scores) => scores && numberOfScores(scores) >= 10;