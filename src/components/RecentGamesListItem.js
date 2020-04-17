import React from 'react';
import moment from 'moment';

const RecentGamesListItem = ({ timestamp, value }) => (
    <div className="list-item">
        <h3 className="list-item__data">{moment(timestamp).format("MM/DD/YYYY").toString()}: {value}</h3>
    </div>
);

export default RecentGamesListItem;