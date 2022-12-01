import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Blog from './Blog/Blog';
import './Blogs.css'
const Blogs = () => {
    const blogs = useLoaderData();

    return (
      <div className="container-all">
          <div className="container mt-5">
              <h2 className="text-center fw-bold mb-4 orange-border p-2">
                BLogs
              </h2>
            <div className="">
              {blogs.map((blog) => (
                <Blog key={Math.random()} blog={blog}></Blog>
              ))}
            </div>
          </div>
      </div>
    );
};

export default Blogs;