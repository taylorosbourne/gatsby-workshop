import React from 'react';
import { Link } from "gatsby"

const PostList = ({ posts }) => (
  <>
    <br />
    {posts.map((post, i) => {
      const { frontmatter, id } = post.node;
      const { path, title } = frontmatter;
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
