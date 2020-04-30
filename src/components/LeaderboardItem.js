import React from 'react';

const LeaderboardItem = ({ username, score }) => (
    <div className="list-item">
        <h3 className="list-item__data">
            {username}: {score}
        </h3>
    </div>
);

export default LeaderboardItem;