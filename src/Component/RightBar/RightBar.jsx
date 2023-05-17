import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { BsTelephonePlusFill } from "react-icons/bs";
import './RightBar.css';
import { useParams } from 'react-router-dom';

const RightBar = () => {
    const { Id } = useParams();
    const [services, setServices] = useState({});
    const [value, onChange] = useState(new Date());
    const {groupSize} = services;

    useEffect(() => {
        fetch(`http://localhost:5000/currentPackage/${Id}`)
          .then((res) => res.json())
          .then((data) => {
            setServices(data);
          });
      }, [Id, setServices]);
    return (
        <div className='rightbar'>
            <h1>Want To Purchase</h1>
            <div className='calender' style={{fontSize:'12px', color:'black'}}>
      <Calendar onChange={onChange} value={value}/>
    </div>
    <div style={{display:'grid', gridTemplateColumns:'repeat(2, 1fr)', paddingTop:'8px'}}>
        <div >
            <h2 style={{textAlign:"center"}}>Adult</h2>
        </div>
        <div>
            <h2 style={{textAlign:"center"}}>{groupSize}</h2>
        </div>
    </div>
    <div className='btn-btn-purchase'>
        <button>Purchase Now</button>
    </div>
    <div style={{display:'flex', justifyContent:'space-between', paddingTop:'8px'}}>
        <div >
            <h3 style={{ fontSize:'10px'}}>Help Center</h3>
        </div>
        <div>
            <h2 style={{fontSize:"10px"}}><BsTelephonePlusFill style={{color:'green'}}/> <span>+8801409117333</span></h2>
        </div>
    </div>

        </div>
    );
};

export default RightBar;