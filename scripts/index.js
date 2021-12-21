// form

const formElement = document.querySelector('.form')
const nameInput = formElement.querySelector('.form__input_type_name')
const emailInput = formElement.querySelector('.form__input_type_email')
const messageInput = formElement.querySelector('.form__input_type_message')
const applicationButton = formElement.querySelector('.button_place_form')

applicationButton.addEventListener('click', () => {
  console.log(nameInput.value);
  console.log(emailInput.value);
  console.log(messageInput.value);
})

function formSubmitHandler (evt) {
  evt.preventDefault()
}

formElement.addEventListener('submit', formSubmitHandler)

// toggling cards

const cardsElement = document.querySelector('.cards')
const cardElement = cardsElement.querySelector('.card')
const radioButtonsElement = document.querySelector('.radio-buttons')
const radioButtonElement = radioButtonsElement.querySelector('.radio-button')

function clickCard(card) {
  card.forEach((element) => {
    element.classList.toggle('card_hidden')
  });
};

radioButtonElement.forEach((item) => {
  item.addEventListener('click', (evt) => {
    const activeButton = document.querySelector('.radio-button_active')
    activeButton.classList.remove('radio-button_active')
    evt.target.classList.add('radio-button_active')
    clickCard(cardElement)
  });
});




