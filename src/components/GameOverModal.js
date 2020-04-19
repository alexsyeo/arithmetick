import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { resetGameState } from '../actions/game';

const GameOverModal = ({ gameOver, history, resetGameState, scoreVal }) => {
    useEffect(() => {
        return () => resetGameState();
    }, [])
    
    return (
        <Modal
            isOpen={gameOver}
            contentLabel="Game Over"
            closeTimeoutMS={200}
            className="modal"
            ariaHideApp={false}
        >
            <h1 className="modal__title">Game Over!</h1>
            <h2>Your Final Score: {scoreVal}</h2>
            <button className="button" onClick={() => { history.push('/play'); }}>Play Again</button>
            <button className="button" onClick={() => history.push('/')}>Exit</button>
        </Modal>
    );
};

const mapStateToProps = (state) => ({
    scoreVal: state.score.value
});

const mapDispatchToProps = (dispatch) => ({
    resetGameState: () => dispatch(resetGameState())
});

export default connect(mapStateToProps, mapDispatchToProps)(GameOverModal);