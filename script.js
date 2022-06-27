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
let timeHTML = document.querySelector("#timeSpan")

function randomWord(){
    return words[Math.floor(Math.random()*(words.length))]
}

let palabraAleatoria = randomWord()

function addToDOM (){
    h1.textContent = palabraAleatoria
}
addToDOM();


let palabraIngresada = "";

input.addEventListener("keyup", function(e){
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

let time = 10

// function actualizarTiempo(){
//     time--;
//     timeHTML.textContent = time
//     if (time === 0) {
//     clearInterval(timeInterval);
//     }
// }   

let timeInterval = setInterval(function(){
    time--;
    timeHTML.textContent = time;
    if (time === 0) {
        clearInterval(timeInterval);
        }
},1000)

let score = 0










