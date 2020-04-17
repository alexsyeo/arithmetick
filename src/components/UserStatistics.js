import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { startFetchUserScores } from '../actions/userScores';
import { atLeastOneScore, averageScore, moreThanTenScores, recentScoresAverage } from '../selectors/userScores';
import RecentGamesList from '../components/RecentGamesList';

const UserStatistics = ({ atLeastOneScore, averageScoreAllTime, averageScoreRecent, moreThanTenScores, startFetchUserScores }) => {
    useEffect(() => {
        startFetchUserScores();
    }, []);

    return (
        <div className="content-container">
            {atLeastOneScore && (
                <div>
                    <h2>Average Score (All time): {averageScoreAllTime}</h2>
                    {moreThanTenScores && (
                        <h2>Average Score (Past 10): {averageScoreRecent}</h2>
                    )}
                </div>
            )}   
            
            <RecentGamesList />
        </div>
    );
};

const mapStateToProps = (state) => ({
    atLeastOneScore: atLeastOneScore(state.userScores),
    averageScoreAllTime: averageScore(state.userScores),
    averageScoreRecent: recentScoresAverage(state.userScores),
    moreThanTenScores: moreThanTenScores(state.userScores)
});

const mapDispatchToProps = (dispatch) => ({
    startFetchUserScores: () => dispatch(startFetchUserScores())
})

export default connect(mapStateToProps, mapDispatchToProps)(UserStatistics);