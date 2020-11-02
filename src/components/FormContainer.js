import React from 'react';
import FormComponent from './FormComponent';

class FormContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      fullName: '',
      email: '',
      tel: '',
      poems: '',
      agreements: {
        offer: false
      }
    };
    this.initialState = this.state;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    const {name, value, type, checked} = evt.target;
    if(type === 'checkbox') {
      this.setState({
        agreements: {
          [name]: checked
        }
      })
    } else {
        this.setState({
          [name]: value
        })
    }
  }

  handleSubmit(evt) {
    evt.preventDefault();
    alert(`${this.state.fullName}, ${this.state.tel}, ${this.state.poems}, ${this.state.email}, ${this.state.agreements.offer}`)
    this.setState(this.initialState)
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
