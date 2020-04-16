import React from 'react';
import { connect } from 'react-redux';

const Score = ({ scoreVal }) => (
    <h1>Score: {scoreVal}</h1>
);

const mapStateToProps = (state) => {
    return {
        scoreVal: state.score.value
    }
}

export default connect(mapStateToProps)(Score);