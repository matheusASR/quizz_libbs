import database from "./database.js";

const containerGame = document.querySelector(".container__game");
const statementText = document.getElementById("statement-text");
const answerBttns = document.querySelectorAll(".answer__btn");
const answerBox = document.querySelector(".answer__box");
const trueHand = document.getElementById("true-hand-circle");
const falseHand = document.getElementById("false-hand-circle");
const currentCard = document.getElementById("current-card");
const progressCards = document.getElementById("progress-bar");

let currentStatementIndex = 0;

function progressBar() {
  const numberProgress = currentStatementIndex + 1;
  if (numberProgress < 10) {
    currentCard.textContent = `0${numberProgress.toString()}`;
  } else [(currentCard.textContent = numberProgress.toString())];
  progressCards.setAttribute("value", numberProgress);
}

function sectionAnswerDOM(boolean, description) {
  const sectionAnswer = document.createElement("section");
  const answerDescriptionDiv = document.createElement("div");
  const handImage = document.createElement("img");
  const answerBoolean = document.createElement("h2");
  const answerDescription = document.createElement("p");
  const nextStatementBtn = document.createElement("button");

  sectionAnswer.classList.add("section__answer");
  if (boolean === "VERDADEIRO") {
    answerDescriptionDiv.classList.add("div__true__answer");
    handImage.src = "../assets/true_hand_circle_green.png";
    answerBoolean.textContent = `${boolean}!`;
    answerDescription.textContent = description;
  } else {
    answerDescriptionDiv.classList.add("div__false__answer");
    handImage.src = "../assets/false_hand_circle_red.png";
    answerBoolean.textContent = `${boolean}!`;
    answerDescription.textContent = description;
  }
  handImage.classList.add("hand__image__color");
  answerBoolean.classList.add("answer__boolean");
  answerDescription.classList.add("answer__description");
  nextStatementBtn.classList.add("next__statement__btn");
  nextStatementBtn.textContent = "PRÓXIMA";

  answerDescriptionDiv.append(handImage, answerBoolean, answerDescription);
  sectionAnswer.append(answerDescriptionDiv, nextStatementBtn);

  nextStatementBtn.addEventListener("click", () => nextStatement());

  return sectionAnswer;
}

function showStatement() {
  const currentStatement = database[currentStatementIndex];
  statementText.textContent = currentStatement.statement;
}

function showAnswer() {
  const currentStatement = database[currentStatementIndex];
  answerBttns.forEach((btn) =>
    btn.addEventListener("click", () => {
      answerBox.innerHTML = "";
      containerGame.classList.add("container__game__2");
      const sectionAnswer = sectionAnswerDOM(
        currentStatement.answer.boolean,
        currentStatement.answer.description
      );
      answerBox.appendChild(sectionAnswer);
    })
  );
}

function endGameDOM() {
  const section = document.createElement("section");
  const firework1 = document.createElement("img");
  const firework2 = document.createElement("img");
  const h1 = document.createElement("h1");
  const h2 = document.createElement("h2");
  const link = document.createElement("a");
  const button = document.createElement("button");

  section.classList.add("end__game__section");

  firework1.src = "../assets/fogo_artificio_1.png";
  firework1.alt = "fogo_artificio_1";
  firework1.classList.add("fogo__artificio__1");

  firework2.src = "../assets/fogo_artificio_2.png";
  firework2.alt = "fogo_artificio_2";
  firework2.classList.add("fogo__artificio__2");

  h1.textContent = "Parabéns por concluir o quiz!";
  h1.classList.add("end__game__h1");

  h2.textContent =
    "Através desse desafio, você ampliou seu conhecimento sobre saúde e cardiologia, e isso é um passo importante em direção a um estilo devida mais saudável.";
  h2.classList.add("end__game__h2");

  link.href = "../../index.html";

  button.textContent = "VOLTAR AO INÍCIO";
  button.classList.add("back__home__button");
  button.setAttribute("id", "backHomeBtn");

  link.append(button);
  section.append(firework1, firework2, h1, h2, link);

  return section;
}

function nextStatement() {
  currentStatementIndex++;
  progressBar();
  containerGame.classList.remove("container__game__2");
  containerGame.classList.add("container__game");
  answerBox.innerHTML = "";
  if (currentStatementIndex < database.length) {
    answerBox.append(trueHand, falseHand);
    showStatement();
  } else {
    containerGame.innerHTML = "";
    containerGame.classList.remove("container__game");
    containerGame.classList.add("container__game__3");
    const endGameSection = endGameDOM();
    containerGame.appendChild(endGameSection);
  }
}

answerBttns.forEach((btn) => btn.addEventListener("click", () => showAnswer()));
showStatement();
progressBar();
