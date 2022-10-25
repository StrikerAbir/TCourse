import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./RightSide.css";
const RightSide = ({ course }) => {
  const { title, rating, image, id, level,duration } = course;
  return (
    <div className="mb-4 mx-2 p-0 card-content">
      <img className="card-image" src={image} alt="" />
      <div className="m-3">
        <h5 className="mb-2 fw-bold">{title}</h5>

        <div className="d-flex align-items-center">
          <p className="m-0 pe-1">
            <span className="orange-font">Rating:</span> {rating}
          </p>
          <FaStar></FaStar>
        </div>
        <div>
          <p className="m-0">
            <span className="orange-font">Level:</span> {level}
          </p>
        </div>
        <div>
          <p>
            <span className="orange-font">Duration:</span> {duration}
          </p>
        </div>
        <button className="orangeBtn nav-Link">
                  <Link to={`/courses/${id}`}>Details</Link>
        </button>
      </div>
    </div>
  );
};

export default RightSide;
