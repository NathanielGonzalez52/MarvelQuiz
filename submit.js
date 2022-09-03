// import {answers} from "index.js";
// console.log(answers);
// localStorage.setItem("alter", "Clark Kent");

var userAnswers = localStorage.getItem("playerChoices");
var questions = localStorage.getItem("quizQuestions");
var options = localStorage.getItem("optionsPicked");

var answers = userAnswers.split(" ");
var quizQuestions = questions.split(" ");
var picked = options.split(" ");

function optionChosen(x) {
	var first = false;
	var second = false;
	var third = false;
	var fourth = false;
	if (picked[x] == "op1") {
		first = true;
		return "first";
	}
	if (picked[x] == "op2") {
		second = true;
		return "second";
	}
	if (picked[x] == "op3") {
		third = true;
		return "third";
	}
	if (picked[x] == "op4") {
		fourth = true;
		return "fourth";
	}
}

var score = 0;
// gets rid of empty space at the end of the string
answers.pop();
quizQuestions.pop();
picked.pop();

console.log(answers);
console.log(quizQuestions);
console.log(picked);


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
		q: "What does S.H.I.E.L.D stand for?",
		a: [{ text: "Strategic Home Intergral Enemy Line Division", isCorrect: false },
			{ text: "Strategy Hill Interforce Evil Latent Evil ", isCorrect: false },
			{ text: "Strategic Homeland Intervention Enforcement and Logistics Division", isCorrect: true },
			{ text: "None of these", isCorrect: false }
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
	}
]

// MAKE IT A VARIABLE
var button = 0;

for (i=0; i<10; i++) {

	button++;

	var op1 = document.getElementsByClassName("btn" + String(button));
	var op2 = document.getElementsByClassName("btn" + String((button+1)));
	var op3 = document.getElementsByClassName("btn" + String((button+2)));
	var op4 = document.getElementsByClassName("btn" + String((button+3)));

	var questionOne = document.getElementsByClassName("question-title" + String(i+1));
	// console.log(i);
	// console.log(questionOne);
	questionOne[0].innerText = Questions[quizQuestions[i]].q;

	op1[0].innerText = Questions[quizQuestions[i]].a[0].text;
	op2[0].innerText = Questions[quizQuestions[i]].a[1].text;
	op3[0].innerText = Questions[quizQuestions[i]].a[2].text;
	op4[0].innerText = Questions[quizQuestions[i]].a[3].text;

	op1[0].value = Questions[quizQuestions[i]].a[0].isCorrect;
	op2[0].value = Questions[quizQuestions[i]].a[1].isCorrect;
	op3[0].value = Questions[quizQuestions[i]].a[2].isCorrect;
	op4[0].value = Questions[quizQuestions[i]].a[3].isCorrect;

	if (op1[0].value == "true") {
	    op1[0].style.backgroundColor = "green";
	    if (answers[i] != op1[0].value) {
				if (optionChosen(i)  == "second") {
					op2[0].style.backgroundColor = "blue";
				}
				if (optionChosen(i)  == "third") {
					op3[0].style.backgroundColor = "blue";
				}
				if (optionChosen(i)  == "fourth") {
					op4[0].style.backgroundColor = "blue";
				}
			}
	  }
	if (op2[0].value == "true") {
	   op2[0].style.backgroundColor = "green";
		 if (answers[i] != op2[0].value) {
			 if (optionChosen(i)  == "first") {
				 op1[0].style.backgroundColor = "blue";
			 }
			 if (optionChosen(i)  == "third") {
				 op3[0].style.backgroundColor = "blue";
			 }
			 if (optionChosen(i)  == "fourth") {
				 op4[0].style.backgroundColor = "blue";
			 }
		 }
	  }
	if (op3[0].value == "true") {
	   op3[0].style.backgroundColor = "green";
		 if (answers[i] != op3[0].value) {
			 if (optionChosen(i)  == "first") {
				 op1[0].style.backgroundColor = "blue";
			 }
			 if (optionChosen(i)  == "second") {
				 op2[0].style.backgroundColor = "blue";
			 }
			 if (optionChosen(i)  == "fourth") {
				 op4[0].style.backgroundColor = "blue";
			 }
		 }

	  }
	if (op4[0].value == "true") {
	   op4[0].style.backgroundColor = "green";
		 if (answers[i] != op1[0].value) {
			 if (optionChosen(i)  == "first") {
				 op1[0].style.backgroundColor = "blue";
			 }
			 if (optionChosen(i)  == "second") {
				 op2[0].style.backgroundColor = "blue";
			 }
			 if (optionChosen(i)  == "third") {
				 op3[0].style.backgroundColor = "blue";
			 }
		 }

	  }



	button+=3;

}

// function iterate(id) {
//   var correctAnswer = "";
// 	// Providing option text
// 	op1[0].innerText = Questions[id].a[0].text;
// 	op2[0].innerText = Questions[id].a[1].text;
// 	op3[0].innerText = Questions[id].a[2].text;
// 	op4[0].innerText = Questions[id].a[3].text;
//
// 	// Providing the true or false value to the options
// 	op1[0].value = Questions[id].a[0].isCorrect;
// 	op2[0].value = Questions[id].a[1].isCorrect;
// 	op3[0].value = Questions[id].a[2].isCorrect;
// 	op4[0].value = Questions[id].a[3].isCorrect;
//
//   if (op1[0].value == "true") {
//     op1[0].style.backgroundColor = "green";
//     correctAnswer = op1[0].value
//   }
//   if (op2[0].value == "true") {
//     op2[0].style.backgroundColor = "green";
//     correctAnswer = op2[0].value
//   }
//   if (op3[0].value == "true") {
//     op3[0].style.backgroundColor = "green";
//     correctAnswer = op3[0].value
//   }
//   if (op4[0].value == "true") {
//     op4[0].style.backgroundColor = "green";
//     correctAnswer = op4[0].value
//   }
//
//   if (answers.indexOf(quizQuestions[id]) == correctAnswer) {
//     console.log("Yes, they got it right.")
//     score++;
//   }
//   console.log(score);
//
// }
//
