import React from 'react';
import { connect } from 'react-redux';
import MathProblem from '../components/MathProblem';
import Score from '../components/Score';
import Lives from '../components/Lives';
import GameOverModal from './GameOverModal';
import Timer from '../components/Timer';
import { noLives } from '../selectors/lives';
import { outOfTime } from '../selectors/timer';

const Game = ({ gameOver, history }) => (
    <div>
        <MathProblem />
        <Score />
        <Lives />
        <Timer />
        <GameOverModal gameOver={gameOver} history={history}/>
    </div>
);

const mapStateToProps = (state) => ({
    gameOver: noLives(state.lives) || outOfTime(state.timer)
});

export default connect(mapStateToProps)(Game);