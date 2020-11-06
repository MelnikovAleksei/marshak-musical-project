import React from 'react';

function ResponseError(props) {
  return(
    <span
      className={props.className}
      id={`${props.name}-error`}
      role="status"
      aria-live="polite"
    >
      {props.errorMessage}
    </span>
  )
}

export default ResponseError;
