import React from 'react';
import moment from 'moment';

const ScoreListItem = ({ timestamp, username, value }) => (
    <div className="list-item">
        <h3 className="list-item__data">
            {
                timestamp && moment(timestamp).format("MM/DD/YYYY").toString()
            }
            {username}
            : {value}</h3>
    </div>
);

export default ScoreListItem;