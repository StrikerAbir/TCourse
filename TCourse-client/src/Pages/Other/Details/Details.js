import React from "react";
import { FaStar } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Pdf from "react-to-pdf";

const ref = React.createRef();
const options = {
  orientation: "landscape",
  unit: "in",
  format: [11, 8],
};
const Details = () => {
  const course = useLoaderData();
  const { image, rating, description, duration, level, title, price, id } =
    course;
  console.log(course);
  return (
    <div className="container-all" ref={ref}>
      <div className="d-flex justify-content-center m-3">
        <Pdf
          options={options}
          x={0.5}
          y={0.5}
          scale={0.4}
          targetRef={ref}
          filename={`${title}.pdf`}
        >
          {({ toPdf }) => (
            <button onClick={toPdf} className="orangeBtn nav-Link">
              <p className="m-0">Download PDF</p>
            </button>
          )}
        </Pdf>
      </div>
      <div className="container w-lg-50">
        <img className="card-image" src={image} alt="" />
        <div className="m-3">
          <h5 className="mb-2 fw-bold">{title}</h5>
          <p className="mb-2">{description}</p>
          <div className="d-flex align-items-center">
            <p className="m-0 pe-1">
              <span className="orange-font">Rating :</span> {rating}
            </p>
            <FaStar></FaStar>
          </div>
          <div>
            <p className="m-0">
              <span className="orange-font">Level :</span> {level}
            </p>
          </div>
          <div>
            <p className="m-0">
              <span className="orange-font">Duration :</span> {duration}
            </p>
          </div>
          <div>
            <p>
              <span className="orange-font">Price :</span> {price} tk
            </p>
          </div>

          <div className="nav-Link">
            <Link to={`/checkout/${id}`}>
              <button className="orangeBtn">Enroll Premium</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
