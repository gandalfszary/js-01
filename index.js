// na poczatku to czego chce uzywac 'podpinam'

const square01 = document.querySelector('.square--red')
const square02 = document.querySelector('.square--green')
const square03 = document.querySelector('.square--blue')

const button01 = document.querySelector('.button--01')
const button02 = document.querySelector('.button--02')
const button03 = document.querySelector('.button--03')

let test = 'podpiety'


button01.addEventListener('click', function() {
    // console.log(test)
    // square01.classList.toogle('.square')
    // toggle zongluje klasa -- w zasadziej dodaje klase w konsoli widac

    square01.classList.toggle('square--afterclick--01')


})

button02.addEventListener('click', function() {
    // console.log(test)

    square02.classList.toggle('square--afterclick--01')
})

button03.addEventListener('click', function() {
    // console.log(test)

    square03.classList.toggle('square--afterclick--02')
})

// w takim wypadku wszystkie 3 zmienia kalse na czarna a ostatni na zolty

const kwadratFioletLewy = document.querySelector('.square--01')
const przycisk01 = document.querySelector('.button--04')

przycisk01.addEventListener('click', function() {

    // console.log('show')

    kwadratFioletLewy.classList.toggle('square--01--change--01')
})

const kwadratFioletSrodek = document.querySelector('.square--02')
const przycisk02 = document.querySelector('.button--05')

przycisk02.addEventListener('click', function() {

    kwadratFioletSrodek.classList.toggle('square--01--change--02')
})


// const kwadratFioletPrawy = document.querySelector('.square--03')
// const przycisk03 = document.querySelector('.button--06')

// przycisk03.addEventListener('click', function before() {
//     document.getElementById('thisText')
// })

const sqBlack = document.querySelector('.square--04')
const but = document.querySelector('.button--06')
const pies = document.querySelector('thisText2')

but.addEventListener('click', function() {

    console.log('dzialaj')
    sqBlack.classList.toggle('square--05--change')
    document.getElementById('thisText2').innerHTML = 'ORION'

})


const lastSquare = document.querySelector('.square--last')
const lastBut = document.querySelector('.button--last')

lastBut.addEventListener('click', function() {
    console.log('siema')
})