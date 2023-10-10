import React from 'react';
import iphone from './images/iphone.jpeg';
import Samsung from './images/samsung.jpeg';
import Redmi from './images/redmi.jpeg';
import Poco from './images/ppoco.jpeg';

const Mobiles = () => {
  const mobileData = [
    {
      brand: "Iphone",
      img: iphone,
      model: "Iphone 14",
      price: "75000",
      available: true
    },
    {
      brand: "Samsung",
      img: Samsung,
      model: "Samsung M33 5G",
      price: "45000",
      available: true
    },
    {
      brand: "Redmi",
      img: Redmi,
      model: "Redmi A20",
      price: "35000",
      available: true
    },
    {
      brand: "Poco",
      img: Poco,
      model: "Poco 3",
      price: "35000",
      available: false
    },
  ];

  return (
    <div>
      {mobileData.map((mobile, index) => (
        <div key={index}>
          <h2>{mobile.brand}</h2>
          <img src={mobile.img} alt={mobile.brand} width="200px" height="200px" />
          <p>Model: {mobile.model}</p>
          <p>Price: {mobile.price}</p>
          <p>Available: {mobile.available ? 'Yes' : 'No'}</p>
        </div>
      ))}
    </div>
  );
};

export default Mobiles;