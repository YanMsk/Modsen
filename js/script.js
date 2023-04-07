const startBtn = document.querySelector(".start-btn");
const quizContainer = document.querySelector(".quiz-container");
const resualtContainer = document.querySelector(".resualt-container");
const replayBtn = document.querySelector(".replay");
const quitBtn = document.querySelector(".quit");

startBtn.onclick = ()=>{
quizContainer.classList.add("activeQuiz");
showQuestions(0);
showQuestionsCounter(1);
}

let questionCount = 0;
let questionNumber = 1;
let nextBtn = document.querySelector(".next-btn")
nextBtn.onclick = () =>{
	
	if(questionCount < questions.length-1){
	questionCount++;
	questionNumber++;
	showQuestions(questionCount)
	showQuestionsCounter(questionNumber);
	}else {
		console.log('asd');
	}
}

function showQuestions(index){
	const questionText = document.querySelector(".question-box__question");
	const optionList = document.querySelector(".question-box__option-list");
	let questionTag = '<span>'+ questions[index].question +'</span>';
	let optionTag ='<div class="question-box__option"><span>' + questions[index].options[0] + '</span></div>'
									+'<div class="question-box__option"><span>' + questions[index].options[1] + '</span></div>'
									+'<div class="question-box__option"><span>' + questions[index].options[2] + '</span></div>';
								
	questionText.innerHTML = questionTag;
	optionList.innerHTML = optionTag;
}


function showQuestionsCounter(index){
const totalQuestions = document.querySelector(".header__total-questions");
let totalQuestionsTag = '<span><p>'+ index +'</p>of<p>'+ questions.length +'</p>Questions</span>';
totalQuestions.innerHTML = totalQuestionsTag;
}