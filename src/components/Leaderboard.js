import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ScoreListItem from '../components/ScoreListItem';
import { startSetLeaderboardData } from '../actions/leaderboard';

const Leaderboard = ({ leaderboardData, startSetLeaderboardData }) => {
    useEffect(() => {
        startSetLeaderboardData();
    }, []);

    // TODO: ADD KEY TO BELOW LIST ITEM

    return (
        <div className="list-body">
            {leaderboardData && (
                <div>
                    <h2>Leaderboard:</h2>
                    {leaderboardData.map((leaderboardDataItem) => <ScoreListItem key={leaderboardDataItem.id} {...leaderboardDataItem}/>)}
                </div>
            )}
        </div>
    );
};

const mapStateToProps = (state) => ({
    leaderboardData: state.leaderboard
});

const mapDispatchToProps = (dispatch) => ({
    startSetLeaderboardData: () => dispatch(startSetLeaderboardData())
});

export default connect(mapStateToProps, mapDispatchToProps)(Leaderboard);