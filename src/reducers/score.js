const value = 0;

export default (state = value, action) => {
    switch (action.type) {
        case 'INCREMENT_SCORE':
            return state + action.incrementValue;
        case 'RESET_SCORE':
            return value;
        default:
            return state;
    }
};