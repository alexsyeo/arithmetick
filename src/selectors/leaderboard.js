export const getTopFive = (leaderboardData) => leaderboardData.slice(0, 5);

export const inTopFive = (leaderboardData, score) => {
    if (leaderboardData.length === 0) {
        return false;
    }
    const topFive = getTopFive(leaderboardData);
    return score > topFive[topFive.length - 1].score;
};