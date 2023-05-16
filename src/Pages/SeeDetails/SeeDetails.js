import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MdLocationPin } from "react-icons/md";
import { BsClock } from "react-icons/bs";
import { BsBagCheck } from "react-icons/bs";
import { BsPeople } from "react-icons/bs";
import './SeeDetails.css';
const SeeDetails = () => {
    const { Id } = useParams();
    const [services, setServices] = useState({});
    const {name, destination, duration, tourType, groupSize} = services;

    useEffect(() => {
        fetch(`http://localhost:5000/currentPackage/${Id}`)
          .then((res) => res.json())
          .then((data) => {
            setServices(data);
          });
      }, [Id, setServices]);
    return (
        <div>
            <h1>{name}</h1>
            <p><MdLocationPin style={{color:'red', fontSize:'24px'}}/><span style={{paddingLeft:'6px'}}>{destination}</span></p>
            <hr size="5" color="green"/>
            <div style={{display:'grid', gridTemplateColumns:"repeat(3, 1fr)"}}>
                <div style={{display:'flex'}}>
                    <h1><BsClock style={{backgroundColor:'green',borderRadius:"50%"}}/></h1>
                    <div style={{paddingLeft:'16px',paddingTop:'10px'}}>
                        <h2 style={{margin:'0'}}>Duration</h2>
                        <p style={{margin:'0', fontSize:'14px'}}>{duration}</p>
                    </div>

                </div>
                <div style={{display:'flex'}}>
                    <h1><BsBagCheck style={{color:'blue'}}/></h1>
                    <div style={{paddingLeft:'16px',paddingTop:'10px'}}>
                        <h2 style={{margin:'0'}}>Tour Type</h2>
                        <p style={{margin:'0', fontSize:'14px'}}>{tourType}</p>
                    </div>

                </div>
                <div style={{display:'flex'}}>
                    <h1><BsPeople style={{color:'lime'}}/></h1>
                    <div style={{paddingLeft:'16px',paddingTop:'10px'}}>
                        <h2 style={{margin:'0'}}>Max Group Size</h2>
                        <p style={{margin:'0', fontSize:'14px'}}>{groupSize}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SeeDetails;