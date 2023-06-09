import React from 'react';
import '../components/Devices.css';

const Devices = () => {
  return (
    <section className="col">
      <div className="heading-wrapper">
        <h3>Devices</h3>
      </div>
      <div className="container">
        <div className="row"> 
          <div className="col-lg-4 col-md-6 d-flex justify-content-center">
            <div className="device-wrapper">
              <img className="device" src="images/device1.svg" alt="" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex justify-content-center">
            <div className="device-wrapper">
              <img className="device" src="images/device2.svg" alt="" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex justify-content-center">
            <div className="device-wrapper">
              <img className="device" src="images/device3.svg" alt="" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex justify-content-center">
            <div className="device-wrapper">
              <img className="device" src="images/device4.svg" alt="" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex justify-content-center">
            <div className="device-wrapper">
              <img className="device" src="images/device5.svg" alt="" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex justify-content-center">
            <div className="device-wrapper">
              <img className="device" src="images/device6.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Devices;
