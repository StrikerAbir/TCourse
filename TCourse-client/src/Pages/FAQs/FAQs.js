import React from 'react';
import './FAQs.css'
import a1 from '../../Assets/images/author-01.png'
import a2 from '../../Assets/images/author-02.png'
const FAQs = () => {
    return (
      <div className="container-all">
        <div className="container mt-5">
          <h2 className="text-center fw-bold mb-4 orange-border p-2">FAQs</h2>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className="form w-lg-50 mb-4">
            <div className="header-faq d-flex justify-content-center align-items-center p-2 mb-2">
              <img src={a1} alt="" />
              <h5 className="ms-3">Atiq Aziz</h5>
            </div>
            <h5 className="orange-font fw-bold">
              Are certificates available after finishing course?
            </h5>
            <p>
              <span className="orange-font">Ans:</span> Yes. We will give your
              certification for each course you done. Happy learning.
            </p>
          </div>
          <div className="form w-lg-50">
            <div className="header-faq d-flex justify-content-center align-items-center p-2 mb-2">
              <img src={a2} alt="" />
              <h5 className="ms-3">Jahanara Yeasmin</h5>
            </div>
            <h5 className="orange-font fw-bold">
              How much qualified instructors are?
            </h5>
            <p>
              <span className="orange-font">Ans:</span> Instructors are highly qualified and from top ranking university around the world. So, there is no doubt about our instructors qualities.
            </p>
          </div>
        </div>
      </div>
    );
};

export default FAQs;