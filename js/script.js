const startBtn = document.querySelector(".start-btn");
const quizContainer = document.querySelector(".quiz-container");
const resualtContainer = document.querySelector(".resualt-container");
const replayBtn = document.querySelector(".replay");
const quitBtn = document.querySelector(".quit");

startBtn.onclick = ()=>{
quizContainer.classList.add("activeQuiz");
showQuestions(4);
}

