import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import LeaderboardItem from './LeaderboardItem';
import { startSetLeaderboardData } from '../actions/leaderboard';
import { getTopTen } from '../selectors/leaderboard';

const Leaderboard = ({ leaderboardData, startSetLeaderboardData }) => {
    useEffect(() => {
        startSetLeaderboardData();
    }, []);

    return (
        <div className="list-body">
            {leaderboardData && (
                <div>
                    <h3 className="list-header">Leaderboard</h3>
                    {leaderboardData.map((leaderboardDataItem) => <LeaderboardItem key={leaderboardDataItem.id} {...leaderboardDataItem}/>)}
                </div>
            )}
        </div>
    );
};

const mapStateToProps = (state) => ({
    leaderboardData: getTopTen(state.leaderboard)
});

const mapDispatchToProps = (dispatch) => ({
    startSetLeaderboardData: () => dispatch(startSetLeaderboardData())
});

export default connect(mapStateToProps, mapDispatchToProps)(Leaderboard);