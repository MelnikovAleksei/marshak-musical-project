import React from 'react';

function FormError({className, name, errorMessage}) {
  return(
    <span
      className={className}
      id={`${name}-error`}
      role="status"
      aria-live="polite"
    >
      {errorMessage}
    </span>
  )
}

export default FormError;
