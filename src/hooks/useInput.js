import { useState } from "react";

export const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);
  const [validationMessage, setValidityMessage] = useState(value);
  const [isValid, setIsValid] = useState(false);

  return {
    value,
    setValue,
    reset: () => {
      setValue("");
      setIsValid(false);
    },
    bind: {
      value,
      onChange: event => {
        if(event.target.type === 'checkbox') {
          setValue(event.target.checked)
        } else {
          setValue(event.target.value)
        }
        setValidityMessage(event.target.validationMessage);
        setIsValid(event.target.validity.valid);
      }
    },
    isValid,
    validationMessage
  };
};
