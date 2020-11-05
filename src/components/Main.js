import React from 'react';
import Article from './Article';
import articles from '../utils/articles';
import Form from './Form';
import Player  from "./Player";

function Main() {
  return (
    <main className="main">
      <div className="main__player-container">
        <Player/>
      </div>
      <div className="main__about-container">
        <section className="main__section articles">
          {articles.map((article) =>
            <Article
              title={article.title}
              key={article.id}
            >
              {article.type === 'paragraph' ?
                article.texts.map((paragraph) =>
                  <p
                    className="article__text paragraph"
                    key={paragraph.id}
                  >
                    {paragraph.text}
                  </p>
                )
              :
                <ul
                  className="article__list"
                >
                  {article.texts.map((listItem) =>
                    <li
                      className="article__text article__list-item"
                      key={listItem.id}
                    >
                      {listItem.text}
                    </li>
                  )}
                </ul>
              }
            </Article>
          )}
        </section>
      </div>
      <div className="main__form-container">
        <section className="main__section forms">
          <Form />
        </section>
      </div>
    </main>
  )
}

export default Main;
