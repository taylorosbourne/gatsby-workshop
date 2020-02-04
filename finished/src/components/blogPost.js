import React from 'react';

const BlogPost = ({ title, date, __html }) => (
  <>
    <h1>{title}</h1>
    <h4>{date}</h4>
    <div
      dangerouslySetInnerHTML={{ __html }}
    />
  </>
);

export default BlogPost;
