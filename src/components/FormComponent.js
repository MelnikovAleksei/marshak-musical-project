import React from 'react';
import FormError from './FormError';

function FormComponent(props) {
  return(
    <form
      className="form"
      name="poem"
      onSubmit={props.handleSubmit}
      noValidate
    >
      <fieldset
        className="form__fieldset"
        aria-label="Имя и фамилия автора"
      >
        <input
          type="text"
          name="fullName"
          className={props.fullNameError ? "form__input form__input_state_error" : "form__input"}
          aria-label="Имя и фамилия автора"
          placeholder="Имя и фамилия автора"
          onChange={props.handleChange}
          value={props.fullName}
          id="fullName"
          pattern="(^[A-Za-zА-Яа-я]{1,16})([ ]{0,1})([A-Za-zА-Яа-я]{1,16})?([ ]{0,1})?([A-Za-zА-Яа-я]{1,16})?([ ]{0,1})?([A-Za-zА-Яа-я]{1,16})"
          minLength="2"
          required
        />
        <FormError
          name={'fullName'}
          errorMessage={props.fullNameError}
        />
      </fieldset>
      <fieldset
        className="form__fieldset"
        aria-label="Контактные данные"
      >
        <input
          type="email"
          name="email"
          className={props.emailError ? "form__input form__input_state_error" : "form__input"}
          aria-label="Электронная почта"
          placeholder="Почта"
          value={props.email}
          onChange={props.handleChange}
          id="email"
          required
        />
        <FormError
          name={'email'}
          errorMessage={props.emailError}
        />
        <input
          type="tel"
          name="tel"
          className={props.telError ? "form__input form__input_state_error" : "form__input"}
          aria-label="Телефонный номер"
          placeholder="Телефон"
          value={props.tel}
          onChange={props.handleChange}
          pattern="^[0-9]*$"
          id="tel"
          required
        />
        <FormError
          name={'tel'}
          errorMessage={props.telError}
        />
      </fieldset>
      <fieldset
        className="form__fieldset"
        aria-label="Ваши стихотворения"
      >
        <textarea
          name="poems"
          className={props.poemsError ? "form__input form__input_state_error" : "form__input"}
          aria-label="Стихи"
          placeholder="Стихи"
          onChange={props.handleChange}
          id="poems"
          minLength="3"
          maxLength="500"
          required
        >
        </textarea>
        <FormError
          name={'poems'}
          errorMessage={props.poemsError}
        />
      </fieldset>
      <fieldset
        className="form__fieldset"
        aria-label="Согласие с офертой"
      >
        <label>
        <input
          type="checkbox"
          name="offer"
          className={props.offerError ? "form__input form__input_state_error" : "form__input"}
          aria-label="Согласен с офертой"
          value={props.offer}
          checked={props.offer}
          onChange={props.handleChange}
          id="offer"
          required
        />
        Согласен с <a href="https://ru.wikipedia.org/wiki/Оферта" target="_blank" rel="noreferrer">офертой</a>
        </label>
        <FormError
          name={'offer'}
          errorMessage={props.offerError}
        />
      </fieldset>
      <button
        className="form__submit-button"
        type="submit"
        disabled={!props.formState}
      >
        Отправить
      </button>
    </form>
  )
}

export default FormComponent;
