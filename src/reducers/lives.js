export default (state = 3, action) => {
    switch (action.type) {
        case 'LOSE_LIFE':
            return state - 1;
        default:
            return state;
    }
};