import React from 'react';

function Textarea(props) {
  return(
    <textarea
      aria-label={props.config.label}
      name={props.config.name}
      placeholder={props.config.placeholder}
      required={props.config.isRequired}
      onChange={props.handleChange}
    ></textarea>
  )
}

export default Textarea;
