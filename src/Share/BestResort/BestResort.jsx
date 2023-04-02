import React, { useEffect, useState } from 'react';
import ResortItem from '../../Component/ResortItem/ResortItem';
import './BestResort.css';
import ResortProduct from '../../Component/ResortProduct/ResortProduct';

const BestResort = () => {
    // const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     fetch("http://localhost:5000/bestResort")
    //       .then((res) => res.json())
    //       .then((data) => setProducts(data));
    //   }, []);


    return (
      <div className='resort'>
      <h1 style={{textAlign:'center', fontSize:'30px',fontWeight:'bold',fontStyle:'italic', paddingTop:'50px'}}>Best Resort In Bangladesh</h1>
      <ResortProduct/>


        {/* <div className="best-product">
        <div className="best-product-container">
          {products.map((product) => (
            <ResortItem key={product._id} product={product}></ResortItem>
          ))}
        </div>
      </div> */}
      </div>
    );
};

export default BestResort;