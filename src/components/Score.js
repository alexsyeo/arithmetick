import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { resetScoreState } from '../actions/score';

const Score = ({ resetScoreState, scoreVal }) => {
    useEffect(() => {
        resetScoreState();
    }, []);
    
    return (
        <h1>Score: {scoreVal}</h1>
    );
}

const mapStateToProps = (state) => ({
    scoreVal: state.score.value
});

const mapDispatchToProps = (dispatch) => ({
    resetScoreState: () => dispatch(resetScoreState())
})

export default connect(mapStateToProps, mapDispatchToProps)(Score);