import React from 'react';
import video from '../../Assets/images/course-video.mp4'
import './Home.css'
const Home = () => {
    return (
        <section className='position-relative'>
            <video autoPlay muted loop id='video-bg'>
                <source src={video} type='video/mp4' />
            </video>
            <div className='overlay'>
                <div className='title d-flex justify-content-center align-items-center'>
                    <h1 className='fw-bold bebas-font text-white'><span className='orange-font'>T</span>COURSE</h1>
                </div>
            </div>
        </section>
    );
};

export default Home;