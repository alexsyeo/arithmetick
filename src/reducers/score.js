export default (state = { value: 0, posted: false}, action) => {
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
        default:
            return state;
    }
};