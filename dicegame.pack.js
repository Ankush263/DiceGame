let player1Score = 0
let player2Score = 0
let player1Turn = true
const tossContainer = document.getElementById('toss')
const goBtn = document.getElementById('go')
const tossBtn = document.getElementById('toss-btn')
const container = document.getElementById('container')
const player = document.getElementById('player')
let num = Math.floor(Math.random() * 2) + 1


tossBtn.addEventListener('click',Toss)
goBtn.addEventListener('click',Go)



function Toss(){
    goBtn.style.display = "block"
    tossBtn.style.display = "none"
    player.textContent = num
}

function Go(){
    container.style.display = "block"
    tossContainer.style.display = "none"
    
    if(num === 1){
        message.textContent = "Player 1 Turn"
        player1Turn = true
        player2Turn = false
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        
    }else if(num === 2){
        message.textContent = "Player 2 Turn"
        player2Turn = true 
        player1Turn = false 
        player2Dice.classList.add("active")
        player1Dice.classList.remove("active")
    }
}


const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")

function showResetButton() {
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"
    container.classList.add('addbackground')
}

 rollBtn.addEventListener("click", function() {
    let randomNumber = Math.floor(Math.random() * 6) + 1

    if (player1Turn) {
        player1Score += randomNumber
        player1Scoreboard.textContent = player1Score
        player1Dice.textContent = randomNumber
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        message.textContent = "Player 2 Turn"
    } else {
        player2Score += randomNumber
        player2Scoreboard.textContent = player2Score
        player2Dice.textContent = randomNumber
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        message.textContent = "Player 1 Turn"
    }
    
    if (player1Score >= 20) {
        message.textContent = "Player 1 Won 🥳"
        showResetButton()
    }  else if (player2Score >= 20) {
        message.textContent = "Player 2 Won 🎉"
        showResetButton()
    }
    player1Turn = !player1Turn
})
 
resetBtn.addEventListener("click", function(){
    reset()
})

function reset() {
    player1Score = 0
    player2Score = 0
    player1Scoreboard.textContent = 0
    player2Scoreboard.textContent = 0
    player1Dice.textContent = "-"
    player2Dice.textContent = "-"
    resetBtn.style.display = "none"
    rollBtn.style.display = "block"
    container.classList.remove('addbackground')
    
    randomNumber = Math.floor(Math.random() * 6) + 1
    num = Math.floor(Math.random() * 2) + 1
    Toss()
    Go()
    container.style.display = "none"
    tossContainer.style.display = "block"
    tossBtn.style.display = "block"
    goBtn.style.display = "none"
    player.textContent = '-'
}








