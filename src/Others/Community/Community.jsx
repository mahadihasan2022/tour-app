import React from 'react';
import { AiTwotoneHeart } from "react-icons/ai";
import './Community.css';

const Community = () => {
    return (
 
     <div>
        <div className='community'>
            <h1>Our Community</h1>
            <div className='community-container'>
                <div className='communityBox'>
                    <h2>367k+</h2>
                    <h3>Subscribes</h3>
                </div>
                <div className='communityBox'>
                    <h2>763M+</h2>
                    <p>  <AiTwotoneHeart/></p>

                </div>
                <div className='communityBox'>
                    <h2>176M+</h2>
                    <h3>Followers</h3>
                </div>
            </div>
        </div>
     </div>

);
};

export default Community;