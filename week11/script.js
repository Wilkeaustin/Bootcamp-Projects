const square1 = document.getElementById('square1');
const square2 = document.getElementById('square2');
const square3 = document.getElementById('square3');
const square4 = document.getElementById('square4');
const square5 = document.getElementById('square5');
const square6 = document.getElementById('square6');
const square7 = document.getElementById('square7');
const square8 = document.getElementById('square8');
const square9 = document.getElementById('square9');

const body = document.body
const button1 = document.querySelector('section1');
const button2 = document.querySelector('section2');
const button3 = document.querySelector('section3');
const button4 = document.querySelector('section4');
const button5 = document.querySelector('section5');
const button6 = document.querySelector('section6');
const button7 = document.querySelector('section7');
const button8 = document.querySelector('section8');
const button9 = document.querySelector('section9');


button1.addEventListener('click', e => {
    if(turn == player1){
    square1.innerText = 'X';
    console.log(e);
    } else {
    square1.innerText = 'O';
    }
})

button2.addEventListener('click', e => {
    square2.innerText = 'X';
    console.log(e);
})

button3.addEventListener('click', e => {
    square3.innerText = 'X';
    console.log(e);
})

button4.addEventListener('click', e => {
    square4.innerText = 'X';
    console.log(e);
})

button5.addEventListener('click', e => {
    square5.innerText = 'X';
    console.log(e);
})

button6.addEventListener('click', e => {
    square6.innerText = 'X';
    console.log(e);
})
button7.addEventListener('click', e => {
    square7.innerText = 'X';
    console.log(e);
})

button8.addEventListener('click', e => {
    square8.innerText = 'X';
    console.log(e);
})

button9.addEventListener('click', e => {
    square9.innerText = 'X';
    console.log(e);
})

