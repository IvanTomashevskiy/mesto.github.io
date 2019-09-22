class Popup {
    constructor(popupOpen, popupClose) {
        this.popupOpen = popupOpen
        this.popupClose = popupClose

        this.popupOpen
        document.querySelector('.user-info__button')
            .addEventListener('click', this.open);

        this.popupClose
        document.querySelector('.popup__close')
            .addEventListener('click', this.close);

    }
    open() {
        popup.classList.add('popup_is-opened')

    }
    close() {
        popup.classList.remove('popup_is-opened')

    }

}
const popupFirst = new Popup(document.querySelector(".popup"))

class Popupthird {
    constructor(popupOpen, popupClose) {
        this.popupOpen = popupOpen
        this.popupClose = popupClose
        this.popupOpen
        document.querySelector('.user-info__buttonedit')
            .addEventListener('click', this.open);
        this.popupClose
        document.querySelector('.popupedit__close')
            .addEventListener('click', this.close);
    }
    open() {
        popupEdit.classList.add('popup_is-opened')
    }
    close() {
        popupEdit.classList.remove('popup_is-opened')
    }
}
const popupthird = new Popupthird(document.querySelector(".popup__edit"))

class Popupsecond {
    constructor(popupClose) {
        this.popupClose = popupClose
        this.popupClose
        document.querySelector('.popupimg__close')
            .addEventListener('click', this.close);
    }

    close() {
        popupImg.classList.remove('popup_is-opened')
        document.querySelector('.image__big').remove('.popup__bigimg')
    }
}
const popupsecond = new Popupsecond(document.querySelector(".popup__img"))