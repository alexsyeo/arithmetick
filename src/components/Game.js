import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import MathProblem from '../components/MathProblem';
import Score from '../components/Score';
import Lives from '../components/Lives';
import GameOverModal from './GameOverModal';
import Timer from '../components/Timer';
import { noLives } from '../selectors/lives';
import { outOfTime } from '../selectors/timer';
import { tick } from '../actions/timer';
import { startPostScore } from '../actions/score';
import { loggedIn } from '../selectors/auth';
import { resetGameState } from '../actions/game';

const Game = ({ gameOver, history, loggedIn, resetGameState, startPostScore, tick }) => {
    const [timerInterval, setTimerInterval] = useState('');

    const tickIfAlive = () => {
        if (!gameOver) {
            tick();
        }
    };

    useEffect(() => {
        resetGameState();
        return () => {
            clearInterval(timerInterval);
        };
    }, []);

    useEffect(() => {
        if (gameOver) {
            clearInterval(timerInterval);
            if (loggedIn) {
                startPostScore();
            }
        } else {
            setTimerInterval(setInterval(tickIfAlive, 1000));
        }
    }, [gameOver]);

    return (
        <div>
            <div className="container">
                <Score />
                <Lives />
                <Timer />
            </div>
            <div className="centered-container">
                <MathProblem />
            </div>
            <GameOverModal gameOver={gameOver} history={history}/>
        </div>
    );
};

const mapStateToProps = (state) => ({
    gameOver: noLives(state.lives) || outOfTime(state.timer),
    loggedIn: loggedIn(state.auth.username)
});

const mapDispatchToProps = (dispatch) => ({
    resetGameState: () => dispatch(resetGameState()),
    startPostScore: () => dispatch(startPostScore()),
    tick: () => dispatch(tick())
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);