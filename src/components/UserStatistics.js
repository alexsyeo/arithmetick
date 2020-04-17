import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { startFetchUserScores } from '../actions/userScores';
import { averageScore } from '../selectors/userScores';

const UserStatistics = ({ averageScore, startFetchUserScores }) => {
    useEffect(() => {
        startFetchUserScores();
    }, []);

    return (
        <div>
            <h2>Average Score: {averageScore}</h2>
        </div>
    );
};

const mapStateToProps = (state) => ({
    averageScore: averageScore(state.userScores)
});

const mapDispatchToProps = (dispatch) => ({
    startFetchUserScores: () => dispatch(startFetchUserScores())
})

export default connect(mapStateToProps, mapDispatchToProps)(UserStatistics);