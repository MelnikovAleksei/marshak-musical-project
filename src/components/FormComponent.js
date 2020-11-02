import React from 'react';

function FormComponent(props) {
  return(
    <>
      <h2>{props.title}</h2>
      <form
        name={props.name}
        onSubmit={props.handleSubmit}
      >
        {props.children}
      </form>
    </>
  )
}

export default FormComponent;
