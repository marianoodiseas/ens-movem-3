input.onButtonPressed(Button.A, function () {
    servos.P0.setAngle(90)
})
input.onButtonPressed(Button.AB, function () {
    servos.P0.setAngle(0)
})
input.onButtonPressed(Button.B, function () {
    servos.P0.setAngle(180)
})
