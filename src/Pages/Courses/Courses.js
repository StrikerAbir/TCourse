import React from "react";
import { useLoaderData } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import LeftSide from "../Other/LeftSide/LeftSide";
import RightSide from "../Other/RightSide/RightSide";

const Courses = () => {
  const courses = useLoaderData();
  return (
    <div>
      <div className="container-all">
        <div className="container">
          <h2 className="text-center fw-bold mb-4 orange-border p-2">
            Courses
          </h2>
        </div>
        <Container>
          <Row>
            <Col lg="3">
              {courses.map((course) => (
                <LeftSide key={course.id} course={course}></LeftSide>
              ))}
            </Col>
            <Col lg="9">
              {courses.map((course) => (
                <RightSide key={course.id} course={course}></RightSide>
              ))}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Courses;
