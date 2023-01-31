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
    basic.pause(2000)
    PA = 1
    scoreboard()
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("T")
    basic.pause(2000)
    Ties = 1
    scoreboard()
})
input.onButtonPressed(Button.B, function () {
    basic.showString("B")
    basic.pause(2000)
    PB = 1
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
OLED.init(128, 64)
resetGame()
