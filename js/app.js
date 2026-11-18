const board = document.querySelector('.board')
const triesText = document.querySelector('.tries')
const timeText = document.querySelector('.time')
const bestText=document.querySelector('.best')
const message = document.querySelector('.message')
const btnRestart = document.querySelector('.restart')

const emojis =['🍎', '🍌', '🍇', '🍓', '🍒', '🥝', '🍑', '🍍'];

const makeCards=()=>[...emojis,...emojis]


const render=(cards)=>{
    board.innerHTML=''

    cards.array.forEach((emoji)=>{
        const card = document.createElement('button')

        card.classList.add('card')
        card.dataset.emoji=emoji

        board.appendChild(card)
    });

}


render(makeCards())