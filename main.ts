input.onPinPressed(TouchPin.P0, function () {
    rps = randint(1, 3)
    if (rps == 1) {
        OLED.writeStringNewLine("rock")
    }
    if (rps == 1) {
        OLED.writeStringNewLine("scissors")
    }
    if (rps == 1) {
        OLED.writeStringNewLine("paper")
    }
})
function scoreboard () {
    OLED.clear()
    OLED.writeStringNewLine("Player A: " + PA)
    OLED.newLine()
    OLED.writeStringNewLine("Player B: " + PB)
    OLED.newLine()
    OLED.writeStringNewLine("Ties: " + Ties)
    OLED.newLine()
    OLED.writeStringNewLine("Rounds: " + Rounds)
}
function resetGame () {
    PA = 0
    PB = 0
    PA = 0
    Ties = 0
    Rounds = 0
    OLED.writeStringNewLine("lets play a game! :p")
    basic.pause(2000)
    scoreboard()
}
input.onButtonPressed(Button.A, function () {
    basic.showString("A")
    basic.pause(1000)
    basic.clearScreen()
    PA += 1
    Rounds += 1
    scoreboard()
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("T")
    basic.pause(1000)
    basic.clearScreen()
    Ties += 1
    Rounds += 1
    scoreboard()
})
input.onButtonPressed(Button.B, function () {
    basic.showString("B")
    basic.pause(1000)
    basic.clearScreen()
    PB += 1
    Rounds += 1
    scoreboard()
})
input.onGesture(Gesture.Shake, function () {
    OLED.init(128, 64)
    resetGame()
})
let Rounds = 0
let Ties = 0
let PB = 0
let PA = 0
let rps = 0
OLED.init(128, 64)
resetGame()
