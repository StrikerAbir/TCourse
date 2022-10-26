import React from "react";
import { useLoaderData } from "react-router-dom";

const Checkout = () => {
  const course = useLoaderData();
  const { title, price, level, duration } = course;
  return (
    <div className="container-all height d-flex justify-content-center align-items-center">
      <div className="form">
        <h3 className="orange-font fw-bold">Check Out</h3>
        <div className="m-3">
          <h5 className="mb-2 fw-bold">{title}</h5>
          <div>
            <p className="m-0">
              <span className="orange-font">Level :</span> {level}
            </p>
            <p>
              <span className="orange-font">Duration :</span> {duration}
            </p>
            <p>
              <span className="orange-font">Price :</span> {price} tk
            </p>
                  </div>
                  <button className='orangeBtn'>
                      Enroll
                  </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
