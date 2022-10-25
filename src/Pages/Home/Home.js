import React from 'react';
import { Link } from 'react-router-dom';
import video from '../../Assets/images/course-video.mp4'
import './Home.css'

const Home = () => {
    return (
      <section className="position-relative">
        <video autoPlay muted loop id="video-bg">
          <source src={video} type="video/mp4" />
        </video>
        <div className="overlay">
          <div className="title d-flex justify-content-center align-items-center">
            <div className="">
              <h1 className="fw-bold bebas-font text-white">
                <span className="orange-font">T</span>COURSE
              </h1>
              <h2 className="text-white">An easy online learning platform.</h2>
              <div className="d-flex justify-content-center mt-5">
                <button className="orangeBtn">
                  <Link to='/courses'>Start Learning</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Home;