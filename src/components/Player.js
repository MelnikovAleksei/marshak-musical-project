import React from 'react'
import PlayBtn from '../images/player/play.svg';
import PauseBtn from '../images/player/pause.svg';
import songsData from '../utils/songsData';

function Player() {

  const [currentSong, setCurrentSong] = React.useState(songsData[0]);

  const handlePlaylistItemClick = (src) => {
    setCurrentSong(src)
  }

  return(
    <div className="player">
      <audio
        src={currentSong}
        controls
      >
      </audio>
      <div className="player__controls">
        <button className="play" data-icon="P" aria-label="play pause toggle"></button>
        <button className="stop" data-icon="S" aria-label="stop"></button>
        <div className="timer"><div></div><span aria-label="timer">00:00</span></div>
        <button className="rwd" data-icon="B" aria-label="rewind"></button>
        <button className="fwd" data-icon="F" aria-label="fast forward"></button>
      </div>
      <div className="player__releases">
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
                onClick={() => { handlePlaylistItemClick(song.src) }}
              >
                {`${song.name} — ${song.authors}`}
              </li>
            )
          :
            'Пока что у нас только 1 релиз.'
          }
        </ul>
      </div>

    </div>
  )
}

export default Player
