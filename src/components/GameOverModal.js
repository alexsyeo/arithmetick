import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { noLives } from '../selectors/lives';
import { outOfTime } from '../selectors/timer';

const GameOverModal = (props) => (
    // Change below message and add links, one for routing back to /play, one for routing back to /dashboard
    // Make sure to reset state somewhere (doesn't have to be here), and also make sure you record the results before resetting the state
    <Modal
        isOpen={props.gameOver}
        contentLabel="Game Over"
        closeTimeoutMS={200}
        className="modal"
        ariaHideApp={false}
    >
        <h1 className="modal__title">Game Over!</h1>
        <h2>Your Final Score: {props.score}</h2>
        <button className="button" onClick={() => props.history.push('/play')}>Play Again</button>
        <button className="button" onClick={() => props.history.push('/dashboard')}>Exit</button>
    </Modal>
);


const mapStateToProps = (state) => ({
    score: state.score,
    gameOver: noLives(state.lives) || outOfTime(state.timer)
});

export default connect(mapStateToProps)(GameOverModal);