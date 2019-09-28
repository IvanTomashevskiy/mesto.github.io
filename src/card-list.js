import Card from './card.js';

export default class CardList {
    constructor(container, cards) {
        this.container = container
        this.cards = cards;


        this.container
        document.querySelector('.popup__button')
            .addEventListener('click', this.addCard);

    }
    addCard() {
        const form = document.forms.new
        const {
            name,
            link
        } = form.elements
        const placeCard = new Card(name.value, link.value);
        placesList.appendChild(placeCard.element);
        popup.classList.remove('popup_is-opened');
        form.reset()

    }
    render(cards) {
        cards.forEach(card => {
            const cardComponent = new Card(card.name, card.link);
            this.container.appendChild(cardComponent.element);
        })

    }
    
}
