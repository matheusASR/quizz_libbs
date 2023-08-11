function startGame() {
    text = document.getElementById("start__game")
    text.addEventListener("click", () => {
        window.location.replace("./src/pages/page2.html")
    })
}

function backPage() {
    backBttn = document.getElementById("back__buton")
    backBttn.addEventListener("click", () => {
        window.history.back();
    })
}

startGame()
backPage()