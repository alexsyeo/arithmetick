import database from '../firebase/firebase';

export const setLeaderboardData = (data) => ({
    type: 'SET_LEADERBOARD_DATA',
    data
});

export const startSetLeaderboardData = () => {
    return (dispatch, getState) => {
        if (getState().leaderboard.length === 0) {
            return database.ref('leaderboard').once('value', (snapshot) => {
                const leaderboardObject = snapshot.val();
                const leaderboardData = [];
                for (let leaderboardItemObjectId in leaderboardObject) {
                    const leaderboardItemObject = leaderboardObject[leaderboardItemObjectId];
                    leaderboardData.push(leaderboardItemObject);
                }
                leaderboardData.sort((a, b) => b.score - a.score);
                dispatch(setLeaderboardData(leaderboardData));
            });
        }
    };
};

export const startPostLeaderboardItemObject = (leaderboardItemObject) => {
    return () => database.ref('leaderboard').push(leaderboardItemObject);
};