import React from 'react';
import PlayBtn from '../images/player/play.svg';
import PauseBtn from '../images/player/pause.svg';
import songsData from '../utils/songsData';

function Player() {

  const [currentPlaylist, setCurrentPlaylist] = React.useState(songsData);
  const [currentSong, setCurrentSong] = React.useState(songsData[0]);

  const [isOpenList, setIsOpenList] = React.useState(false);

  const [isDisplayText, setIsDisplayText] = React.useState(false);

  const audioElement = React.useRef();

  const [isMusicPlay, setIsMusicPlay] = React.useState(false);

  const [mediaTime, setMediaTime] = React.useState(currentSong.time);

  const [progressLineWidth, setProgressLineWidth] = React.useState(0);

  const formatTime = (time) => {
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time - minutes * 60);

    let minuteValue;
    let secondValue;

    if(minutes < 10) {
        minuteValue = '0' + minutes;
    } else {
        minuteValue = minutes;
    }

    if (seconds < 10) {
        secondValue = '0' + seconds;
    } else {
        secondValue = seconds;
    }
    return [minuteValue, secondValue];
  }

  const setTime = () => {
    let timeToLeft = audioElement.current.duration - audioElement.current.currentTime;
    let [minuteValue, secondValue] = formatTime(timeToLeft);
    let progressLineLength = Math.floor((100 * audioElement.current.currentTime) / audioElement.current.duration);
    setProgressLineWidth(progressLineLength);
    setMediaTime(`${minuteValue}:${secondValue}`);
  }

  const handlePlayPauseMusic = () => {
    if (isMusicPlay) {
      audioElement.current.pause();
      setIsMusicPlay(false);
    } else {
      audioElement.current.play();
      setIsMusicPlay(true);
    }
  }

  const handlePlaylistItemClick = (evt) => {
    const currentSongIndex = evt.target.attributes[0].value;
    setIsMusicPlay(!isMusicPlay);
    handlePlayPauseMusic();
    setProgressLineWidth(0);
    setCurrentSong(currentPlaylist[currentSongIndex]);
    setMediaTime(currentPlaylist[currentSongIndex].time);
    setIsMusicPlay(!isMusicPlay);
    handlePlayPauseMusic();
  }

  const handleButtonToggleList = () => {
    setIsOpenList(!isOpenList);
  }

  const handleButtonTextToggle = () => {
    setIsDisplayText(!isDisplayText);
  }

  React.useEffect(() => {
    audioElement.current.addEventListener('canplay', setTime);
    audioElement.current.addEventListener('timeupdate', setTime);

    return function removeEvents() {
      audioElement.current.removeEventListener('canplay', setTime);
      audioElement.current.removeEventListener('timeupdate', setTime);
    }
  })

  return(
    <div className="player">
      <audio
        className="player__audio"
        src={currentSong.audioSrc}
        ref={audioElement}
      >
      </audio>
      <img
        className="player__song-cover"
        src={currentSong.coverSrc}
        alt={`Обложка песни ${currentSong.name} автора ${currentSong.authors}`}
      />
      <div className="player__controls">
        <button
          className="player__button-toggle-music-play"
          data-icon="P"
          aria-label="включить или выключить музыку"
          onClick={handlePlayPauseMusic}
        >
          {isMusicPlay ? "||" : "|>"}
        </button>
        <p className="player__song-title">{currentSong.name} - {currentSong.authors}</p>
        <div className="player__progress-bar">
          <div className="player__progress-bar-container">
            <div
              className="player__progress-bar-line-container"
              style={{
                width: `100%`
              }}
            >
              <div
                className="player__progress-bar-line"
                style={{
                  width: `${progressLineWidth}%`
                }}
              >
              </div>
            </div>
          </div>
        </div>
        <div
          className="player__timer"
        >
          <span
            aria-label="timer"
          >
            {mediaTime}
          </span>
        </div>
        <a
          className={currentSong.videoUrl ?
            "player__link-play-video player__link-play_visible"
          :
            "player__link-play-video player__link-play_hidden"
          }
          href={currentSong.videoUrl}
          target="_blank"
          rel="noreferrer"
        >
          {'> Клип'}
        </a>
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
            songsData.map((song, index) =>
              <li
                data-index={index}
                key={song.id}
                className="player__playlist-item"
                lang={song.lang}
                onClick={handlePlaylistItemClick}
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
