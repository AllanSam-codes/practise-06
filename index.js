var text = document.querySelector("#text")
var checkBtn = document.querySelector("#check-btn")


function checkButton() {
    text.style = "display:none"
    checkBtn.style = "display:none"
}
checkBtn.addEventListener('click', checkButton)