import React from 'react';
import NavbarLayout from '../../shared/Navbar/NavbarLayout';
import Icons from '../../icons/Icons';
import Cars from './Cars/Cars';

import ServiceCar from './ServiceCar';
import Newsletter from './Newsletter/Newsletter';

const Home = () => {
  return (
    <>
      <Icons />
      <Cars />
      <ServiceCar />
      <Newsletter />
    </>
  );
};

export default Home;
