import frank_sinatra_that_s_life from '../songs/frank-sinatra_that-s-life.mp3';
import frank_sinatra_moon_river from '../songs/Frank-Sinatra-Moon-River.mp3';
import frank_sinatra_my_way from '../songs/Frank-Sinatra-My-Way.mp3';

const songsData = [
  {
    id: 1,
    lang: 'en',
    authors: 'Frank Sinatra',
    name: "That's life",
    text: "That's life, that's what all the people say \r\nYou're riding high in April, shot down in May \r \nBut I know I'm gonna change that tune \r\nWhen I'm back on top, back on top in June \r\nI said, that's life, and as funny as it may seem \r\nSome people get their kicks \r\nStompin' on a dream \r\nBut I don't let it, let it get me down \r\nCause this fine old world it keeps spinning around",
    src: frank_sinatra_that_s_life
  },
  {
    id: 2,
    lang: 'en',
    authors: 'Frank Sinatra',
    name: "Moon River",
    text: "Moon river, wider than a mile \r\nI'm crossing you in style some day \r\nOh, dream maker, you heart breaker \r\nWherever you're goin', I'm goin' your way",
    src: frank_sinatra_moon_river
  },
  {
    id: 3,
    lang: 'en',
    authors: 'Frank Sinatra',
    name: "My Way",
    text: "And now the end is near \r\nAnd so I face the final curtain \r\nMy friend I'll say it clear \r\nI'll state my case of which I'm certain",
    src: frank_sinatra_my_way
  },
]

export default songsData;
