import statements from "./database.js"

function backPage() {
    const backPageBtn = document.getElementById("backPageBtn")
    backPageBtn.addEventListener("click", () => {
        window.location.replace("../../index.html")
    })
}

function startGame() {
    const startGameBtn = document.getElementById("startGameBtn")
    const main = document.querySelector("main")
    startGameBtn.addEventListener("click", () => {
        main.innerHTML = ""
    })
}

backPage()
startGame()