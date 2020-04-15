import React from 'react';
import { connect } from 'react-redux';
import { timerFormatted } from '../selectors/timer';

const Timer = (props) => (
    <div>
        <h1>{props.formattedTimer}</h1>
    </div>
);

const mapStateToProps = (state) => {
    return {
        formattedTimer: timerFormatted(state.timer)
    }
};

export default connect(mapStateToProps)(Timer);