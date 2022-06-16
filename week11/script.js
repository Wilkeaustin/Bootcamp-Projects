const X_CLASS = 'x'
const CIRCLE_CLASS = 'circle'
const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]
const cellElements = document.querySelectorAll('[data-cell]')
const board = document.getElementById('board')
const winningMessageElement = document.getElementById('winningMessage')
const restartButton = document.getElementById('restartButton')
const winningMessageTextElement = document.querySelector('[data-winning-message-text]')
let circleTurn

startGame()

restartButton.addEventListener('click', startGame)

function startGame() {
    circleTurn = false
    cellElements.forEach(cell => {
        cell.classList.remove(X_CLASS)
        cell.classList.remove(CIRCLE_CLASS)
        cell.removeEventListener('click', handleClick)
        cell.addEventListener('click', handleClick, { once: true})
    })
    setBoardHoverClass()
    winningMessageElement.classList.remove('show')
}

function handleClick(e) {
    const cell = e.target
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS
    placeMark(cell, currentClass)
    if (checkWin(currentClass)) {
        endGame(false)
    } else if(isDraw()) {
        endGame(true)
    } else {
        swapTurns()
        setBoardHoverClass()
    }
}

function endGame(draw) {
    if(draw) {
        winningMessageTextElement.innerText = 'Draw!'
    } else {
        winningMessageTextElement.innerText = `${circleTurn ? "O's" : "X's"} Wins!`
    }
    winningMessageElement.classList.add('show')
}

function isDraw() {
    return [...cellElements].every(cell => {
        return cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
    })
}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass)
}

function swapTurns() {
    circleTurn = !circleTurn
}

function setBoardHoverClass() {
    board.classList.remove(X_CLASS)
    board.classList.remove(CIRCLE_CLASS)
    if(circleTurn) {
        board.classList.add(CIRCLE_CLASS)
    } else {
        board.classList.add(X_CLASS)
    }
}

function checkWin(currentClass) {
    return WINNING_COMBINATIONS.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentClass)
        })
    })
}
// const square1 = document.getElementById('square1');
// const square2 = document.getElementById('square2');
// const square3 = document.getElementById('square3');
// const square4 = document.getElementById('square4');
// const square5 = document.getElementById('square5');
// const square6 = document.getElementById('square6');
// const square7 = document.getElementById('square7');
// const square8 = document.getElementById('square8');
// const square9 = document.getElementById('square9');

// const body = document.body
// const button1 = document.querySelector('section1');
// const button2 = document.querySelector('section2');
// const button3 = document.querySelector('section3');
// const button4 = document.querySelector('section4');
// const button5 = document.querySelector('section5');
// const button6 = document.querySelector('section6');
// const button7 = document.querySelector('section7');
// const button8 = document.querySelector('section8');
// const button9 = document.querySelector('section9');


// button1.addEventListener('click', e => {
//     if(turn == player1){
//     square1.innerText = 'X';
//     console.log(e);
//     } else {
//     square1.innerText = 'O';
//     }
// })

// button2.addEventListener('click', e => {
//     square2.innerText = 'X';
//     console.log(e);
// })

// button3.addEventListener('click', e => {
//     square3.innerText = 'X';
//     console.log(e);
// })

// button4.addEventListener('click', e => {
//     square4.innerText = 'X';
//     console.log(e);
// })

// button5.addEventListener('click', e => {
//     square5.innerText = 'X';
//     console.log(e);
// })

// button6.addEventListener('click', e => {
//     square6.innerText = 'X';
//     console.log(e);
// })
// button7.addEventListener('click', e => {
//     square7.innerText = 'X';
//     console.log(e);
// })

// button8.addEventListener('click', e => {
//     square8.innerText = 'X';
//     console.log(e);
// })

// button9.addEventListener('click', e => {
//     square9.innerText = 'X';
//     console.log(e);
// })

// if(section4.innerText + section5.innerText + section6.innerText == 'X') {
//     alert('You win!');
// }
