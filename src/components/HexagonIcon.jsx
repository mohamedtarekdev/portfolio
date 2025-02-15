import React from 'react';

import '../styles/hexagon-icon.css';

const HexagonIcon = ({ item }) => {
    return (
        <div className="hexagon-icon-container">
            <div
                className="hexagon-icon"
                id={item.tech_name === 'MongoDB' ? 'mongo-db' : ''}
                style={{ backgroundColor: `#${item.tech_color}` }}
            >
                <img src={item.tech_icon} alt={item.tech_name} />
            </div>
        </div>
    );
};

export default HexagonIcon;
