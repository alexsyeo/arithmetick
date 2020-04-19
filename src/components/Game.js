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
    const [timerID, setTimerID] = useState('');

    useEffect(() => {
        setTimerID(setInterval(() => {
            tick();
        }, 1000));
    }, []);

    useEffect(() => {
        if (gameOver) {
            clearInterval(timerID);
            if (loggedIn) {
                startPostScore();
            }
        }
    }, [gameOver]);

    return (
        <div>
            <MathProblem />
            <Score />
            <Lives />
            <Timer />
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