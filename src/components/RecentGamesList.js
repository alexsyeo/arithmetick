import React from 'react';
import { connect } from 'react-redux';
import { recentScores } from '../selectors/userScores';
import ScoreListItem from '../components/ScoreListItem';

const RecentGamesList = ({ recentScores }) => {
    return (
        <div className="list-body">
            {recentScores && (
                <div>
                    <h3 className="list-header">Recent Scores</h3>
                    {recentScores.map((scoreObject) => <ScoreListItem key={scoreObject.timestamp} {...scoreObject}/>)}
                </div>
            )}
        </div>
    );
};

const mapStateToProps = (state) => ({
    recentScores: recentScores(state.userScores)
});

export default connect(mapStateToProps)(RecentGamesList);