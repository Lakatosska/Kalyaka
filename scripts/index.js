// Форма

const formElement = document.querySelector('.form')

const nameInput = formElement.querySelector('.form__input_type_name')
const emailInput = formElement.querySelector('.form__input_type_email')
const messageInput = formElement.querySelector('.form__input_type_message')

const applicationButton = formElement.querySelector('.button_place_form')

applicationButton.addEventListener('click', () => {
  nameInput.value
  emailInput.value
  messageInput.value
})

function formSubmitHandler (evt) {
  evt.preventDefault()
}

formElement.addEventListener('submit', formSubmitHandler)

// Слайдер





