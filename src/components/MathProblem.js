import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { resetProblem } from '../actions/problem';
import { incrementScore } from '../actions/score';
import { loseLife } from '../actions/lives';
import evaluateProblem from '../selectors/problem';
import formatProblem from '../utility/formatProblem';

const MathProblem = ({
    incrementScore,
    problem,
    resetProblem,
    loseLife
}) => {
    const [answer, setAnswer] = useState('');
    const [incrementValue, setIncrementValue] = useState(1); // move this to store (?)

    useEffect(() => {
        resetProblem();
        document.getElementById('userInput').addEventListener('keyup', (e) => {
            // 13 represents "Enter" key. This allows the user to press the enter key instead of clicking on the submit button.
            if (e.keyCode === 13) {
                e.preventDefault();
                document.getElementById('userSubmit').click();
            }
        });
    }, []);

    const onAnswerChange = (e) => {
        const answer = e.target.value;
        setAnswer(answer);
    };

    const onAnswerSubmit = () => {
        // Validate answer, and increment score if correct. Otherwise, lose life.
        if (answer === evaluateProblem(problem)) {
            incrementScore(incrementValue);
        } else {
            loseLife();
        }

        resetProblem();
        setAnswer('');
    };

    return (
        <div>
            <h1>{formatProblem(problem)}</h1>
            <input id="userInput"
                type="number"
                placeholder="Your Answer"
                className="text-input"
                value={answer}
                onChange={onAnswerChange}
            />
            <button id="userSubmit"
                className="button"
                disabled={!answer}
                onClick={onAnswerSubmit}
            >
                Enter
            </button>
        </div>
    );
}

const mapStateToProps = (state) => ({
    problem: state.problem.problem
});

const mapDispatchToProps = (dispatch) => {
    return {
        resetProblem: () => dispatch(resetProblem()),
        incrementScore: (incrementValue) => dispatch(incrementScore(incrementValue)),
        loseLife: () => dispatch(loseLife())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MathProblem);