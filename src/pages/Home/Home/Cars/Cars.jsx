import React, { useEffect, useState } from 'react';
import CarCard from './CarCard';

const Cars = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch('service.json')
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);
  return (
    <>
      <div className="mt-4">
        <div className="text-center font-bold p-5">
          <h3 className="text-5xl text-orange-600">Our Collections</h3>
          <p className="text-2xl">
            At Purple frontier See Our latest collections
          </p>
        </div>
      </div>

      <div className="items-center p-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cars.map((car) => (
            <CarCard key={car._id} car={car}></CarCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cars;
