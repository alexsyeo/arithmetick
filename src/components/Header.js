import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__content">
                    <Link className="header__title" to="/arithmetick">
                        <h1>Arithmetick</h1>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;