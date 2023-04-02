import React from 'react';
import { MdLocationPin } from "react-icons/md";
import watch from '../../Source/Image/watch.jpg';
import lakmachara from '../../Source/Image/lakmachara.png';
import shimul from '../../Source/Image/shimul.png';
import niladri from '../../Source/Image/niladri.png';
import './Explore.css';

const Explore = () => {
    return (
        <div className=''>
            <div className="explore-container">
                <div className="explore">
                    <img src={watch} alt="" />
                    <div className="explore-body">
                        <h1 className="explore-tittle">Tanguar Hour Watch Tower</h1>
                        <h5 className="explore-location"><MdLocationPin style={{color:'red', paddingRight:'5px',fontSize:'30px'}}/>Sunamgonj</h5>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Explore;