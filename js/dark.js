const introTitle = document.querySelector(".intro-container__title");
const introDescription = document.querySelector(".intro-container__description");
const modeBtn = document.querySelector(".mode-btn");
const headerTitle = document.querySelector(".quiz-header__title");
const totalQuestion = document.querySelector(".quiz-header__total-questions");
const questionBox = document.querySelector(".question-box");
const questionBoxQuestion = document.querySelector(".question-box__question");
const flagIcon = document.querySelector(".result-container__icon");
const completeText = document.querySelector(".result-container__complete-text");
const scoreText = document.querySelector(".result-container__score-text");
const modeIcon = document.getElementById("mode-icon");

modeIcon.addEventListener("click", (event) =>{
	event.preventDefault();
	if(localStorage.getItem("theme")==="dark"){
		localStorage.removeItem("theme");
	}else{
		localStorage.setItem("theme","dark");
	}
	addDarkClass();
});

function addDarkClass(){
	 
		if(localStorage.getItem("theme")==="dark"){
			document.querySelector("body").classList.add("dark");
			modeIcon.textContent = "dark_mode";
			introTitle.classList.add("dark-title");
			introDescription.classList.add("dark-description");
			modeBtn.classList.add("dark-mode-btn");
			startBtn.classList.add("dark-start-btn");
			headerTitle.classList.add("dark-header-title");
			totalQuestion.classList.add("dark-total-questions");
			questionBox.classList.add("dark-question-box");
			questionBoxQuestion.classList.add("dark-question");
			nextBtn.classList.add("dark-next-btn");
			flagIcon.classList.add("dark-flag-icon");
			completeText.classList.add("dark-complete-text");
			scoreText.classList.add("dark-score-text");
			quitBtn.classList.add("dark-quit-btn");
		}else{
			document.querySelector("body").classList.remove("dark");
			modeIcon.textContent = "wb_sunny";
			introTitle.classList.remove("dark-title");
			introDescription.classList.remove("dark-description");
			modeBtn.classList.remove("dark-mode-btn");
			startBtn.classList.remove("dark-start-btn");
			headerTitle.classList.remove("dark-header-title");
			totalQuestion.classList.remove("dark-total-questions");
			questionBox.classList.remove("dark-question-box");
			questionBoxQuestion.classList.remove("dark-question");
			nextBtn.classList.remove("dark-next-btn");
			flagIcon.classList.remove("dark-flag-icon");
			completeText.classList.remove("dark-complete-text");
			scoreText.classList.remove("dark-score-text");
			quitBtn.classList.remove("dark-quit-btn");

		}
	 
}
addDarkClass();