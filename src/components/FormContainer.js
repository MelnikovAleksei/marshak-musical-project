import React from 'react';
import FormComponent from './FormComponent';
import api from '../utils/api';

class FormContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      fullName: '',
      email: '',
      tel: '',
      poems: '',
      fullNameError: '',
      emailError: '',
      telError: '',
      poemsError: '',
      offerError: '',
      fullNameState: false,
      emailState: false,
      telState: false,
      poemsState: false,
      offerState: false,
      formState: false,
      responseError: ''
    };
    this.initialState = {
      fullName: '',
      email: '',
      tel: '',
      poems: '',
      fullNameError: '',
      emailError: '',
      telError: '',
      poemsError: '',
      offerError: '',
      fullNameState: false,
      emailState: false,
      telState: false,
      poemsState: false,
      offerState: false,
      formState: false,
      responseError: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateForm() {
    this.setState({formState: this.state.fullNameState &&
                              this.state.emailState &&
                              this.state.telState &&
                              this.state.poemsState &&
                              this.state.offerState})
  }

  setValidState(fieldName, isValid, validationMessage) {
    if (!isValid) {
      this.setState({
        [`${fieldName}Error`]: validationMessage
      })
    } else {
      this.setState({
        [`${fieldName}Error`]: ''
      })
    }
    this.setState({
      [`${fieldName}State`]: isValid
    }, this.validateForm)
  }

  validateField(fieldName, evt) {
    let isValid = evt.target.validity.valid;
    let validationMessage = evt.target.validationMessage;
    switch (fieldName) {
      case 'fullName':
        this.setValidState(fieldName, isValid, 'В это поле введите имя и фамилию, разделенные пробелом. Например: "Евгений Евтушенко"')
        break;
      case 'email':
        this.setValidState(fieldName, isValid, validationMessage)
        break;
      case 'tel':
        this.setValidState(fieldName, isValid, 'В это поле введите номер телефона. Используйте только цифры')
        break;
      case 'poems':
        this.setValidState(fieldName, isValid, validationMessage)
        break;
      case 'offer':
        this.setValidState(fieldName, isValid, 'Для отправки формы необходимо ваше согласие с офертой')
        break;
      default:
        break;
    }
  }

  handleChange(evt) {
    const {name, value, type, checked} = evt.target;
    if(type === 'checkbox') {
      this.setState({
        [`${name}State`]: checked
      }, () => { this.validateField(name, evt) })
    } else {
        this.setState({
          [name]: value
        }, () => { this.validateField(name, evt) });
    }
  }

  handleSubmit(evt) {
    evt.preventDefault();
    api.post(this.state)
      .then(res => console.log(res))
      .catch((err) => {
        this.setState({responseError: `Произошла ошибка при отправке формы: ${err}`});
      })
    evt.target.reset();
    this.setState(this.initialState);
  }

  render() {
    return(
      <>
        <h2 className="title">Форма</h2>
        <FormComponent
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          {...this.state}
        >
        </FormComponent>
      </>
    )
  }
}

export default FormContainer;
