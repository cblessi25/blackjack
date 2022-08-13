const startEl = document.querySelector('.start');
const msg = document.querySelector('#message-el');
const sumEl = document.querySelector('#sum-el');
let cardsEl = document.querySelector('.cards__el');
let newCardEl = document.querySelector('.new_card');
let dataObj = document.querySelector('#player__data');
let hasBlackJack = false;
let isAlive = false;
let message = '';
const nameInput = document.querySelector('#text');
let text = " ";
const valueInput = (e) => {

    text = e.target.value;
    dataObj.textContent = `${text}`;

}

nameInput.addEventListener('input', valueInput);

console.log(dataObj.textContent);

// Function declared as function are uphoisted, meaning can be called anywhere.

let sum = 0
let cards = [];

function randomCard() {
    //    if 1 ---> return 11
    //   if 2 ---> return 10 


    let num = Math.floor(Math.random() * 13) + 1;
    if (num === 1) return 11;
    else if (num >= 11) return 10;
    else { return num; }


}

const startGame = () => {
    isAlive = true;
    let firstCard = randomCard();
    let secondCard = randomCard();
    cards.push(firstCard, secondCard);
    sum = firstCard + secondCard;
    renderGame();
}


// console.log(cards);
function renderGame() {
    // ! First set cardsEl to string to avoid concatenation:
    cardsEl.textContent = "Cards:"

    for (let i = 0; i < cards.length; i++) {
        // console.log(cards[i]);
        cardsEl.textContent += cards[i] + " ";

    }
    sumEl.textContent = `Sum:${sum}`;


    if (sum <= 20) {

        message = 'Do you want to a new card?';
    } else if (sum === 21) {
        message = 'You\'ve hit a jackpot!';
        hasBlackJack = true;

        // newCardEl.disabled = true;
    } else {
        message = 'Yo\'ure out of the game ';
        isAlive = false;
    }

    msg.textContent = message;

}



const newCard = () => {

    if (isAlive && !hasBlackJack) {
        let nextCard = randomCard();
        sum += nextCard;
        cards.push(nextCard);
        renderGame();


    }


}



// newCardEl.addEventListener('click', newCard);

startEl.addEventListener('click', startGame);
newCardEl.addEventListener('click', newCard);