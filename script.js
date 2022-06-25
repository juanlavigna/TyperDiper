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

let palabraAleatoriaH1 = document.querySelector("h1");

palabraAleatoriaH1.textContent = randomWord()

function time (){

}

function score (){

}

function addToDOM (){

}
