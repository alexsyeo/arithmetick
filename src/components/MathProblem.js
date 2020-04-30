import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import { resetProblem } from '../actions/problem';
import { incrementScore } from '../actions/score';
import { loseLife } from '../actions/lives';
import { evaluateProblem, formatProblem } from '../selectors/problem';

const MathProblem = ({
    formattedProblem,
    incrementScore,
    incrementValue,
    loseLife,
    resetProblem,
    solution
}) => {
    const [answer, setAnswer] = useState('');
    const inputEl = useRef(null);

    useEffect(() => {
        resetProblem();
        inputEl.current.addEventListener('keyup', (e) => {
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
        if (answer === solution) {
            incrementScore(incrementValue);
            resetProblem();
            setAnswer('');
            inputEl.current.focus();
        } else {
            loseLife();
        }
    };

    return (
        <div>
            <h1 className="bigger-font">{formattedProblem}</h1>
            <input id="userInput"
                autoFocus
                className="text-input"
                onChange={onAnswerChange}
                onFocus={() => setAnswer('')}
                placeholder="Your Answer"
                ref={inputEl}
                type="number"
                value={answer}
            />
            <button id="userSubmit"
                className="button button__no-bottom"
                disabled={!answer}
                onClick={onAnswerSubmit}
            >
                Enter
            </button>
        </div>
    );
}

const mapStateToProps = (state) => {
    const problemState = state.problem;
    return {
        formattedProblem: formatProblem(problemState.problem),
        incrementValue: problemState.value,
        solution: evaluateProblem(problemState.problem)
    };
};

const mapDispatchToProps = (dispatch) => ({
    resetProblem: () => dispatch(resetProblem()),
    incrementScore: (incrementValue) => dispatch(incrementScore(incrementValue)),
    loseLife: () => dispatch(loseLife())
});

export default connect(mapStateToProps, mapDispatchToProps)(MathProblem);