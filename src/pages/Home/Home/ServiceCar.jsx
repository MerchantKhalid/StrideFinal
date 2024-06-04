import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCar = () => {
  return (
    <section className="services" id="services">
      <h1 className="heading">
        our <span>services</span>
      </h1>

      <div className="box-container">
        <div className="box">
          <i className="fas fa-car"></i>
          <h3>car selling</h3>
          <p>
            At Purple Frontier, We Specialize In Offering High-Quality Used Cars
            To Our Valued Customers In Schenghen. Our Mission Is To Provide
            Reliable And Affordable Vehicles That Meet The Diverse Needs Of Our
            Clientele. Whether You're Looking For A Compact City Car, A Spacious
            Family SUV, Or A Sleek Sports Model, Purple Frontier Is Your Trusted
            Partner In Finding The Best Used Cars In Schengen. Visit Us Today
            And Drive Away In The Car Of Your Dreams!
          </p>
          <Link to={'#'} className="btn">
            {' '}
            read more
          </Link>
        </div>

        <div className="box">
          <i className="fas fa-tools"></i>
          <h3>parts repair</h3>
          <p>
            At Purple Frontier, We Specialize In Offering High-Quality Used Cars
            To Our Valued Customers In Schenghen. Our Mission Is To Provide
            Reliable And Affordable Vehicles That Meet The Diverse Needs Of Our
            Clientele. Whether You're Looking For A Compact City Car, A Spacious
            Family SUV, Or A Sleek Sports Model.
          </p>
          <Link to={'#'} className="btn">
            {' '}
            read more
          </Link>
        </div>

        <div className="box">
          <i className="fas fa-car-crash"></i>
          <h3>car insurance</h3>
          <p>
            At Purple Frontier, We Specialize In Offering High-Quality Used Cars
            To Our Valued Customers In Schenghen. Our Mission Is To Provide
            Reliable And Affordable Vehicles That Meet The Diverse Needs Of Our
            Clientele. Whether You're Looking For A Compact City Car, A Spacious
            Family SUV, Or A Sleek Sports Model, Purple Frontier Is Your Trusted
            Partner In Finding The Best Used Cars.
          </p>
          <Link to={'#'} className="btn">
            {' '}
            read more
          </Link>
        </div>

        <div className="box">
          <i className="fas fa-car-battery"></i>
          <h3>battery replacement</h3>
          <p>
            At Purple Frontier, We Specialize In Offering High-Quality Used Cars
            To Our Valued Customers In Schenghen. Our Mission Is To Provide
            Reliable And Affordable Vehicles That Meet The Diverse Needs Of Our
            Clientele. Whether You're Looking For A Compact City Car, A Spacious
            Family SUV, Or A Sleek Sports Model, Purple Frontier Is Your Trusted
            Partner In Finding The Best Used Cars In Schengen.
          </p>
          <Link to={'#'} className="btn">
            {' '}
            read more
          </Link>
        </div>

        <div className="box">
          <i className="fas fa-gas-pump"></i>
          <h3>oil change</h3>
          <p>
            At Purple Frontier, We Specialize In Offering High-Quality Used Cars
            To Our Valued Customers In Schenghen. Our Mission Is To Provide
            Reliable And Affordable Vehicles That Meet The Diverse Needs Of Our
            Clientele. Whether You're Looking For A Compact City Car, A Spacious
            Family SUV, Or A Sleek Sports Model, Purple Frontier Is Your Trusted
            Partner In Finding The Best Used Cars In Schengen. Visit Us Today
            And Drive Away In The Car Of Your Dreams!
          </p>
          <Link to={'#'} className="btn">
            {' '}
            read more
          </Link>
        </div>

        <div className="box">
          <i className="fas fa-headset"></i>
          <h3>24/7 support</h3>
          <p>
            At Purple Frontier, We Specialize In Offering High-Quality Used Cars
            To Our Valued Customers In Schenghen. Our Mission Is To Provide
            Reliable And Affordable Vehicles That Meet The Diverse Needs Of Our
            Clientele. Whether You're Looking For A Compact City Car, A Spacious
            Family SUV, Or A Sleek Sports Model, Purple Frontierngen
          </p>
          <Link to={'#'} className="btn">
            {' '}
            read more
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceCar;
