import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import MathProblem from '../components/MathProblem';
import Score from '../components/Score';
import GameOverModal from './GameOverModal';
import Timer from '../components/Timer';
import { noLives } from '../selectors/lives';
import { outOfTime } from '../selectors/timer';
import { tick } from '../actions/timer';
import { resetGameState } from '../actions/game';
import { useInterval } from '../hooks/useInterval'
import { startSetLeaderboardData } from '../actions/leaderboard';

const Game = ({ gameOver, history, resetGameState, startSetLeaderboardData, tick }) => {
    const [shouldTick, setShouldTick] = useState(!gameOver);

    useInterval(() => {
        tick();
    }, shouldTick ? 1000 : null);

    useEffect(() => {
        resetGameState();
    }, []);

    useEffect(() => {
        if (!gameOver) {
            startSetLeaderboardData();
        }

        setShouldTick(!gameOver);
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
    score: state.score
});

const mapDispatchToProps = (dispatch) => ({
    resetGameState: () => dispatch(resetGameState()),
    startSetLeaderboardData: () => dispatch(startSetLeaderboardData()),
    tick: () => dispatch(tick())
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);