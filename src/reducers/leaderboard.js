export default (state = [], action) => {
    switch (action.type) {
        case 'SET_LEADERBOARD_DATA':
            return action.data;
        default:
            return state;
    }
};