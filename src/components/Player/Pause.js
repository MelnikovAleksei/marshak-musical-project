import React from "react";
import PauseIcon from '@material-ui/icons/Pause';

export default function Play(props) {
  const { handleClick } = props;

  return (
    <button className="player__button" onClick={() => handleClick()}>
      <PauseIcon />
    </button>
  );
}
