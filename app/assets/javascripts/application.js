// DOM variables
let rock, paper, scissors

// global variables
let userPoints, computerPoints, userChoice, computerChoice

// setting DOM variables when the DOM is loaded
document.addEventListener('DOMContentLoaded', event => {
    rock = document.querySelector('#rock')
    paper = document.querySelector('#paper')
    scissors = document.querySelector('#scissors')

    rock.addEventListener('click', event => {
        userChoice = 'rock'
    })

    paper.addEventListener('click', event => {
        userChoice = 'paper'
    })

    scissors.addEventListener('click', event => {
        userChoice = 'scissors'
    })
})