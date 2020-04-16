import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';

const GameOverModal = ({ gameOver, history, scoreVal }) => (
    // Change below message and add links, one for routing back to /play, one for routing back to /
    // Make sure to reset state somewhere (doesn't have to be here), and also make sure you record the results before resetting the state
    <Modal
        isOpen={gameOver}
        contentLabel="Game Over"
        closeTimeoutMS={200}
        className="modal"
        ariaHideApp={false}
    >
        <h1 className="modal__title">Game Over!</h1>
        <h2>Your Final Score: {scoreVal}</h2>
        <button className="button" onClick={() => history.push('/play')}>Play Again</button>
        <button className="button" onClick={() => history.push('/')}>Exit</button>
    </Modal>
);


const mapStateToProps = (state) => ({
    scoreVal: state.score.value
});

export default connect(mapStateToProps)(GameOverModal);