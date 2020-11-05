import React from 'react';
import { useInput } from '../hooks/useInput';
import FormError from './FormError';
import formConfig from '../utils/formConfig';
import api from '../utils/api';

function Form(props) {

  const {value:fullName, bind:bindFullName, reset:resetFullName, isValid:isValidFullName, validationMessage:fullNameValidationMessage} = useInput('');
  const {value:tel, bind:bindTel, reset:resetTel, isValid:isValidTel, validationMessage:telValidationMessage} = useInput('');
  const {value:email, bind:bindEmail, reset:resetEmail, isValid:isValidEmail, validationMessage:emailValidationMessage} = useInput('');
  const {value:poems, bind:bindPoems, reset:resetPoems, isValid:isValidPoems, validationMessage:poemsValidationMessage} = useInput('');
  const {value:offer, bind:bindOffer, reset:resetOffer, isValid:isValidOffer, validationMessage:offerValidationMessage} = useInput(false);

  const [isSuccesfullSubmit, setIsSuccesfullSubmit] = React.useState(false);

  const [submitErrorMessage, setSubmitErrorMessage] = React.useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    api.post({fullName, tel, email, poems, offer})
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        setSubmitErrorMessage(formConfig.errorSubmitText);
        console.log(err);
      })
      .finally(() => {
        setIsSuccesfullSubmit(true);
        resetFullName();
        resetTel();
        resetEmail();
        resetPoems()
        resetOffer()
      })
  }

  return(
    <>
      <h2 className="title">{formConfig.title}</h2>
      <p className="paragraph">{formConfig.subtitle}</p>
      <form
        className="form"
        name="poem"
        onSubmit={handleSubmit}
        noValidate
      >
        <fieldset
          className="form__fieldset"
          aria-label="Имя и фамилия автора"
        >
          <input
            type="text"
            name="fullName"
            className="form__input"
            aria-label="Имя и фамилия автора"
            placeholder="Имя и фамилия автора"
            id="fullName"
            pattern="(^[A-Za-zА-Яа-я]{1,16})([ ]{0,1})([A-Za-zА-Яа-я]{1,16})?([ ]{0,1})?([A-Za-zА-Яа-я]{1,16})?([ ]{0,1})?([A-Za-zА-Яа-я]{1,16})"
            minLength="2"
            required
            {...bindFullName}
          />
          <FormError
            name="fullName"
            errorMessage={fullNameValidationMessage}
          />
        </fieldset>
        <fieldset
          className="form__fieldset"
          aria-label="Контактные данные"
        >
          <input
            type="email"
            name="email"
            className="form__input"
            aria-label="Электронная почта"
            placeholder="Почта"
            id="email"
            required
            {...bindEmail}
          />
          <FormError
            name="email"
            errorMessage={emailValidationMessage}
          />
          <input
            type="tel"
            name="tel"
            className="form__input"
            aria-label="Телефонный номер"
            placeholder="Телефон"
            pattern="^[0-9]*$"
            id="tel"
            required
            {...bindTel}
          />
          <FormError
            name="tel"
            errorMessage={telValidationMessage}
          />
        </fieldset>
        <fieldset
          className="form__fieldset"
          aria-label="Ваши стихотворения"
        >
          <textarea
            name="poems"
            className="form__input"
            aria-label="Стихи"
            placeholder="Стихи"
            id="poems"
            minLength="3"
            maxLength="500"
            required
            {...bindPoems}
          >
          </textarea>
          <FormError
            name="poems"
            errorMessage={poemsValidationMessage}
          />
        </fieldset>
        <fieldset
          className="form__fieldset"
          aria-label="Согласие с офертой"
        >
          <label className="form__checkbox-label">
            <input
              type="checkbox"
              name="offer"
              className="form__input"
              aria-label="Согласен с офертой"
              id="offer"
              required
              value={offer}
              checked={offer}
              {...bindOffer}
            />
            Согласен с <a href="https://ru.wikipedia.org/wiki/Оферта" target="_blank" rel="noreferrer">офертой</a>
          </label>
          <FormError
            name="offer"
            errorMessage={offerValidationMessage}
          />
        </fieldset>
        <button
          className="form__submit-button"
          type="submit"
          disabled={
            !isValidFullName ||
            !isValidTel ||
            !isValidEmail ||
            !isValidPoems ||
            !isValidOffer ||
            isSuccesfullSubmit
          }
        >
          {isSuccesfullSubmit ? formConfig.successfulSubmitButtonText : "Отправить Форму"}
        </button>
        <FormError
          name="responseError"
          errorMessage={submitErrorMessage}
        />
      </form>
    </>
  )
}

export default Form;
