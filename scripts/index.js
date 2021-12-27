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

const cardsIntroElement = document.querySelector('.cards-intro')
const cardIntroElement = cardsIntroElement.querySelectorAll('.card')
const buttonIntroElement = cardsIntroElement.querySelectorAll('.radio-button')

const kalyakaElement = document.querySelector('.kalyaka-action')
const mockupElement = kalyakaElement.querySelectorAll('.mockups__image')
const buttonKalyakaElement = kalyakaElement.querySelectorAll('.radio-button')

const cardsNextElement = document.querySelector('.cards-next')
const cardNextElement = cardsNextElement.querySelectorAll('.card')
const buttonNextElement = cardsNextElement.querySelectorAll('.radio-button')

function clickCard(card) {
  card.forEach((element) => {
    element.classList.toggle('card_hidden')
  });
};

Array.from(buttonIntroElement).forEach((item) => {
  item.addEventListener('click', (evt) => {
    const activeButton = cardsIntroElement.querySelector('.radio-button_active')
    activeButton.classList.remove('radio-button_active')
    evt.target.classList.add('radio-button_active')
    clickCard(cardIntroElement)
  });
});

Array.from(buttonKalyakaElement).forEach((item, index) => {
  item.addEventListener('click', (evt) => {
    const activeButton = kalyakaElement.querySelector('.radio-button_active');
    activeButton.classList.remove('radio-button_active');
    evt.target.classList.add('radio-button_active');
    mockupElement.forEach((element, i) => {
      if (index === i) {
        element.classList.remove('mockups__image_hidden');
      } else {
        element.classList.add('mockups__image_hidden');
      }
    });
  });
});

Array.from(buttonNextElement).forEach((item) => {
  item.addEventListener('click', (evt) => {
    const activeButton = cardsNextElement.querySelector('.radio-button_active')
    activeButton.classList.remove('radio-button_active')
    evt.target.classList.add('radio-button_active')
    clickCard(cardNextElement)
  });
});





