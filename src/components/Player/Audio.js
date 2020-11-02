import React from "react";

import Song from "./Song";
import Play from "./Play";
import Pause from "./Pause";
import Bar from "./Bar";

import useAudioPlayer from "./UseAudioPlayer";
import playerConfig   from "../../utils/playerConfig";

function Audio() {
  const {
    curTime,
    duration,
    playing,
    setPlaying,
    setClickedTime
  } = useAudioPlayer();

  return (
    <div className="player">
      <audio id="audio">
        <source src={playerConfig.audio} />
      </audio>
      <Song songName={playerConfig.songTitle} songArtist={playerConfig.songAuthor} />
      <div className="controls">
        {playing ? (
          <Pause handleClick={() => setPlaying(false)} />
        ) : (
          <Play handleClick={() => setPlaying(true)} />
        )}
        <Bar
          curTime={curTime}
          duration={duration}
          onTimeUpdate={(time) => setClickedTime(time)}
        />
      </div>
    </div>
  );
}

export default Audio;
