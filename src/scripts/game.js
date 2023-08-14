function startGame() {
  const startGameBtn = document.getElementById("startGameBtn");
  const main = document.querySelector("main");
  startGameBtn.addEventListener("click", () => {
    main.innerHTML = "";
    const lottiePlayer = document.createElement("lottie-player");
    lottiePlayer.src = "../assets/zfffa.json";
    lottiePlayer.background = "transparent";
    lottiePlayer.speed = 1;
    lottiePlayer.style.width = "750px";
    lottiePlayer.style.height = "750px";
    lottiePlayer.setAttribute("autoplay", "");
    main.append(lottiePlayer);
    setTimeout(() => {
      window.location.replace("./quiz.html");
    }, 3000);
  });
}

startGame();
