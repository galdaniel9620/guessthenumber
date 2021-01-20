const guessNumber = document.querySelector("#guessNumber")
const randomNumber = document.querySelector("#randomNumber")
const textTitle = document.querySelector('#textTitle')
const input = document.querySelector("#inputValue")
const submit = document.querySelector('#submit')

submit.addEventListener('click', function guessTheNumber () {
    let inputValue = input.value
    let randomNumberValue = randomNumberGenerator()

    guessNumber.innerHTML = inputValue
    randomNumber.innerHTML = randomNumberValue

    const lowerNumber = "Your number is smaller than random number."
    const greaterNumber = "Your number is larger than random number."
    const winNumber = "Great job! You guess the number."
    const emptyNumber = "Please insert a number."

    if(inputValue == 0 ){
        textTitle.textContent = emptyNumber
    }
    else if(inputValue < randomNumberValue) {
        textTitle.textContent = lowerNumber
    }
    else if(inputValue > randomNumberValue){
        textTitle.textContent = greaterNumber
    }
    else {
        textTitle.textContent = winNumber
    }

    
})

function randomNumberGenerator () {
    return Math.floor((Math.random() * 100) + 1)
}

