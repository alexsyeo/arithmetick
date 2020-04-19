import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { resetScoreState, setIncrementValue } from '../actions/score';
import { setNumDigits, setNumElements } from '../actions/problem';

const Score = ({ resetScoreState, scoreVal, setIncrementValue, setNumDigits, setNumElements }) => {
    useEffect(() => {
        resetScoreState();
    }, []);

    useEffect(() => {
        if (scoreVal === 5) {
            setIncrementValue(2);
            setNumDigits(2);
        } else if (scoreVal === 15) {
            setIncrementValue(3);
            setNumElements(3);
        } else if (scoreVal === 30) {
            setIncrementValue(5);
            setNumDigits(3);
        }
    }, [scoreVal]);
    
    return (
        <h1>Score: {scoreVal}</h1>
    );
}

const mapStateToProps = (state) => ({
    scoreVal: state.score.value
});

const mapDispatchToProps = (dispatch) => ({
    resetScoreState: () => dispatch(resetScoreState()),
    setIncrementValue: (incrementValue) => dispatch(setIncrementValue(incrementValue)),
    setNumDigits: (numDigits) => dispatch(setNumDigits(numDigits)),
    setNumElements: (numElements) => dispatch(setNumElements(numElements))
});

export default connect(mapStateToProps, mapDispatchToProps)(Score);