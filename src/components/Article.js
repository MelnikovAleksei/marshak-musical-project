import React from 'react';

function Article(props) {
  return (
    <article className="article">
      <h2 className="article__title title">
        {props.title}
      </h2>
      {props.children}
    </article>
  )
}


export default Article;
