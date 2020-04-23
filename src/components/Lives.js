import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { resetLives } from '../actions/lives';

const Lives = ({ lives, resetLives }) => {
    useEffect(() => {
        resetLives();
    }, []);

    return (
        <h1>Lives: {lives}</h1>
    ); 
};

const mapStateToProps = (state) => ({
    lives: state.lives
});

const mapDispatchToProps = (dispatch) => ({
    resetLives: () => dispatch(resetLives)
})

export default connect(mapStateToProps, mapDispatchToProps)(Lives);