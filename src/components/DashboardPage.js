import React from 'react';
import { Link } from 'react-router-dom';

const DashboardPage = () => {
    return (
        <div>
            Dashboard content.
            <Link className="button" to="/play">Play</Link>
        </div>
    );
};
    
export default DashboardPage;