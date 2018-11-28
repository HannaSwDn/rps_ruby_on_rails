// DOM variables
let rock, paper, scissors

// global variables
let userChoice, computerChoice, win, gameover, p_points, p_status
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
    p_status = document.querySelector('#status')

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

    win.style.display = 'none'
    gameover.style.display = 'none'
})

const addUserPoints = () => {
    userPoints++
    p_status.innerHTML = `Computer chose ${computerChoice}, you chose ${userChoice}`
    displayPoints()
    checkPoints()
}

const addComputerPoints = () => {
    computerPoints++
    p_status.innerHTML = `Computer chose ${computerChoice}, you chose ${userChoice}`
    displayPoints()
    checkPoints()
}

const displayPoints = () => {
    if (userPoints == computerPoints) {
        p_points.innerHTML = `${userPoints} - ${computerPoints}`
    } else if (userPoints > computerPoints) {
        p_points.innerHTML = `${userPoints} - ${computerPoints} to you`
    } else {
        p_points.innerHTML = `${computerPoints} - ${userPoints} to the computer`
    }
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
        p_status.innerHTML = `It is a tie, nobody gets a point`
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

const startOver = () => {
    win.style.display = 'none'
    gameover.style.display = 'none'
    userPoints = 0
    computerPoints = 0
    p_points.innerHTML = `0 - 0`
    p_status.innerHTML = ''
}