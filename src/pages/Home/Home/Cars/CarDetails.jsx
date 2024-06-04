import React from 'react';

import { Link, useLoaderData, useNavigate } from 'react-router-dom';

const CarDetails = () => {
  const car = useLoaderData();
  const { _id, title, img, price, mileage, make, description } = car;
  const navigate = useNavigate();
  const handleDelete = (id) => {
    const agreed = confirm('Are you sure want to delete?');
    if (agreed) {
      fetch(`https://stride-final-server.vercel.app/car/${id}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert('Car has been deleted');
            navigate('/');
          }
          console.log(data);
        });
    }
  };
  return (
    <div className="card mt-12 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p className="font-bold">Price:${price} </p>
        <p className="font-bold">Mileage:{mileage}km </p>
        <p className="font-bold">Year:{make} </p>
        <p className="font-bold">Description: {description} </p>

        <div className="card-actions flex">
          <Link to={`/Update/${_id}`}>
            <button className="btn btn-primary">Edit</button>
          </Link>
          <button onClick={() => handleDelete(_id)} className="btn btn-primary">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
