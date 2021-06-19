import React from 'react';
import Button from '../UI/Button/Button';

const Post = ({ title, clicked, remove }) => {
  return (
    <div className="post">
      <h2 className="post__title" onClick={clicked}>
        {title}
      </h2>
      <Button onClick={remove}>Remove</Button>
    </div>
  );
};

export default Post;
