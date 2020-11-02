import React from 'react';

function FormComponent(props) {
  return(
    <form
      className="form"
      name="poem"
      onSubmit={props.handleSubmit}
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
          onChange={props.handleChange}
          value={props.fullName}
          id="fullName"
          required
        />
        <span className="form__input-error" id="fullName-error" role="status" aria-live="polite"></span>
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
          value={props.email}
          onChange={props.handleChange}
          id="email"
          required
        />
        <span className="form__input-error" id="email-error" role="status" aria-live="polite"></span>
        <input
          type="tel"
          name="tel"
          className="form__input"
          aria-label="Телефонный номер"
          placeholder="Телефон"
          value={props.tel}
          onChange={props.handleChange}
          id="tel"
          required
        />
        <span className="form__input-error" id="tel-error" role="status" aria-live="polite"></span>
      </fieldset>
      <fieldset
        className="form__fieldset"
        aria-label="Ваши стихотворения"
      >
        <textarea
          name="poems"
          className="form__textarea"
          aria-label="Стихи"
          placeholder="Стихи"
          value={props.poems}
          onChange={props.handleChange}
          id="poems"
          required
        >
        </textarea>
        <span className="form__input-error" id="poems-error" role="status" aria-live="polite"></span>
      </fieldset>
      <fieldset
        className="form__fieldset"
        aria-label="Согласие с офертой"
      >
        <label>
        <input
          type="checkbox"
          name="offer"
          className="form__input"
          aria-label="Согласен с офертой"
          value={props.agreements.offer}
          checked={props.agreements.offer}
          onChange={props.handleChange}
          id="offer"
          required
        />
        Согласен с <a href="https://ru.wikipedia.org/wiki/Оферта" target="_blank" rel="noreferrer">офертой</a>
        </label>
        <span className="form__input-error" id="offer-error" role="status" aria-live="polite"></span>
      </fieldset>
      <button
        className="form__submit-button"
        type="submit"
      >
        Отправить
      </button>
    </form>
  )
}

export default FormComponent;
