import { startFetchUsers } from '../actions/auth';

export const setLeaderboardData = (data) => ({
    type: 'SET_LEADERBOARD_DATA',
    data
});

export const startSetLeaderboardData = () => {
    return (dispatch) => {
        return dispatch(startFetchUsers()).then((snapshot) => {
            const usersObject = snapshot.val();
            const leaderboardData = [];
            for (let userId in usersObject) {
                const userObject = usersObject[userId];
                const userScoresObject = userObject.scores;
                for (let scoreObjectId in userScoresObject) {
                    const { value } = userScoresObject[scoreObjectId];
                    leaderboardData.push({
                        id: scoreObjectId,
                        username: userObject.username,
                        value
                    });
                }
            }
            leaderboardData.sort((a, b) => b.value - a.value);
            dispatch(setLeaderboardData(leaderboardData.slice(0, 10)));
        });
    };
};