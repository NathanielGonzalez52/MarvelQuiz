var selected = "";
var correctAnswer = "";
const answers = [];
const option = [];

function defaultColors () {
	const op1 = document.getElementById('op1');
	const op2 = document.getElementById('op2');
	const op3 = document.getElementById('op3');
	const op4 = document.getElementById('op4');

	op1.style.backgroundColor = "#ED1D24";
	op1.style.color = "#FFFFFF";
	op2.style.backgroundColor = "#ED1D24";
	op2.style.color = "#FFFFFF";
	op3.style.backgroundColor = "#ED1D24";
	op3.style.color = "#FFFFFF";
	op4.style.backgroundColor = "#ED1D24";
	op4.style.color = "#FFFFFF";
}

function clickedOn (x) {
	const op1 = document.getElementById('op1');
	const op2 = document.getElementById('op2');
	const op3 = document.getElementById('op3');
	const op4 = document.getElementById('op4');

	x.style.backgroundColor = "#CC0000";
	x.style.color = "#D3AF37";
	if (x == op1) {
		op2.style.backgroundColor = "grey";
		op2.style.color = "#DDDDDD";
		op3.style.backgroundColor = "grey";
		op3.style.color = "#DDDDDD";
		op4.style.backgroundColor = "grey";
		op4.style.color = "#DDDDDD";
	}

	if (x == op2) {
		op1.style.backgroundColor = "grey";
		op1.style.color = "#DDDDDD";
		op3.style.backgroundColor = "grey";
		op3.style.color = "#DDDDDD";
		op4.style.backgroundColor = "grey";
		op4.style.color = "#DDDDDD";
	}
	if (x == op3) {
		op1.style.backgroundColor = "grey";
		op1.style.color = "#DDDDDD";
		op2.style.backgroundColor = "grey";
		op2.style.color = "#DDDDDD";
		op4.style.backgroundColor = "grey";
		op4.style.color = "#DDDDDD";
	}
	if (x == op4) {
		op1.style.backgroundColor = "grey";
		op1.style.color = "#DDDDDD";
		op2.style.backgroundColor = "grey";
		op2.style.color = "#DDDDDD";
		op3.style.backgroundColor = "grey";
		op3.style.color = "#DDDDDD";
	}
}

// function isCorrect() {
// 	const op1 = document.getElementById('op1');
// 	const op2 = document.getElementById('op2');
// 	const op3 = document.getElementById('op3');
// 	const op4 = document.getElementById('op4');
//
// 	if (op1.value == "true") {
// 		return op1.value;
// 	}
// 	if (op2.value == "true") {
// 		return op2.value;
// 	}
// 	if (op3.value == "true") {
// 		return op3.value;
// 	}
// 	if (op4.value == "true") {
// 		return op4.value;
// 	}
// }

const Questions = [{
		id: 0,
		q: 'Which character said, "I never said you were a superhero"?',
		a: [{ text: "Obediah Stane", isCorrect: false },
			{ text: "Pepper Potts", isCorrect: false },
			{ text: "Christine Everheart", isCorrect: true },
			{ text: "Vicki Vale", isCorrect: false }
		]

	},
	{
		id: 1,
		q: "What is the first song played in Iron Man?",
		a: [{ text: "Highway to Hell", isCorrect: false},
			{ text: "Welcome to the Jungle", isCorrect: false },
			{ text: "Shoot to Thrill", isCorrect: false },
			{ text: "Back in Black", isCorrect: true }
		]

	},
	{
		id: 2,
		q: "What is Natasha's American alias in Iron Man 2?",
		a: [{ text: "Natalie Romero", isCorrect: false },
			{ text: "Natalie Rieman", isCorrect: false },
			{ text: "Natalie Rushman", isCorrect: true },
			{ text: "Natalie Roman", isCorrect: false }
		]
	},
	{
		id: 3,
		q: "What book made Paul Rudd cry during house arrest?",
		a: [{ text: "The Fault In Our Stars", isCorrect: false },
			{ text: "Lord of the Flies", isCorrect: false },
			{ text: "Paper Towns", isCorrect: true },
			{ text: "Twlight", isCorrect: false }
		]
	},
	{
		id: 4,
		q: "Which movie is the Tessseract first seen on screen?",
		a: [{ text: "Captain America The First Avenger", isCorrect: false },
			{ text: "Thor", isCorrect: true },
			{ text: "Thor: The Dark World", isCorrect: false },
			{ text: "Iron Man 2", isCorrect: false }
		]
	},
	{
		id: 5,
		q: "What is Pepper Potts allergic to?",
		a: [{ text: "Apples", isCorrect: false },
			{ text: "Cherries", isCorrect: false },
			{ text: "Strawberries", isCorrect: true },
			{ text: "Peaches", isCorrect: false }
		]
	},
	{
		id: 6,
		q: "About how many universes did Doctor Strange see in Infinity War?",
		a: [{ text: "10 Million", isCorrect: false },
			{ text: "5 Million", isCorrect: false },
			{ text: "14 Million", isCorrect: true },
			{ text: "2 Million", isCorrect: false }
		]
	},
	{
		id: 7,
		q: "In what movie does Stan Lee cameo as a bartender?",
		a: [{ text: "Ant-Man", isCorrect: true },
			{ text: "Spider-Man: Homecoming", isCorrect: false },
			{ text: "Iron Man 3", isCorrect: false },
			{ text: "Captain America: The First Avenger", isCorrect: false }
		]
	},
	{
		id: 8,
		q: "What is the wifi password given to Doctor Strange?",
		a: [{ text: "Shawarma", isCorrect: false },
			{ text: "Shamblama", isCorrect: false },
			{ text: "Shamballa", isCorrect: true },
			{ text: "Shrine", isCorrect: false }
		]
	},
	{
		id: 9,
		q: "What song is playing when Peter arrives to the dance in Spider-Man: Homecoming?",
		a: [{ text: "Space Age Love Song", isCorrect: true },
			{ text: "Save it for Later", isCorrect: false },
			{ text: "Blitzkreig Bop", isCorrect: false },
			{ text: "Ran So Far Away ", isCorrect: false }
		]
	},
	{
		id: 10,
		q: "What Earth does Mysterio claim to be from in Spider-Man: Far From Home?",
		a: [{ text: "Earth-616", isCorrect: false },
			{ text: "Earth-232", isCorrect: false },
			{ text: "Earth-69420", isCorrect: false },
			{ text: "Earth-833", isCorrect: true }
		]
	},
	{
		id: 11,
		q: "What is the name of Drax's wife?",
		a: [{ text: "Kamaria", isCorrect: false },
			{ text: "Ovette", isCorrect: true },
			{ text: "Lyla", isCorrect: false },
			{ text: "Lillian", isCorrect: false }
		]
	},
	{
		id: 12,
		q: "What is the name of Drax's daughter?",
		a: [{ text: "Kamaria", isCorrect: true },
			{ text: "Ovette", isCorrect: false },
			{ text: "Lyla", isCorrect: false },
			{ text: "Lillian", isCorrect: false }
		]
	},
	{
		id: 13,
		q: "In Infinity War, who is the last character that is dusted onscreen?",
		a: [{ text: "Spider-Man", isCorrect: false },
			{ text: "The Winter Soldier", isCorrect: false },
			{ text: "Falcon", isCorrect: false },
			{ text: "Nick Fury", isCorrect: true }
		]
	},
	{
		id: 14,
		q: "What is the name of the dwarf that made the Infinity Gauntlet?",
		a: [{ text: "Pip", isCorrect: false },
			{ text: "Etrigan", isCorrect: false },
			{ text: "Eitri", isCorrect: true },
			{ text: "Polis", isCorrect: false }
		]
	},
	{
		id: 15,
		q: "What is the name of the soldier that become Abomination?",
		a: [{ text: "Emmet Blonsky", isCorrect: false },
			{ text: "Emil Blonsky", isCorrect: true },
			{ text: "Emilio Blonsky", isCorrect: false },
			{ text: "Eugene Blonsky", isCorrect: false }
		]
	},
	{
		id: 16,
		q: "In Spider-Man: Homecoming, what is the name of the destroyed ferry?",
		a: [{ text: "Brooklyn Ferry", isCorrect: false },
			{ text: "The Queens Ferry", isCorrect: false },
			{ text: "The Staten Island Ferry", isCorrect: true },
			{ text: "The New York Ferry", isCorrect: false }
		]
	},
	{
		id: 17,
		q: "Which one of these phrases is NOT required to brainwash Bucky?",
		a: [{ text: "Freight Car", isCorrect: false },
			{ text: "Furnace", isCorrect: false },
			{ text: "Seven", isCorrect: true },
			{ text: "Nine", isCorrect: false }
		]
	},
	{
		id: 18,
		q: "When were Tony's parents murdered??",
		a: [{ text: "December 15, 1991", isCorrect: false },
			{ text: "December 18, 1991", isCorrect: false },
			{ text: "December 16, 1991", isCorrect: true },
			{ text: "December 19, 1991", isCorrect: false }
		]
	},
	{
		id: 19,
		q: "Where did Thor go to obtain Stormbreaker?",
		a: [{ text: "Nidavellir", isCorrect: false },
			{ text: "Titan", isCorrect: false },
			{ text: "Knowhere", isCorrect: true },
			{ text: "Milano", isCorrect: false }
		]
	},
	{
		id: 18,
		q: "What is the name of Starlord's ship?",
		a: [{ text: "Guardian's Vessel", isCorrect: false },
			{ text: "Milano", isCorrect: false },
			{ text: "Star", isCorrect: true },
			{ text: "The Planetary", isCorrect: false }
		]
	},
	{
		id: 19,
		q: "In the beginning of The Incredible Hulk, what country does Bruce Banner live in?",
		a: [{ text: "Portugal", isCorrect: false },
			{ text: "Spain", isCorrect: false },
			{ text: "Venezuela", isCorrect: true },
			{ text: "Brazil", isCorrect: false }
		]
	},
	{
		id: 20,
		q: "In Iron Man 3, Happy is seriously injured duing a bombing where?",
		a: [{ text: "JPL Labs", isCorrect: false },
			{ text: "Stark Tower", isCorrect: false },
			{ text: "SHIELD Facility", isCorrect: true },
			{ text: "TCL Chinese Theatre", isCorrect: false }
		]
	},
	{
		id: 21,
		q: "What is the name of the boy that helps Tony in Iron Man 3?",
		a: [{ text: "John", isCorrect: false },
			{ text: "Gabriel", isCorrect: false },
			{ text: "Harley", isCorrect: true },
			{ text: "Hayden", isCorrect: false }
		]
	},
	{
		id: 22,
		q: "What is the name of the scientist that helps Steve become Captain America?",
		a: [{ text: "Howard Stark", isCorrect: false },
			{ text: "Dr. Emil Hamilton", isCorrect: false },
			{ text: "Johann Schmidt", isCorrect: true },
			{ text: "Abraham Erskine", isCorrect: false }
		]
	},
	{
		id: 23,
		q: "What was Steve Rogers dosed with during the Super Soldier procedure?",
		a: [{ text: "Gamma Rays", isCorrect: false },
			{ text: "Proto-Rays ", isCorrect: false },
			{ text: "Vita-Rays", isCorrect: true },
			{ text: "Super Rays", isCorrect: false }
		]
	},
	{
		id: 24,
		q: "What type of poisoning did Stark suffer from in Iron Man 2?",
		a: [{ text: "Vibranium", isCorrect: false },
			{ text: "Platinum", isCorrect: false },
			{ text: "Plutonium", isCorrect: true },
			{ text: "Palladium", isCorrect: false }
		]
	},
	{
		id: 25,
		q: "What floor does Sam Wilson jump out of in The Winter Soldier?",
		a: [{ text: "31", isCorrect: false },
			{ text: "23", isCorrect: false },
			{ text: "41", isCorrect: true },
			{ text: "49", isCorrect: false }
		]
	},
	{
		id: 26,
		q: "In Infinity War, where are Wanda and Vision when they are ambushed?",
		a: [{ text: "London", isCorrect: false },
			{ text: "Toronto", isCorrect: false },
			{ text: "New York", isCorrect: true },
			{ text: "Scotland", isCorrect: false }
		]
	},
	{
		id: 27,
		q: "How many stones does Thanos have when he arrives on Titan?",
		a: [{ text: "3", isCorrect: false },
			{ text: "4", isCorrect: false },
			{ text: "2", isCorrect: true },
			{ text: "1", isCorrect: false }
		]
	},
	{
		id: 28,
		q: "In Doctor Strange, what is the name of the parapalegic that uses magic to walk?",
		a: [{ text: "Adam Strange", isCorrect: false },
			{ text: "Justin Langmore", isCorrect: false },
			{ text: "Jonathan Pangmore", isCorrect: true },
			{ text: "Lily Potter", isCorrect: false }
		]
	},
	{
		id: 29,
		q: "What is the title of Flash's book in Spiderman: No Way Home?",
		a: [{ text: "Spideys's Best Friend", isCorrect: false },
			{ text: "Spider-Man's Super Friend", isCorrect: false },
			{ text: "Flashpoint", isCorrect: true },
			{ text: "Web of Friendships", isCorrect: false }
		]
	},
	{
		id: 30,
		q: "Where are Peter and Quentin when Quentin obtains EDITH?",
		a: [{ text: "Abandoned Building", isCorrect: false },
			{ text: "A Bar", isCorrect: false },
			{ text: "A Restaurant", isCorrect: true },
			{ text: "A House", isCorrect: false }
		]
	},
	{
		id: 30 ,
		q: "Which Avenger does Scott Lang fight in Ant-Man?",
		a: [{ text: "Falcon", isCorrect: false },
			{ text: "Black Widow", isCorrect: false },
			{ text: "War Machine", isCorrect: true },
			{ text: "Iron Man", isCorrect: false }
		]
	},
	{
		id: 31,
		q: "Which one of these was NOT part of Scott Lang's house arrest montage?",
		a: [{ text: "Karoke", isCorrect: false },
			{ text: "Napping", isCorrect: false },
			{ text: "Drumming", isCorrect: true },
			{ text: "Reading", isCorrect: false }
		]
	}

]

// function answerChoices(ques) {
// 	// console.log(ques);
// 	const op1 = document.getElementById('op1');
// 	const op2 = document.getElementById('op2');
// 	const op3 = document.getElementById('op3');
// 	const op4 = document.getElementById('op4');
//
// 	// Providing the true or false value to the options
// 	op1.value = Questions[ques].a[0].isCorrect;
// 	op2.value = Questions[ques].a[1].isCorrect;
// 	op3.value = Questions[ques].a[2].isCorrect;
// 	op4.value = Questions[ques].a[3].isCorrect;
//
// 	// Show selection for op1
// 	op1.addEventListener("click", () => {
// 		op1.style.backgroundColor = "green";
// 		op2.style.backgroundColor = "grey";
// 		op3.style.backgroundColor = "grey";
// 		op4.style.backgroundColor = "grey";
// 		selected = op1.value;
// 	})
//
// 	// Show selection for op2
// 	op2.addEventListener("click", () => {
// 		op1.style.backgroundColor = "grey";
// 		op2.style.backgroundColor = "green";
// 		op3.style.backgroundColor = "grey";
// 		op4.style.backgroundColor = "grey";
// 		selected = op2.value;
// 	})
//
// 	// Show selection for op3
// 	op3.addEventListener("click", () => {
// 		op1.style.backgroundColor = "grey";
// 		op2.style.backgroundColor = "grey";
// 		op3.style.backgroundColor = "green";
// 		op4.style.backgroundColor = "grey";
// 		selected = op3.value;
// 	})
//
// 	// Show selection for op4
// 	op4.addEventListener("click", () => {
// 		op1.style.backgroundColor = "grey";
// 		op2.style.backgroundColor = "grey";
// 		op3.style.backgroundColor = "grey";
// 		op4.style.backgroundColor = "green";
// 		selected = op4.value;
// 	})
// 	return selected;
// }

// Set start
var start = true;
// Iterate
function iterate(id) {
	// Setting the question text
	question.innerText = Questions[id].q;

	// Getting the options
	const op1 = document.getElementById('op1');
	const op2 = document.getElementById('op2');
	const op3 = document.getElementById('op3');
	const op4 = document.getElementById('op4');


	// Providing option text
	op1.innerText = Questions[id].a[0].text;
	op2.innerText = Questions[id].a[1].text;
	op3.innerText = Questions[id].a[2].text;
	op4.innerText = Questions[id].a[3].text;

	// Providing the true or false value to the options
	op1.value = Questions[id].a[0].isCorrect;
	op2.value = Questions[id].a[1].isCorrect;
	op3.value = Questions[id].a[2].isCorrect;
	op4.value = Questions[id].a[3].isCorrect;


	// Show selection for op1
	op1.addEventListener("click", () => {
		// op1.style.backgroundColor = "#D3AF37";
		// op1.style.color = "#ED1D24";
		clickedOn(op1);
		// op2.style.backgroundColor = "grey";
		// op2.style.color = "#FFFFFF";
		// op3.style.backgroundColor = "grey";
		// op3.style.color = "#FFFFFF";
		// op4.style.backgroundColor = "grey";
		// op4.style.backgroundColor = "#FFFFFF";
		selected = op1.value;
		picked = "op1";
		correctAnswer = op1.value;
	})

	// Show selection for op2
	op2.addEventListener("click", () => {
		clickedOn(op2);
		// op2.style.backgroundColor = "#D3AF37";
		// op2.style.color = "#ED1D24";
		// op1.style.backgroundColor = "grey";
		// op2.style.backgroundColor = "green";
		// op3.style.backgroundColor = "grey";
		// op4.style.backgroundColor = "grey";
		selected = op2.value;
		picked = "op2";
		correctAnswer = op2.value;
	})

	// Show selection for op3
	op3.addEventListener("click", () => {
		clickedOn(op3);
		// op3.style.backgroundColor = "#D3AF37";
		// op3.style.color = "#ED1D24";
		// op1.style.backgroundColor = "grey";
		// op2.style.backgroundColor = "grey";
		// op3.style.backgroundColor = "green";
		// op4.style.backgroundColor = "grey";
		selected = op3.value;
		picked = "op3";
		correctAnswer = op3.value;
	})

	// Show selection for op4
	op4.addEventListener("click", () => {
		clickedOn(op4);
		// op1.style.backgroundColor = "grey";
		// op2.style.backgroundColor = "grey";
		// op3.style.backgroundColor = "grey";
		// op4.style.backgroundColor = "green";
		selected = op4.value;
		picked = "op4";
		correctAnswer = op4.value;
	})

	// // Grabbing the evaluate button
	// const evaluate = document.getElementsByClassName("evaluate");
	//
	// // Evaluate method
	// evaluate[0].addEventListener("click", () => {
	// 	if (selected == "true") {
	// 		result[0].innerHTML = "True";
	// 		result[0].style.color = "green";
	// 	} else {
	// 		result[0].innerHTML = "False";
	// 		result[0].style.color = "red";
	// 	}
	// })
}

// REVERSES STRING
function reverseString(str) {
    return str.split("").reverse().join("");
}
// RANDOMIZE QUESTIONS

// Questions will be asked
function randNum() {
	var randValue = Math.random();
	// Math.floor(randNum * (11 + 1))
	var randQues = Math.floor(randValue * (Questions.length))
	return randQues;

}

const nums = [];


// first random question
if (start) {
	var id = 1;
	title.innerText = "Question " + Number(id);
	var firstQuestion = randNum();
	nums.push(firstQuestion);
	iterate(firstQuestion.toString());
	// answerChoices(firstQuestion.toString());
	// console.log(nums);
}

// Next button and method
const next = document.getElementsByClassName('next')[0];
const previous = document.getElementsByClassName('previous')[0];
const submit = document.getElementsByClassName('submit')[0];
submit.hidden = true;

var id = 1;


var pClicked = false;
var prevClicked = 0;
previous.hidden = true;

next.addEventListener("click", () => {
	if (start && selected != "") {
		start = false;
	}
	else if (selected == "") {
		window.alert("Please select an answer.");
		return ""
	}
	// key.push(isCorrect());
	option.push(picked);
	answers.push(selected);
	// console.log(answers);
	// console.log(option);
	// console.log(key);
	previous.disabled = false;
	previous.hidden = false;
	defaultColors();

	if (prevClicked > 0) {
			// title.innerText = "Question " + Number(nums.indexOf(id));
			// iterate(nextQuestion.toString());
		prevClicked--;
		title.innerText = "Question " + Number(id-prevClicked);
		iterate(nums[nums.length-(1+prevClicked)]);
		if (reverseString(title.innerText)[0] == '0') {
			next.hidden = true;
			submit.hidden = false;
			// next.value = "DONE";
		}
	}
		else if (id <= 9) {
			id++;
			var nextQuestion = randNum();

			while (nums.includes(nextQuestion)) {
					nextQuestion = randNum();
			}
				nums.push(nextQuestion);
				title.innerText = "Question " + Number(id);
				iterate(nextQuestion.toString());
				// console.log("end");
				if (reverseString(title.innerText)[0] == '0') {
					next.hidden = true;
					submit.hidden = false;
					// next.textContent = "Submit";
		}
	}
	selected = "";
})

var currId = nums[nums.length-1];

// FINDS PREVIOUS BUTTON
// ADD FUNCTIONALITY TO PREVIOUS BUTTON
previous.addEventListener("click", () => {
	defaultColors();
	next.hidden = false;
	submit.hidden = true;
	// prevClicked++;
	// var prevId = nums[nums.length-(1+prevClicked)];
	// var backWards = id-prevClicked;
	// var currId = nums[nums.length-1];
	if (id==1 || backWards<1) {
		previous.disabled = true;
	}
	else {
		previous.disabled = false;
		// prevClicked++;
		// if (prevClicked > 0) {
			// var prevId = nums[nums.length-(1+prevClicked)];
			// var backWards = id-prevClicked;
		// }
	try {
		prevClicked++;
		var prevId = nums[nums.length-(1+prevClicked)];
		var backWards = id-prevClicked;
		title.innerText = "Question " + Number(backWards);
		iterate(nums[nums.length-(1+prevClicked)]);
		answers.pop();
		option.pop();
		key.pop();
		// console.log("try block");
		// console.log(title.innerText);
		if (reverseString(title.innerText)[0] == '1') {
			previous.hidden = true;
		}
	}
	catch(err) {
		// title.innerText = "Question " + Number(id);
		previous.hidden = true;
		prevClicked--;
		title.innerText = "Question " + Number(1);
		iterate(currId);
		console.log("catch block");
		console.log("Catch Block: " + prevClicked);
		// console.log(prevClicked);
  	// console.log(err);
	}
}
	// console.log(prevId);
	// console.log(id);
})

var choices = "";
var questions = "";
var options = "";
var answerKey = "";
submit.addEventListener("click", () => {
	if (selected == "") {
		submit.removeAttribute("href")

		window.alert("Please select an answer.");
	}

	else {
		answers.push(selected);
		option.push(picked);
		console.log(answers);
		for (i=0; i<answers.length; i++) {
			choices += answers[i]+ " ";
		}
		for (i=0; i<nums.length; i++) {
			questions += nums[i]+ " ";
		}
		for (i=0; i<option.length; i++) {
			options += option[i]+ " ";
		}

		console.log(choices);
		console.log(questions);
		console.log(options);
		localStorage.setItem("playerChoices", choices);
		localStorage.setItem("quizQuestions", questions);
		localStorage.setItem("optionsPicked", options);
		// localStorage.setItem("key", answerKey);

		submit.href = "submit.html";

	}
})

// C:\Users\natha\OneDrive\desktop\MarvelQuiz\index.html
