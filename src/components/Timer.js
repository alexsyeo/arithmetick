import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { timerFormatted } from '../selectors/timer';
import { resetTimer } from '../actions/timer';

const Timer = ({ resetTimer, formattedTimer }) => {
    useEffect(() => {
        resetTimer();
    }, []);

    return (
        <div>
            <h1>{formattedTimer}</h1>
        </div>
    );
};

const mapStateToProps = (state) => ({
    formattedTimer: timerFormatted(state.timer)
});

const mapDispatchToProps = (dispatch) => ({
    resetTimer: () => dispatch(resetTimer())
});

export default connect(mapStateToProps, mapDispatchToProps)(Timer);