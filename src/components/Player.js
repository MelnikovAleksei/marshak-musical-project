import React from 'react'
import PlayBtn from '../images/player/play.svg';
import PauseBtn from '../images/player/pause.svg';
import songsData from '../utils/songsData';

function Player() {

  const [currentSong, setCurrentSong] = React.useState(songsData[0]);

  const [isOpenList, setIsOpenList] = React.useState(false);

  const [isDisplayText, setIsDisplayText] = React.useState(false);

  const handlePlaylistItemClick = (song) => {
    setCurrentSong(song);
  }

  const handleButtonToggleList = () => {
    setIsOpenList(!isOpenList);
  }

  const handleButtonTextToggle = () => {
    setIsDisplayText(!isDisplayText);
  }

  return(
    <div className="player">
      <audio
        src={currentSong.src}
        controls
      >
      </audio>
      <div className="player__controls">
        <button className="play" data-icon="P" aria-label="play pause toggle"></button>
        <button className="stop" data-icon="S" aria-label="stop"></button>
        <div className="timer"><div></div><span aria-label="timer">00:00</span></div>
        <button className="rwd" data-icon="B" aria-label="rewind"></button>
        <button className="fwd" data-icon="F" aria-label="fast forward"></button>
        <button
          className={isOpenList ?
            "player__button-toggle-text player__button-toggle-text_visible"
          :
            "player__button-toggle-text"
          }
          onClick={() => { handleButtonTextToggle() }}
        >
          {isDisplayText ? 'Релизы' : 'Текст песни'}
        </button>
        <button
          className="player__button-toggle-list"
          onClick={() => { handleButtonToggleList() }}
        >
          {isOpenList ? 'x' : '^'}
        </button>
      </div>
      <div
        className={isOpenList ? "player__releases player__releases_opened" : "player__releases"}
      >
        {isDisplayText ?
        (
        <>
          <h3
            className="player__text-title"
          >
            Текст песни:
          </h3>
          <p
            className="player__song-text"
          >
            {currentSong.text}
          </p>
        </>
        )
        :
        (
        <>
        <h3
          className="player__playlist-title"
        >
          {songsData.length > 1 ? 'Релизы' : ''}
        </h3>
        <ul
          className="player__playlist"
        >
          {songsData.length > 1 ?
            songsData.map((song) =>
              <li
                key={song.id}
                className="player__playlist-item"
                lang={song.lang}
                onClick={() => { handlePlaylistItemClick(song) }}
              >
                {`${song.name} — ${song.authors}`}
              </li>
            )
          :
            'Пока что у нас только 1 релиз.'
          }
        </ul>
        </>
        )}
      </div>

    </div>
  )
}

export default Player
