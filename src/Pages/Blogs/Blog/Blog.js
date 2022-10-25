import React from 'react';

const Blog = ({ blog }) => {
    const { qus, ans } = blog;
    
    return (
        <div>
            <h4 className='orange-font'>{qus}</h4>
            <p>{ ans}</p>
        </div>
    );
};

export default Blog;