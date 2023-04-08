const startBtn = document.querySelector(".start-btn");
const quizContainer = document.querySelector(".quiz-container");
const resualtContainer = document.querySelector(".resualt-container");
const replayBtn = document.querySelector(".replay");
const quitBtn = document.querySelector(".quit");
const optionList = document.querySelector(".question-box__option-list");

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
	showQuestions(questionCount);
	showQuestionsCounter(questionNumber);
	showMultipleAnswer(questionCount);
	}else {
		console.log('asd');
	}
}
 
 
function showMultipleAnswer(index){
const multipleAnswer = document.querySelector(".multiple-answer-options");
if(questions[index].answer.length>1){
	let multipleAnswerTag = `<div class="multiple-answer-options"><span>${'*'}</span>${'You must select multiple answers for this question.'}</div>`;
	multipleAnswer.innerHTML = multipleAnswerTag;
}
}

function showQuestions(index){
	const questionText = document.querySelector(".question-box__question");
	let questionTag = '<span>'+ questions[index].question +'</span>';
	let optionTag ='<div class="question-box__option"><span>' + questions[index].options[0] + '</span></div>'
									+'<div class="question-box__option"><span>' + questions[index].options[1] + '</span></div>'
									+'<div class="question-box__option"><span>' + questions[index].options[2] + '</span></div>';
								
	questionText.innerHTML = questionTag;
	optionList.innerHTML = optionTag;

	const option = document.querySelectorAll(".question-box__option");

	for(let i = 0; i < option.length; i++){
   option[i].setAttribute("onclick","optionSelection(this)");
	}
}

 

 
 
 


function showQuestionsCounter(index){
const totalQuestions = document.querySelector(".header__total-questions");
let totalQuestionsTag = '<span><p>'+ index +'</p>of<p>'+ questions.length +'</p>Questions</span>';
totalQuestions.innerHTML = totalQuestionsTag;
}