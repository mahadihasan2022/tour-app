import React, { useEffect } from "react";
import Typewriter from 'typewriter-effect';
import "./Resort.css";
import { useState } from "react";
import ResortItem from "../../Component/Item/ResortItem";

const Resort = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetch("http://localhost:5000/bestResort")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, []);
  return (
    <div>
        <div className="resorts-container">
            <h1>Have a comfortable journey with family/group  !!!</h1>
            <h2 data-aos="fade-up" data-aos-duration="2000" style={{ fontWeight: 700,color:'#22c55e', textAlign:'center'}}>
                    <Typewriter
                        options={{
                            strings: ['We help to book you a hotel to make sure comfortable journey!!!!'  ],
                            autoStart: true,
                            loop: true,
                        }}
                    />
            </h2>
            <h3>Search By Destination</h3>
            <div className="search-inputField">
                <input type="text"  placeholder="Search Resort...."/>
                <div className="search-btn">
                    <button>Search</button>
                </div>
            </div>
        </div>
        <div className="resort-cardContainer">
        <div className="">
            {products.map((product) => (
              <ResortItem key={product._id} product={product}></ResortItem>
            ))}
          </div>
        </div>
    </div>
  );
};

export default Resort;
