// DOM variables
let rock, paper, scissors

// global variables
let userChoice, computerChoice, win, gameover, p_points
let userPoints = 0
let computerPoints = 0

// setting DOM variables when the DOM is loaded
document.addEventListener('DOMContentLoaded', event => {
    rock = document.querySelector('#rock')
    paper = document.querySelector('#paper')
    scissors = document.querySelector('#scissors')
    win = document.querySelector('#win')
    gameover = document.querySelector('#gameover')
    p_points = document.querySelector('#points')

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
    p_points.innerHTML = `Your points: ${userPoints} | Computer points: ${computerPoints}`
    checkPoints()
}

const addComputerPoints = () => {
    computerPoints++
    p_points.innerHTML = `Your points: ${userPoints} | Computer points: ${computerPoints}`
    checkPoints()
}

const checkPoints = () => {
    if (userPoints == 3) {
        win.style.display = 'block'
    } else if (computerPoints == 3) {
        gameover.style.display = 'block'
    }
}

const determineRoundWinner = () => {
    if (userChoice == computerChoice) {
        return
    } else if (userChoice == 'rock' && computerChoice == 'paper') {
        addComputerPoints()
    } else if (userChoice == 'rock' && computerChoice == 'scissors') {
        addUserPoints()
    } else if (userChoice == 'paper' && computerChoice == 'rock') {
        addUserPoints()
    } else if (userChoice == 'paper' && computerChoice == 'scissors') {
        addComputerPoints()
    } else if (userChoice == 'scissors' && computerChoice == 'rock') {
        addComputerPoints()
    } else if (userChoice == 'scissors' && computerChoice == 'paper') {
        addUserPoints()
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
    determineRoundWinner()
}