import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import LeaderboardItem from './LeaderboardItem';
import { startSetLeaderboardData } from '../actions/leaderboard';
import { getTopFive } from '../selectors/leaderboard';

const Leaderboard = ({ leaderboardData, startSetLeaderboardData }) => {
    useEffect(() => {
        startSetLeaderboardData();
    }, []);

    return (
        <div className="list-body">
            {leaderboardData && (
                <div>
                    <h3 className="list-header">Leaderboard</h3>
                    {leaderboardData.map((leaderboardDataItem, index) => <LeaderboardItem key={index} index={index} {...leaderboardDataItem}/>)}
                </div>
            )}
        </div>
    );
};

const mapStateToProps = (state) => ({
    leaderboardData: getTopFive(state.leaderboard)
});

const mapDispatchToProps = (dispatch) => ({
    startSetLeaderboardData: () => dispatch(startSetLeaderboardData())
});

export default connect(mapStateToProps, mapDispatchToProps)(Leaderboard);