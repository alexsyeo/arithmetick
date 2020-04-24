import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { startFetchUserScores } from '../actions/userScores';
import { loggedIn } from '../selectors/auth';
import { atLeastOneScore, atLeastTenScores, averageScore, recentScoresAverage } from '../selectors/userScores';
import RecentGamesList from '../components/RecentGamesList';
import Leaderboard from '../components/Leaderboard';

const UserStatistics = ({
    atLeastOneScore,
    atLeastTenScores,
    averageScoreAllTime,
    averageScoreRecent,
    loggedIn,
    startFetchUserScores
}) => {
    useEffect(() => {
        startFetchUserScores();
    }, []);

    return (
        <div className="centered-container container-shift-down">
            {loggedIn ? (
                atLeastOneScore ? (
                    <div>
                        <div className="container-shift-right">
                            <h2>Average Score (All time): {averageScoreAllTime}</h2>
                            {atLeastTenScores && (
                                <h2>Average Score (Past 10): {averageScoreRecent}</h2>
                            )}
                        </div>
                        <div className="content-container">
                            <div className="list-container">
                                <RecentGamesList />
                            </div>
                            <div className="list-container">
                                <Leaderboard />
                            </div>
                        </div>
                        
                    </div>
                ) : (
                    <div className="container-shift-right-more container-shift-down">
                        <div className="list-container">
                            <Leaderboard />
                        </div>
                    </div>
                )
            ) : (
                <div className="container-shift-right-more container-shift-down">
                    <h2>Log in to track your statistics and get on the leaderboard!</h2>
                    <div className="list-container">
                        <Leaderboard />
                    </div>
                </div>
            )}
        </div>
    );
};

const mapStateToProps = (state) => ({
    atLeastOneScore: atLeastOneScore(state.userScores),
    atLeastTenScores: atLeastTenScores(state.userScores),
    averageScoreAllTime: averageScore(state.userScores),
    averageScoreRecent: recentScoresAverage(state.userScores),
    loggedIn: loggedIn(state.auth.username)
});

const mapDispatchToProps = (dispatch) => ({
    startFetchUserScores: () => dispatch(startFetchUserScores())
})

export default connect(mapStateToProps, mapDispatchToProps)(UserStatistics);