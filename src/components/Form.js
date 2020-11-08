import React from 'react';
import { useInput } from '../hooks/useInput';
import FormError from './FormError';
import ResponseError from './ResponseError';
import formConfig from '../utils/formConfig';
import api from '../utils/api';

function Form() {

  const {value:fullName, bind:bindFullName, reset:resetFullName, isValid:isValidFullName, validationMessage:fullNameValidationMessage, inputClassName:fullNameClassName, errorClassName:fullNameErrorClassName} = useInput('');
  const {value:tel, bind:bindTel, reset:resetTel, isValid:isValidTel, validationMessage:telValidationMessage, inputClassName:telClassName, errorClassName:telErrorClassName} = useInput('');
  const {value:email, bind:bindEmail, reset:resetEmail, isValid:isValidEmail, validationMessage:emailValidationMessage, inputClassName:emailClassName, errorClassName:emailErrorClassName} = useInput('');
  const {value:poems, bind:bindPoems, reset:resetPoems, isValid:isValidPoems, validationMessage:poemsValidationMessage, inputClassName:poemsClassName, errorClassName:poemsErrorClassName} = useInput('');
  const {value:offer, bind:bindOffer, reset:resetOffer, isValid:isValidOffer, validationMessage:offerValidationMessage, inputClassName:offerClassName, errorClassName:offerErrorClassName} = useInput(false);

  const [isSuccesfullSubmit, setIsSuccesfullSubmit] = React.useState(false);

  const [submitErrorMessage, setSubmitErrorMessage] = React.useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    api.post({fullName, tel, email, poems, offer})
      .then((res) => {
        console.log(res);
        setIsSuccesfullSubmit(true);
        resetFullName();
        resetTel();
        resetEmail();
        resetPoems();
        resetOffer();
      })
      .catch((err) => {
        setIsSuccesfullSubmit(false);
        setSubmitErrorMessage(formConfig.errorSubmitText);
        console.log(err);
      })
  }

  return(
    <>
      <h2 className="forms__title title">{formConfig.title}</h2>
      <p className="forms__paragraph paragraph">{formConfig.subtitle}</p>
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
            className={fullNameClassName}
            aria-label="Имя и фамилия автора"
            placeholder="Имя и фамилия автора"
            id="fullName"
            pattern="(^[A-Za-zА-Яа-я]{1,16})([ ]{0,1})([A-Za-zА-Яа-я]{1,16})?([ ]{0,1})?([A-Za-zА-Яа-я]{1,16})?([ ]{0,1})?([A-Za-zА-Яа-я]{1,16})"
            minLength="2"
            required
            disabled={isSuccesfullSubmit}
            {...bindFullName}
          />
          <FormError
            name="fullName"
            className={fullNameErrorClassName}
            errorMessage={fullNameValidationMessage}
          />
        </fieldset>
        <fieldset
          className="form__fieldset"
          aria-label="Контактные данные"
        >
          <input
            type="tel"
            name="tel"
            className={telClassName}
            aria-label="Телефонный номер"
            placeholder="Телефон"
            pattern="^[0-9]*$"
            id="tel"
            required
            disabled={isSuccesfullSubmit}
            {...bindTel}
          />
          <FormError
            name="tel"
            className={telErrorClassName}
            errorMessage={telValidationMessage}
          />
          <input
            type="email"
            name="email"
            className={emailClassName}
            aria-label="Электронная почта"
            placeholder="Почта"
            id="email"
            required
            disabled={isSuccesfullSubmit}
            {...bindEmail}
          />
          <FormError
            name="email"
            className={emailErrorClassName}
            errorMessage={emailValidationMessage}
          />
        </fieldset>
        <fieldset
          className="form__fieldset"
          aria-label="Ваши стихотворения"
        >
          <textarea
            name="poems"
            className={poemsClassName}
            aria-label="Стихи"
            placeholder="Стихи"
            id="poems"
            minLength="3"
            maxLength="500"
            required
            disabled={isSuccesfullSubmit}
            {...bindPoems}
          >
          </textarea>
          <FormError
            name="poems"
            className={poemsErrorClassName}
            errorMessage={poemsValidationMessage}
          />
        </fieldset>
        <fieldset
          className="form__fieldset"
          aria-label="Согласие с офертой"
        >
          <label className="form__checkbox-label">
            <span
              className={
              offer ?
              "form__checkbox-mark form__checkbox-mark_checked"
                :
              "form__checkbox-mark"
              }
            >
            </span>
            <input
              type="checkbox"
              name="offer"
              className="form__checkbox-input"
              aria-label="Согласен с офертой"
              id="offer"
              required
              value={offer}
              checked={offer}
              disabled={isSuccesfullSubmit}
              {...bindOffer}
            />
            Согласен с <a className="form__link" href="https://ru.wikipedia.org/wiki/Оферта" target="_blank" rel="noreferrer">офертой</a>
          </label>
          <FormError
            name="offer"
            className={offerErrorClassName}
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
          {isSuccesfullSubmit ? formConfig.successfulSubmitButtonText : "Отправить форму"}
        </button>
        <ResponseError
          name="responseError"
          className={
            !isValidFullName &&
            !isValidTel &&
            !isValidEmail &&
            !isValidPoems &&
            !isValidOffer &&
            isSuccesfullSubmit ? "form__input-error form__input-error_active" : "form__input-error"}
          errorMessage={submitErrorMessage}
        />
      </form>
    </>
  )
}

export default Form;
