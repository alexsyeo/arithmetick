import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { resetGameState } from '../actions/game';
import { startPostLeaderboardItemObject } from '../actions/leaderboard';
import { inTopFive } from '../selectors/leaderboard';

const GameOverModal = ({ gameOver, history, inTopFive, resetGameState, score, startPostLeaderboardItemObject }) => {
    const [username, setUsername] = useState('');
    const [posted, setPosted] = useState(false);
    
    useEffect(() => {
        return () => resetGameState();
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();
        startPostLeaderboardItemObject({
            score,
            username
        }).then(() => {
            setPosted(true);
        });
    };

    const onClick = () => {
        resetGameState();
    };
    
    return (
        <Modal
            isOpen={gameOver}
            contentLabel="Game Over"
            closeTimeoutMS={200}
            className="modal"
            ariaHideApp={false}
        >
            <h1 className="modal__title">Game Over!</h1>
            <h1>Your Final Score: {score}</h1>

            {inTopFive && !posted ? (
                <div>
                    <h2>You made it on the leaderboard!</h2>
                    <div className="centered-container">
                        <form className="form" onSubmit={onSubmit}>
                            <input
                                type="text"
                                placeholder="Username"
                                autoFocus
                                className="text-input"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <button className="button button--big button__no-bottom">Post Score</button>
                        </form>
                    </div>
                </div>
            ) : (
                <div>
                    <button className="button button--big button__no-bottom" onClick={onClick}>Play Again</button>
                    <button className="button button--big button__no-bottom" onClick={() => history.push('/arithmetick')}>Exit</button>
                </div>
            )}
        </Modal>
    );
};

const mapStateToProps = (state) => ({
    inTopFive: inTopFive(state.leaderboard, state.score),
    score: state.score
});

const mapDispatchToProps = (dispatch) => ({
    resetGameState: () => dispatch(resetGameState()),
    startPostLeaderboardItemObject: (leaderboardItemObject) => dispatch(startPostLeaderboardItemObject(leaderboardItemObject))
});

export default connect(mapStateToProps, mapDispatchToProps)(GameOverModal);