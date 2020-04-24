// const numLives = 3;
const numLives = 1;

export default (state = numLives, action) => {
    switch (action.type) {
        case 'LOSE_LIFE':
            return state - 1;
        case 'RESET_LIVES':
            return numLives;
        default:
            return state;
    }
};