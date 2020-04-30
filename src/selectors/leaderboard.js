export const getTopTen = (leaderboardData) => leaderboardData.slice(0, 10);

export const inTopTen = (leaderboardData, score) => {
    if (leaderboardData.length === 0) {
        return false;
    }
    const topTen = getTopTen(leaderboardData);
    return score > topTen[topTen.length - 1].score;
};