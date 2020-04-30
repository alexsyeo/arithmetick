import React from 'react';
import { Link } from 'react-router-dom';
import Leaderboard from '../components/Leaderboard';

const DashboardPage = () => {
    return (
        <div className="container">
            <div className="content-container">
                <div className="column-container">
                    <Link className="button button--big button__shift-down" to="/play">Play</Link>
                </div>
                <div className="container-shift-right-more container-shift-down">
                    <div className="list-container">
                        <Leaderboard />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;