import React from 'react';
import CourseLeft from './CourseLeft/CourseLeft';

const LeftSide = ({courses}) => {
    return (
        <div>
            {
                courses.map((course) =><CourseLeft key={course.id} course={course}></CourseLeft>)
            }
        </div>
    );
};

export default LeftSide;