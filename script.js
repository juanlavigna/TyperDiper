const words = [
    'californication',
    'plataforma5',
    'black',
    'summer',
    'flea',
    'aeroplane',
    'peppers',
    'unlimited',
    'arcadium',
    'love',
    'getaway',
    'stadium',
    'quixoticelixer',
    'quarter',
    'snow',
    'dylan',
    'zephyr',
    'funky',
    'chili'
];

let amount = words.length

function randomNumber (){
    return Math.floor(Math.random()*amount)
}

function randomWord (){
    return words[randomNumber()]
}

let h1 = document.querySelector("h1");
let input = document.querySelector("input")
let palabraAleatoria = randomWord()
let palabraIngresada = "";

input.addEventListener("keydown", function(e){
    palabraIngresada += e.key;
})

h1.textContent = randomWord();


function time (){

}

function score (){

}

function addToDOM (){

}
