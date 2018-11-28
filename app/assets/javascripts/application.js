// DOM variables
let rock, paper, scissors

// global variables
let userPoints, computerPoints, userChoice, computerChoice, win, gameover, p_points

// setting DOM variables when the DOM is loaded
document.addEventListener('DOMContentLoaded', event => {
    rock = document.querySelector('#rock')
    paper = document.querySelector('#paper')
    scissors = document.querySelector('#scissors')
    win = document.querySelector('#win')
    gameover = document.querySelector('#gameover')
    p_points = documnet.querySelector('#points')

    rock.addEventListener('click', event => {
        userChoice = 'rock'
        generateComputerChoice()
    })

    paper.addEventListener('click', event => {
        userChoice = 'paper'
        generateComputerChoice()
    })

    scissors.addEventListener('click', event => {
        userChoice = 'scissors'
        generateComputerChoice()
    })
})

const addUserPoints = () => {
    userPoints++
    checkPoints()
}

const addComputerPoints = () => {
    computerPoints++
    checkPoints()
}

const checkPoints = () => {
    if (userPoints == 3) {
        // code here
    } else if (computerPoints == 3) {
        // code here
    }
}

const generateComputerChoice = () => {
    computerChoice = Math.floor(Math.random() * 3 + 1)

    switch(computerChoice) {
        case 1:
            computerChoice = 'rock'
            break
        case 2:
            computerChoice = 'paper'
            break
        case 3:
            computerChoice = 'scissors'
            break
    }
}