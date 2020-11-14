import { useState } from "react";

export const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);
  const [validationMessage, setValidityMessage] = useState(value);
  const [isValid, setIsValid] = useState(false);
  const [inputClassName, setClassName] = useState('form__input');
  const [errorClassName, setErrorClassName] = useState('form__input-error');

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
        if (event.target.validity.valid || event.target.checked) {
          setClassName('form__input');
          setErrorClassName('form__input-error');
        } else {
          setClassName('form__input form__input_error');
          setErrorClassName('form__input-error form__input-error_active');
        }
        setValidityMessage(event.target.validationMessage);
        setIsValid(event.target.validity.valid);
      }
    },
    isValid,
    validationMessage,
    inputClassName,
    errorClassName
  };
};
