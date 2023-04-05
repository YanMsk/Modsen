const startBtn = document.querySelector(".start-btn");
const quizContainer = document.querySelector(".quiz-container");
const resualtContainer = document.querySelector(".resualt-container");
const replayBtn = document.querySelector(".replay");
const quitBtn = document.querySelector(".quit");

startBtn.onclick = ()=>{
quizContainer.classList.add("activeQuiz");
showQuestions(1);
}

function showQuestions(index){
	const questionText = document.querySelector(".question-box__question");
	const optionList = document.querySelector(".question-box__option-list");
	let questionTag = '<span>'+ questions[index].question +'</span>';							
	questionText.innerHTML = questionTag;
}