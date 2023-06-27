import React, { useEffect, useState } from 'react';
import Cart from '../Item/Cart';
import useAuth from '../../Hooks/useAuth';

const ViewOrder = () => {
  const { user } = useAuth();
  const [products, setProducts] = useState([]);


  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [user?.email]);



  return (
    <div className="viewOrder">
      <div className="viewOrder-container">
        {products.map((product) => (
          <Cart key={product._id} product={product}></Cart>
        ))}
      </div>
    </div>
  );
};

export default ViewOrder;