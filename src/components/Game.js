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
import { useInterval } from '../hooks/useInterval'

const Game = ({ gameOver, history, loggedIn, resetGameState, score, startPostScore, tick }) => {
    const [shouldTick, setShouldTick] = useState(!gameOver);

    useInterval(() => {
        tick();
    }, shouldTick ? 1000 : null);

    useEffect(() => {
        resetGameState();
    }, []);

    useEffect(() => {
        setShouldTick(!gameOver);
        if (gameOver && loggedIn) {
            startPostScore(score);
        }
    }, [gameOver]);

    // <Lives /> used to be after <Score />
    return (
        <div>
            <div className="container">
                <Score />
                <Timer />
            </div>
            <div className="centered-container container-shift-up">
                <MathProblem />
            </div>
            <GameOverModal gameOver={gameOver} history={history}/>
        </div>
    );
};

const mapStateToProps = (state) => ({
    gameOver: noLives(state.lives) || outOfTime(state.timer),
    loggedIn: loggedIn(state.auth.username),
    score: state.score
});

const mapDispatchToProps = (dispatch) => ({
    resetGameState: () => dispatch(resetGameState()),
    startPostScore: (score) => dispatch(startPostScore(score)),
    tick: () => dispatch(tick())
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);