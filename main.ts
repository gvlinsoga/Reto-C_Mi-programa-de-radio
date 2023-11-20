input.onButtonPressed(Button.A, function () {
    radio.sendString("")
    basic.showString("Hello!")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(1)
