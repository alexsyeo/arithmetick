import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { resetProblem } from '../actions/problem';
import { incrementScore } from '../actions/score';
import { startLostLife } from '../actions/lives';
import evaluateProblem from '../selectors/evaluateProblem';
import formatProblem from '../utility/formatProblem';
import { startTick } from '../actions/timer';

export class MathProblem extends React.Component {
    constructor(props) {
        super(props);
        const numElements = 2;
        const numDigits = 1;
        this.state = {
            answer: '',
            numElements,
            numDigits,
            incrementValue: 1   // move this to store (?)
        };
    }
    componentDidMount() {
        this.props.resetProblem(this.state.numElements, this.state.numDigits);
        document.getElementById('userInput').addEventListener('keyup', (e) => {
            // 13 represents "Enter" key. This allows the user to press the enter key instead of clicking on the submit button.
            if (e.keyCode === 13) {
                e.preventDefault();
                document.getElementById('userSubmit').click();
            }
        });
        this.timerID = setInterval(() => {
            this.props.startTick();
        }, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    onAnswerChange = (e) => {
        const answer = e.target.value;
        this.setState(() => ({ answer }));
    };
    onAnswerSubmit = () => {
        // Validate answer, and increment score if correct. Otherwise, lose life.
        console.log(`Problem: ${this.props.problem}`);
        console.log(`Solution: ${evaluateProblem(this.props.problem)}`);
        if (this.state.answer === evaluateProblem(this.props.problem)) {
            console.log('Correct!');
            this.props.incrementScore(this.state.incrementValue);
        } else {
            this.props.startLostLife();
        }

        this.props.resetProblem(this.state.numElements, this.state.numDigits);
        this.setState(() => ({ answer: '' }));
    }
    render() {
        return (
            <div>
                <h1>{formatProblem(this.props.problem)}</h1>
                <input id="userInput"
                    type="number"
                    placeholder="Your Answer"
                    className="text-input"
                    value={this.state.answer}
                    onChange={this.onAnswerChange}
                />
                <button id="userSubmit"
                    className="button"
                    disabled={!this.state.answer}
                    onClick={this.onAnswerSubmit}
                >
                    Enter
                </button>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        problem: state.problem
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        resetProblem: (numElements, numDigits) => dispatch(resetProblem(numElements, numDigits)),
        incrementScore: (incrementValue) => dispatch(incrementScore(incrementValue)),
        startLostLife: () => dispatch(startLostLife()),
        startTick: () => dispatch(startTick())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MathProblem);