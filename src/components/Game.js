import React from 'react';
import MathProblem from '../components/MathProblem';
import Score from '../components/Score';
import Lives from '../components/Lives';
import GameOverModal from './GameOverModal';
import Timer from '../components/Timer';

const Game = (props) => (
    <div>
        <MathProblem />
        <Score />
        <Lives />
        <Timer />
        <GameOverModal history={props.history}/>
    </div>
);

export default Game;