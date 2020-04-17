import React from 'react';
import { connect } from 'react-redux';
import { recentScores } from '../selectors/userScores';
import RecentGamesListItem from '../components/RecentGamesListItem';

const RecentGamesList = ({ recentScores }) => {
    return (
        <div className="list-body">
            {recentScores && (
                <div>
                    <h2>Recent Scores:</h2>
                    {recentScores.map((scoreObject) => <RecentGamesListItem key={scoreObject.timestamp} {...scoreObject}/>)}
                </div>
            )}
        </div>
    );
};

const mapStateToProps = (state) => ({
    recentScores: recentScores(state.userScores)
});

export default connect(mapStateToProps)(RecentGamesList);