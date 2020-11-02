import React    from 'react';
import Article  from './Article';
import articles from '../utils/articles';
import Audio        from "../components/Player/Audio";

function Main() {
  return (
    <main className="main">
      <div className="main__player-container">
        <Audio/>
      </div>
      <div className="main__about-container">
        <section className="main__section articles">
          {articles.map((article) =>
            <Article
              title={article.title}
              key={article.id}
            >
              {article.paragraphs.map((paragraph) =>
                <p
                  className="article__paragraph"
                  key={paragraph.id}
                >
                  {paragraph.text}
                </p>
              )}
            </Article>
          )}
        </section>
      </div>
      <div className="main__form-container">
        <section className="main__section forms">
          <div>Form component</div>
        </section>
      </div>
    </main>
  )
}

export default Main;
