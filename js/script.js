const weightInput = document.getElementById("weight-input")
const countButton = document.getElementById("count-button")

weightInput.addEventListener('input', function() {
    const inputValue = weightInput.value.trim()
    if (validateWeigthInput(inputValue)) {
        console.log("FALSE")
        countButton.disabled = false
    } else {
        console.log("TRUE")
        countButton.disabled = true
    }
})

function validateWeigthInput(input) {
    const integerRegex = /^-?\d+$/;
    return integerRegex.test(input)
}