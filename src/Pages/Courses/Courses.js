import React from "react";
import { useLoaderData } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import LeftSide from "../Other/LeftSide/LeftSide";
import RightSide from "../Other/RightSide/RightSide";

const Courses = () => {
  const courses = useLoaderData();
  return (
    <div className="container-all">
      <div className="container">
          <h2 className="text-center fw-bold mb-4 orange-border p-2">
            Courses
          </h2>
        </div>
      <Container>
        <Row className="g-2">
          <Col className="border border-dark" lg="3">
            {courses.map((course) => (
              <LeftSide key={course.id} course={course}></LeftSide>
            ))}
          </Col>
          <Col lg="8">
            <Row className="g-2 justify-content-around" lg={3} sm="12">
              {courses.map((course) => (
                <RightSide
                  key={course.id}
                  course={course}
                ></RightSide>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Courses;
