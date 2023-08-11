function starGame() {
    startGameBtn = document.getElementById("start__game__button")
    startGameBtn.addEventListener("click", () => {
        window.location.replace("../pages/page3.html")
    })
}

starGame()