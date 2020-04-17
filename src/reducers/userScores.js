const defaultUserScores = {};

export default (state = defaultUserScores, action) => {
    switch (action.type) {
        case 'SET_USER_SCORES':
            return action.scoresObject;
        default:
            return state;
    }
};