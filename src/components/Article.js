import React from 'react';

function Article({title, children}) {
  return (
    <article className="article">
      <h2 className="article__title title">
        {title}
      </h2>
      {children}
    </article>
  )
}


export default Article;
