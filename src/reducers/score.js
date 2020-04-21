const value = 0;
const posted = false;

export default (state = { value, posted }, action) => {
    switch (action.type) {
        case 'INCREMENT_SCORE':
            return {
                ...state,
                value: state.value + action.incrementValue
            };
        case 'POST_SCORE':
            return {
                ...state,
                posted: true
            };
        case 'RESET_SCORE':
            return {
                posted,
                value
            };
        default:
            return state;
    }
};