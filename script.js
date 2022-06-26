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
    'chili',
    'fideo',
    'electricista',
    'atardecer'
];

let h1 = document.querySelector("#randomWord")
let input = document.querySelector("input")

function randomWord(){
    return words[Math.floor(Math.random()*(words.length))]
}

let palabraAleatoria = randomWord()
let time = 10
let score = 0

function addToDOM (){
    h1.textContent = palabraAleatoria
}
addToDOM();

let palabraIngresada = "";

input.addEventListener("keypress", function(e){
    palabraIngresada += e.key;
    let compare = () => palabraAleatoria === palabraIngresada;
    if(compare()){
        time += 3
        palabraAleatoria = randomWord()
        palabraIngresada = ""
        addToDOM()
        input.value = null
    }
})

function actualizarTiempo(){}









