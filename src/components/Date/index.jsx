import React from 'react';
import './index.css';

const DisplayDate = () => {
    return (
        <div className="Date">
            <h1 className="Date__day">{new Date().toLocaleString('default', {weekday: 'long'})}</h1>
            <h5 className="Date__full-date">{new Date().toLocaleDateString('default',  { year: 'numeric', month: 'long', day: 'numeric' })}</h5>
        </div>
    )
};

export default DisplayDate;