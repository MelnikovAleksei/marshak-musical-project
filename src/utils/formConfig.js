const formConfig = {
  id: 1,
  title: 'Форма',
  name: 'poems',
  buttons: [
    {
      id: 1,
      title: 'Отправить',
      label: 'Отправить форму',
      type: 'submit'
    }
  ],
  fieldsets: [
    {
      id: 1,
      label: 'Имя и фамилия автора',
      inputFields: [
        {
          id: 1,
          element: 'input',
          label: 'Имя и фимилия автора',
          placeholder: 'Имя и фимилия автора',
          type: 'text',
          name: 'fullName',
          isRequired: true
        }
      ]
    },
    {
      id: 2,
      label: 'Контактные данные',
      inputFields: [
        {
          id: 1,
          element: 'input',
          label: 'Почта',
          placeholder: 'Почта',
          type: 'email',
          name: 'email',
          isRequired: true
        },
        {
          id: 2,
          element: 'input',
          label: 'Телефон',
          placeholder: 'Телефон',
          type: 'tel',
          name: 'tel',
          isRequired: true
        }
      ]
    },
    {
      id: 3,
      label: 'Текст стихотворений',
      inputFields: [
        {
          id: 1,
          element: 'textarea',
          label: 'Текст стихотворений',
          placeholder: 'Стихи',
          type: '',
          name: 'poems',
          isRequired: true
        }
      ]
    },
    {
      id: 4,
      label: 'Согласия с правилами',
      inputFields: [
        {
          id: 1,
          element: 'input',
          label: 'Согласен с офертой',
          placeholder: '',
          type: 'checkbox',
          name: 'offer',
          isRequired: true
        }
      ]
    }
  ]
}

export default formConfig;
