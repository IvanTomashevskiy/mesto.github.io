import Card from './card.js';
export default class CardList {
    constructor(container) {
        this.container = container;
    }
    addCard(name, link) {
        const { cardElement } = new Card(name, link);
        this.container.appendChild(cardElement);
    }
    render(cards) {
        for (const card of cards) {
            this.addCard(card.name, card.link);
          }
    }
<<<<<<< HEAD
}
=======
}
>>>>>>> 4635d408c12772d705b8a60d73cb1ef67d385666
