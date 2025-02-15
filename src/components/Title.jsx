import React from 'react';
import '../styles/title.css';

const Title = ({ title, color }) => {
    return (
        <>
            <div className="title">
                <h3 style={{ color: color }}>{title}</h3>
                <span className="underline"></span>
            </div>
        </>
    );
};

export default Title;
