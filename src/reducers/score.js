const value = 0;
const posted = false;
const incrementValue = 1;

export default (state = { value, posted, incrementValue }, action) => {
    switch (action.type) {
        case 'INCREMENT_SCORE':
            return {
                ...state,
                value: state.value + state.incrementValue
            };
        case 'SET_INCREMENT_VALUE':
            return {
                ...state,
                incrementValue: action.incrementValue
            };
        case 'POST_SCORE':
            return {
                ...state,
                posted: true
            };
        case 'RESET_SCORE':
            return {
                incrementValue,
                posted,
                value
            };
        default:
            return state;
    }
};