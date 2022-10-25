import React from 'react';
import { Link } from 'react-router-dom';


const LeftSide = ({ course }) => {
    const { id, title } = course;
    return (
      <div className="mb-3 nav-link">
        <Link to={`/courses/${id}`}>
          <h5 className="p-2 orange-border">{title}</h5>
        </Link>
      </div>
    );
};

export default LeftSide;