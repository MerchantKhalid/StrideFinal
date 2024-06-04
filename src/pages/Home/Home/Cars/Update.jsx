import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Update = () => {
  const loadedCar = useLoaderData();
  const navigate = useNavigate();

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const price = form.price.value;
    const make = form.make.value;
    const mileage = form.mileage.value;
    const description = form.description.value;
    const updatedcar = { title, price, make, mileage, description };

    fetch(`http://localhost:5000/cars/${loadedCar._id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updatedcar),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert('Updated Successfully');
          navigate('/');
        }
      });
  };
  return (
    <div className="flex justify-center items-center overflow-hidden  min-h-[400px] bg-gray-100">
      <div className="text-center max-w-lg w-full p-5 bg-white shadow-lg rounded-lg">
        <h3 className="text-3xl text-orange-600 mt-40">{loadedCar.title}</h3>
        <form onSubmit={handleUpdate} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Car Brand</span>
            </label>
            <input
              name="title"
              type="text"
              placeholder="title"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              name="price"
              type="text"
              placeholder="Price"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Make</span>
            </label>
            <input
              name="make"
              type="text"
              placeholder="Make"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Mileage</span>
            </label>
            <input
              name="mileage"
              type="text"
              placeholder="Mileage"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input
              name="description"
              type="text"
              placeholder="Description"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <input
              type="submit"
              className="btn btn-primary w-full"
              value={'Update'}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
