import "./style.css";
const serverUrl = NODE_ENV === 'development' ? 'http://praktikum.tk/название_группы' : 'https://praktikum.tk/название_группы'
const placesList = document.querySelector('.places-list');
const placeCard = document.querySelector('.place-card');
//const container = document.querySelector('.container')
const formNew = document.forms.new;
const popupOpen = document.querySelector('.user-info__button')
const popupEditOpen = document.querySelector('.user-info__buttonedit')
const popupEdit = document.querySelector('.popup__edit')
const popupImg = document.querySelector('.popup__img')
const popupImgContent = document.querySelector('.popup__content_img')
const name = document.querySelector('.user-info__name');
const job = document.querySelector('.user-info__job');
const popup = document.querySelector('.popup')
const popupEditButtonClose = document.querySelector('.popupedit__close')
const popupButtonImgClose = document.querySelector('.popupimg__close')
const popupButtonClose = document.querySelector('.popup__close')
const buttonDel = document.querySelector('.place-card__delete-icon')
const popupForm = document.querySelector('.popup__form')
const popupEditForm = document.querySelector('.popupedit__form')
const popupBtn = document.querySelector('.popup__button')
const avatar = document.querySelector('.user-info__photo')
const nik = document.querySelector('.popup__input_type_nik')
const about = document.querySelector('.popup__input_type_about')
const work = document.querySelector('#job');
const username = document.querySelector('#username');
const forme = document.querySelector('#form');
const submit = document.querySelector('#submit');

formNew.addEventListener('input', function () {
  const form = document.forms.new;
  const name = form.elements.name;
  const link = form.elements.link;

  if (name.value.length === 0 || link.value.length === 0) {
    popupBtn.disabled = true
    popupBtn.classList.add('input__btn_disabled');
    popupBtn.classList.remove('input__btn_active');


  } else {
    popupBtn.disabled = false
    popupBtn.classList.remove('input__btn_disabled');
    popupBtn.classList.add('input__btn_active');
  }

});

popupForm.addEventListener('submit', function (event) {
  event.preventDefault();
});

popupEditOpen.addEventListener('click', function () {
  const form = document.forms.edit
  const {
    nik,
    about
  } = form.elements
  nik.value = name.textContent;
  about.value = job.textContent;
});

const formEdit = document.querySelector('.popupedit__form')
const buttonSafe = document.querySelector('.popup__buttonsafe')
const fform = document.forms.edit;

formEdit.addEventListener('submit', function (event) {
  event.preventDefault();
});

buttonSafe.addEventListener('click', function (event) {
  const form = document.forms.edit
  const nik = form.elements.nik
  const about = form.elements.about
  api.setUserInfo(nik.value, about.value)
   .catch((err) => {
      console.log(err);
    });

  name.textContent = nik.value
  job.textContent = about.value
  popupEdit.classList.remove('popup_is-opened')
  formEdit.reset();
  event.preventDefault();
});


fform.addEventListener('input', function (event) {
  const fform = document.forms.edit;
  const nikname = fform.elements.nik
  const aboutme = fform.elements.about
  if (nikname.value.length === 0 || aboutme.value.length === 0) {
    buttonSafe.setAttribute('disabled', true);
    buttonSafe.classList.add('input__btn_disabled');
    buttonSafe.classList.remove('input__btn_active');
  } else {
    buttonSafe.removeAttribute('disabled', true);
    buttonSafe.classList.remove('input__btn_disabled');
    buttonSafe.classList.add('input__btn_active');
  }

});



// Слушатели
username.addEventListener('input', handleValidate);
work.addEventListener('input', handleValidate);

// Функции-обработчики
function handleValidate(event) {
  resetError(event.target);
  validate(event.target);
}

function validate(element) {
  const errorElement = document.querySelector(`#error-${element.id}`);
  if (!element.checkValidity()) {
    errorElement.textContent = element.validationMessage;
    activateError(errorElement);
    return false
  }
  return true
}

function activateError(element) {
  element.parentNode.classList.add('input-container__invalid');
}

function resetError(element) {
  element.parentNode.classList.remove('input-container__invalid');
  element.textContent = '';
}


const api = new Api('http://95.216.175.5/cohort2', '4b7cb798-500b-4486-9ae5-bb471da08f30')
const сardList = new CardList(placesList)


api.getInfo((userInfo) => {
  console.dir(userInfo);
  avatar.style.backgroundImage = `url(${userInfo.avatar})`;
  name.textContent = userInfo.name;
  job.textContent = userInfo.about;

});
api.getCards((cards) => {
  сardList.render(cards)
})

// Надо исправить - в консоли отображается ошибка
/**
 * Ошибка getInfo. Запрос не выполнен: TypeError: callback is not a function
        at api.js:21
    index.js:81 TypeError: Cannot read property 'name' of undefined
        at index.js:77
  */
 
// Не работает добавления карточек - ошибка в консоли
//  Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node'.
// at HTMLButtonElement.addCard (card-list.js:19)

// Не открывается большая фотография по клику на карточку - ошибка в консоли net::ERR_FILE_NOT_FOUND
