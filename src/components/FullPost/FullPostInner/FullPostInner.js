import React from 'react';

const FullPostInner = ({ id, title, author, body }) => {
  return (
    <div className="full-post__inner">
      <p className="full-post__id">{id}</p>
      <h2 className="full-post__title">{title}</h2>
      <h4 className="full-post__author">{author}</h4>
      <h3 className="full-post__text">{body}</h3>
    </div>
  );
};

export default FullPostInner;
