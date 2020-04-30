import database from '../firebase/firebase';

export const setLeaderboardData = (data) => ({
    type: 'SET_LEADERBOARD_DATA',
    data
});

export const startSetLeaderboardData = () => {
    return (dispatch) => {
        return database.ref('leaderboard').once('value', (snapshot) => {
            const leaderboardObject = snapshot.val();
            const leaderboardData = [];
            for (let leaderboardItemObjectId in leaderboardObject) {
                const leaderboardItemObject = leaderboardObject[leaderboardItemObjectId];
                leaderboardData.push({
                    id: leaderboardItemObjectId,
                    ...leaderboardItemObject
                });
            }
            leaderboardData.sort((a, b) => b.score - a.score);
            dispatch(setLeaderboardData(leaderboardData));
        })
    };
};