export default (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                uid: action.uid
            };
        case 'LOGOUT':
            return {};
        case 'SET_USERNAME':
            return {
                ...state,
                username: action.username
            };
        default:
            return state;
    }
};