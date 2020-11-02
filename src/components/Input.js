import React from 'react';

function Input(props) {
  return(
    <>
      {props.config.type === 'checkbox' ?
        <input
          type={props.config.type}
          aria-label={props.config.label}
          name={props.config.name}
          placeholder={props.config.placeholder}
          required={props.config.isRequired}
          checked={props.agreements.offer}
          onChange={props.handleChange}
        />
      :
        <input
          type={props.config.type}
          aria-label={props.config.label}
          name={props.config.name}
          placeholder={props.config.placeholder}
          required={props.config.isRequired}
          onChange={props.handleChange}
        />
      }
    </>
  )
}

export default Input;
