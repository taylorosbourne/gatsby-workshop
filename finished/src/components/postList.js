import React from 'react';
import { Link } from "gatsby"

const PostList = ({ posts }) => (
  <>
    <br />
    {posts.map(post => {
      const { frontmatter, id } = post.node;
      const { title, path } = frontmatter;
      return (
        <div key={id}>
          <h3>
            <Link to={path}>{title}</Link>
          </h3>
        </div>
      );
    })}
  </>
);

export default PostList;
