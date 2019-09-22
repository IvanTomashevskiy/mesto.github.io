class Card {
    constructor(name, link) {

        this.name = name
        this.link = link
        this.create(link)
        this.element
            .querySelector('.place-card__like-icon')
            .addEventListener('click', this.like);
        this.element
            .querySelector('.place-card__delete-icon')
            .addEventListener('click', this.remove);
        this.element
            .querySelector('.place-card__image')
            .addEventListener('click', this.open);
    }
    like(event) {
        console.log('!')
        event.target.classList.toggle('place-card__like-icon_liked');
    }
    remove(event) {
        placesList.removeChild(event.target.closest('.place-card'))
        event.stopPropagation();

    }
    create(link) {  
        const cardContainer = document.createElement('div');
        cardContainer.classList.add('place-card');

        const deleteCardButton = document.createElement('button');
        deleteCardButton.classList.add('place-card__delete-icon');

        const cardDescription = document.createElement('div');
        cardDescription.classList.add('place-card__description');

        const cardName = document.createElement('h3');
        cardName.classList.add('place-card__name');
        cardName.textContent = this.name

        const likeCardButton = document.createElement('button');
        likeCardButton.classList.add('place-card__like-icon');


        const cardBackground = document.createElement('div');
        cardBackground.classList.add('place-card__image')
        cardBackground.style.backgroundImage = `url(${this.link})`;


        cardBackground.addEventListener('click', function () {
            const imageBig = document.createElement('div');
            imageBig.classList.add('image__big');
            popupImgContent.appendChild(imageBig);

            popupImg.classList.add('popup_is-opened')
            const bigImg = document.createElement('div');
            bigImg.classList.add('popup__bigimg');
            imageBig.appendChild(bigImg);
            bigImg.style.backgroundImage = `url(${link})`; 


        });



        cardContainer.appendChild(cardBackground);
        cardBackground.appendChild(deleteCardButton);
        cardDescription.appendChild(cardName);
        cardDescription.appendChild(likeCardButton);
        cardContainer.appendChild(cardDescription);


        this.element = cardContainer;
    }


}

