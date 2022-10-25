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
        <h2 className="text-center fw-bold mb-4 orange-border p-2">Courses</h2>
        <Container>
          <Row>
            <Col lg="3">
              <LeftSide key={Math.random()} courses={courses}></LeftSide>
            </Col>
            <Col lg="9">
              <RightSide key={Math.random()} courses={courses}></RightSide>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Courses;
