import React from 'react';
import { Link } from 'react-router-dom';
import './CourseLeft.css'
const CourseLeft = ({ course }) => {
    const { id,title } = course;
    return (
      <div className="mb-2 nav-link">
        <Link className="">
          <h5 className="p-2 orange-border">{title}</h5>
        </Link>
      </div>
    );
};

export default CourseLeft;