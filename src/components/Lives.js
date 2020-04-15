import React from 'react';
import { connect } from 'react-redux';

const Lives = (props) => (
    <h2>Lives: {props.lives}</h2>
);

const mapStateToProps = (state) => {
    return {
        lives: state.lives
    }
}

export default connect(mapStateToProps)(Lives);