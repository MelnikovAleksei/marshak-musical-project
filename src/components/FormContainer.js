import React from 'react';
import FormComponent from './FormComponent';
import Input from './Input';
import Textarea from './Textarea';
import formConfig from '../utils/formConfig';


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
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    const {name, value, type, checked} = evt.target;
    type === 'checkbox' ?
    this.setState({
      agreements: {
        [name]: checked
      }
    })
    :
    this.setState({
      [name]: value
    })
  }

  handleSubmit(evt) {
    evt.preventDefault();
    alert(`${this.state.fullName}, ${this.state.email}, ${this.state.tel}, ${this.state.poems}, ${this.state.agreements.offer.toString()}`)
    evt.target.reset();
  }

  render() {
      const fieldSets = formConfig.fieldsets.map((fieldset) =>
        <fieldset aria-label={fieldset.label} key={fieldset.id}>
          {fieldset.inputFields.map((input) => {
            if (input.element === 'textarea') {
              return (
                <Textarea
                  key={input.id}
                  config={input}
                  handleChange={this.handleChange}
                  {...this.state}
                />
              )
            } else {
              return (
                <Input
                  key={input.id}
                  config={input}
                  handleChange={this.handleChange}
                  {...this.state}
                />
              )
            }
          })}
        </fieldset>
      )

      const buttons = formConfig.buttons.map((button) =>
        <button
          key={button.id}
          aria-label={button.label}
          type={button.type}
        >
          {button.title}
        </button>
      )


    return(
      <FormComponent
        key={formConfig.id}
        handleSubmit={this.handleSubmit}
        title={formConfig.title}
        name={formConfig.name}
      >
        {fieldSets}
        {buttons}
      </FormComponent>
    )
  }
}

export default FormContainer;
