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

// swiper


new Swiper(".slider-cards", {
  spaceBetween: 20,
  wrapperClass: "slider-cards__wrapper",
  slideClass: "slider-card",
  direction: "horizontal",
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
      bulletClass: "slider-card__bullet",
      bulletActiveClass: "slider-card__bullet_active",
  },
});


/*
const swiper = new Swiper(".slider", {
  slidesPerView: 3,
  spaceBetween: 80,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 80,
    },
    768: {
      centeredSlides: false,
      slidesPerView: 2,
      spaceBetween: 28,
    },
    320: {
      centeredSlides: true,
      slidesPerView: 1,
      spaceBetween: 80,
    },
  },
});
*/


