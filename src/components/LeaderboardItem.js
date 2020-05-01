// Below images from Pixel Buddha: https://www.flaticon.com/free-icon/gold-medal_179249

import bronzeMedal from '../../public/images/bronze-medal.svg';
import goldMedal from '../../public/images/gold-medal.svg';
import silverMedal from '../../public/images/silver-medal.svg';
import React from 'react';

const LeaderboardItem = ({ index, score, username }) => (
    <div>
        <div className="list-item">
            {index === 0 && <img className="medal" src={goldMedal} />}
            {index === 1 && <img className="medal" src={silverMedal} />}
            {index === 2 && <img className="medal" src={bronzeMedal} />}
            
            <h3 className="list-item__data">
                {username}: {score}
            </h3>
        </div>
    </div>
);

export default LeaderboardItem;