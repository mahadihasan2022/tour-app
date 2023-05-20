import React from 'react';
import './Header.css';

const ResortLeftBar = () => {
    return (
        <div className='resortLeftBar'>
            <h1>Destination</h1>
            <div className="leftBar">
                <div className="btn-leftBar">
                    <button className='leftBar-btn-info'>Sajek</button>
                </div>
                <div className="btn-leftBar">
                    <button className='leftBar-btn-info'>Alikadam</button>
                </div>
                <div className="btn-leftBar">
                    <button className='leftBar-btn-info'>Kishorganj</button>
                </div>
                <div className="btn-leftBar">
                    <button className='leftBar-btn-info'>Bandarban</button>
                </div>
                <div className="btn-leftBar">
                    <button className='leftBar-btn-info'>Sylhet</button>
                </div>
                <div className="btn-leftBar">
                    <button className='leftBar-btn-info'>Sreemangal</button>
                </div>
            </div>
        </div>
    );
};

export default ResortLeftBar;