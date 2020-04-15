import React from 'react';
import { connect } from 'react-redux';

const Score = (props) => (
    <h1>Score: {props.score}</h1>
);

const mapStateToProps = (state) => {
    return {
        score: state.score
    }
}

export default connect(mapStateToProps)(Score);