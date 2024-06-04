import React from 'react';
import { Link } from 'react-router-dom';

const CarCard = ({ car }) => {
  const { _id, title, img, price, mileage, make } = car;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-5 pt-5">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p className="font-bold">Price:${price} </p>
          <p className="font-bold">Mileage:{mileage}km </p>
          <p className="font-bold">Year:{make} </p>
          <div className="card-actions">
            <Link className="btn btn-primary" to={`/CarDetails/${_id}`}>
              Show Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// ------------------

// ------------------------

export default CarCard;
