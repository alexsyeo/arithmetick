export const incrementScore = (incrementValue) => ({
    type: 'INCREMENT_SCORE',
    incrementValue
});

export const resetScoreState = () => ({
    type: 'RESET_SCORE'
});
