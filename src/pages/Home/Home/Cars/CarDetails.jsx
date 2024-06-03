import React from 'react';
import Navbar from '../../../shared/Navbar/Navbar';
import { useParams } from 'react-router-dom';

const CarDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <Navbar />
      <div>
        <h2 className="text-5xl">Car Details</h2>
        <p>{id} </p>
      </div>
    </div>
  );
};

export default CarDetails;
