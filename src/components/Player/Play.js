import React from "react";
import PlayIcon from '@material-ui/icons/PlayArrow';

export default function Play(props) {
  const { handleClick } = props;

  return (
    <button className="player__button" onClick={() => handleClick()}>
      <PlayIcon />
    </button>
  );
}
