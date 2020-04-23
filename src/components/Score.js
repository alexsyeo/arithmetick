import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { resetScoreState } from '../actions/score';
import { setLevelTwo, setLevelThree, setLevelFour } from '../actions/problem';

const Score = ({ resetScoreState, scoreVal, setLevelFour, setLevelThree, setLevelTwo }) => {
    useEffect(() => {
        resetScoreState();
    }, []);

    useEffect(() => {
        if (scoreVal === 5) {
            setLevelTwo();
        } else if (scoreVal === 15) {
            setLevelThree();
        } else if (scoreVal === 40) {
            setLevelFour();
        }
    }, [scoreVal]);
    
    return (
        <h1 className="big-font">Score: {scoreVal}</h1>
    );
}

const mapStateToProps = (state) => ({
    scoreVal: state.score.value
});

const mapDispatchToProps = (dispatch) => ({
    resetScoreState: () => dispatch(resetScoreState()),
    setLevelTwo: () => dispatch(setLevelTwo()),
    setLevelThree: () => dispatch(setLevelThree()),
    setLevelFour: () => dispatch(setLevelFour())
});

export default connect(mapStateToProps, mapDispatchToProps)(Score);