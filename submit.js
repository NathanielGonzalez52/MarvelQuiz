// import {answers} from "index.js";
// console.log(answers);
// localStorage.setItem("alter", "Clark Kent");
var score = 0;
var userAnswers = localStorage.getItem("playerChoices");
var questions = localStorage.getItem("quizQuestions");
var options = localStorage.getItem("optionsPicked");
var key = localStorage.getItem("key");

var answers = userAnswers.split(" ");
var quizQuestions = questions.split(" ");
var picked = options.split(" ");
var correctAnswer = key.split(" ");


function notCorrect(x) {
  // var op1 = document.getElementsByClassName("btn" + String(button));
  // var op2 = document.getElementsByClassName("btn" + String((button+1)));
  // var op3 = document.getElementsByClassName("btn" + String((button+2)));
  // var op4 = document.getElementsByClassName("btn" + String((button+3)));
  x.style.textDecoration = "line-through";
}

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
// gets rid of empty space at the end of the string
answers.pop();
quizQuestions.pop();
picked.pop();

console.log(answers);
console.log(quizQuestions);
console.log(picked);
var score = 0;


const Questions = [{
		id: 0,
		q: 'Which character said, "I never said you were a superhero"?',
		pic: "images\Leslie_bibb.webp",
		a: [{ text: "Obediah Stane", isCorrect: false },
			{ text: "Pepper Potts", isCorrect: false },
			{ text: "Christine Everheart", isCorrect: true },
			{ text: "Vicki Vale", isCorrect: false }
		]

	},
	{
		id: 1,
		pic: "images/iron_man_tank.jpg",
		q: "What is the first song played in Iron Man?",
		a: [{ text: "Highway to Hell", isCorrect: false},
			{ text: "Welcome to the Jungle", isCorrect: false },
			{ text: "Shoot to Thrill", isCorrect: false },
			{ text: "Back in Black", isCorrect: true }
		]

	},
	{
		id: 2,
		pic: "images/black-widow.jpg",
		q: "What is Natasha's American alias in Iron Man 2?",
		a: [{ text: "Natalie Romero", isCorrect: false },
			{ text: "Natalie Rieman", isCorrect: false },
			{ text: "Natalie Rushman", isCorrect: true },
			{ text: "Natalie Roman", isCorrect: false }
		]
	},
	{
		id: 3,
		pic: "images/paul_rudd_house_arrest.jpg",
		q: "What book made Paul Rudd cry during house arrest?",
		a: [{ text: "The Fault In Our Stars", isCorrect: false },
			{ text: "Lord of the Flies", isCorrect: false },
			{ text: "Paper Towns", isCorrect: true },
			{ text: "Twlight", isCorrect: false }
		]
	},
	{
		id: 4,
		pic: "images/loki_tesseract.jpg",
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
		pic: "images/pepper_potts.jpg",
		a: [{ text: "Apples", isCorrect: false },
			{ text: "Cherries", isCorrect: false },
			{ text: "Strawberries", isCorrect: true },
			{ text: "Peaches", isCorrect: false }
		]
	},
	{
		id: 6,
		q: "About how many universes did Doctor Strange see in Infinity War?",
		pic: "images/dr.strange.jpg",
		a: [{ text: "10 Million", isCorrect: false },
			{ text: "5 Million", isCorrect: false },
			{ text: "14 Million", isCorrect: true },
			{ text: "2 Million", isCorrect: false }
		]
	},
	{
		id: 7,
		q: "In what movie does Stan Lee cameo as a bartender?",
		pic: "images/stan_lee.jpg",
		a: [{ text: "Ant-Man", isCorrect: true },
			{ text: "Spider-Man: Homecoming", isCorrect: false },
			{ text: "Iron Man 3", isCorrect: false },
			{ text: "Captain America: The First Avenger", isCorrect: false }
		]
	},
	{
		id: 8,
		q: "What is the wifi password given to Doctor Strange?",
		pic: "images/shamballa.jpg",
		a: [{ text: "Shawarma", isCorrect: false },
			{ text: "Shamblama", isCorrect: false },
			{ text: "Shamballa", isCorrect: true },
			{ text: "Shrine", isCorrect: false }
		]
	},
	{
		id: 9,
		q: "What song is playing when Peter arrives to the dance in Spider-Man: Homecoming?",
		pic: "images/spidey_homecoming.jpg",
		a: [{ text: "Space Age Love Song", isCorrect: true },
			{ text: "Save it for Later", isCorrect: false },
			{ text: "Blitzkreig Bop", isCorrect: false },
			{ text: "Ran So Far Away ", isCorrect: false }
		]
	},
	{
		id: 10,
		q: "What Earth does Mysterio claim to be from in Spider-Man: Far From Home?",
		pic: "images/Mysterio.jpg",
		a: [{ text: "Earth-616", isCorrect: false },
			{ text: "Earth-232", isCorrect: false },
			{ text: "Earth-69420", isCorrect: false },
			{ text: "Earth-833", isCorrect: true }
		]
	},
	{
		id: 11,
		q: "What is the name of Drax's wife?",
		pic: "images/drax_wife.jpg",
		a: [{ text: "Kamaria", isCorrect: false },
			{ text: "Ovette", isCorrect: true },
			{ text: "Lyla", isCorrect: false },
			{ text: "Lillian", isCorrect: false }
		]
	},
	{
		id: 12,
		q: "What is the name of Drax's daughter?",
		pic: "images/drax_mantis.jpg",
		a: [{ text: "Kamaria", isCorrect: true },
			{ text: "Ovette", isCorrect: false },
			{ text: "Lyla", isCorrect: false },
			{ text: "Lillian", isCorrect: false }
		]
	},
	{
		id: 13,
		q: "In Infinity War, who is the last character that is dusted onscreen?",
		pic: "images/dusted.jpg",
		a: [{ text: "Spider-Man", isCorrect: false },
			{ text: "The Winter Soldier", isCorrect: false },
			{ text: "Falcon", isCorrect: false },
			{ text: "Nick Fury", isCorrect: true }
		]
	},
	{
		id: 14,
		q: "What is the name of the dwarf that made the Infinity Gauntlet?",
		pic: "images/eitri_dwarf.jpg",
		a: [{ text: "Pip", isCorrect: false },
			{ text: "Etrigan", isCorrect: false },
			{ text: "Eitri", isCorrect: true },
			{ text: "Polis", isCorrect: false }
		]
	},
	{
		id: 15,
		q: "What is the name of the soldier that become Abomination?",
		pic: "images/Emil2.webp",
		a: [{ text: "Emmet Blonsky", isCorrect: false },
			{ text: "Emil Blonsky", isCorrect: true },
			{ text: "Emilio Blonsky", isCorrect: false },
			{ text: "Eugene Blonsky", isCorrect: false }
		]
	},
	{
		id: 16,
		q: "In Spider-Man: Homecoming, what is the name of the destroyed ferry?",
		pic: "images/spidey_ferry.jpg",
		a: [{ text: "Brooklyn Ferry", isCorrect: false },
			{ text: "The Queens Ferry", isCorrect: false },
			{ text: "The Staten Island Ferry", isCorrect: true },
			{ text: "The New York Ferry", isCorrect: false }
		]
	},
	{
		id: 17,
		q: "Which one of these phrases is NOT required to brainwash Bucky?",
		pic: "images/zemo.jpg",
		a: [{ text: "Freight Car", isCorrect: false },
			{ text: "Furnace", isCorrect: false },
			{ text: "Seven", isCorrect: true },
			{ text: "Nine", isCorrect: false }
		]
	},
	{
		id: 18,
		q: "When were Tony's parents murdered?",
		pic: "images/stark_parents.jpg",
		a: [{ text: "December 15, 1991", isCorrect: false },
			{ text: "December 18, 1991", isCorrect: false },
			{ text: "December 16, 1991", isCorrect: true },
			{ text: "December 19, 1991", isCorrect: false }
		]
	},
	{
		id: 19,
		q: "Where did Thor go to obtain Stormbreaker?",
		pic: "images/strombreaker.jpg",
		a: [{ text: "Nidavellir", isCorrect: true },
			{ text: "Titan", isCorrect: false },
			{ text: "Knowhere", isCorrect: false },
			{ text: "Milano", isCorrect: false }
		]
	},
	{
		id: 20,
		q: "What is the name of Starlord's ship?",
		pic: "images/milano.jpg",
		a: [{ text: "Guardian's Vessel", isCorrect: false },
			{ text: "Milano", isCorrect: true },
			{ text: "Star", isCorrect: false },
			{ text: "The Planetary", isCorrect: false }
		]
	},
	{
		id: 21,
		q: "In the beginning of The Incredible Hulk, what country does Bruce Banner live in?",
		pic: "images/ed_norton.jpg",
		a: [{ text: "Portugal", isCorrect: false },
			{ text: "Spain", isCorrect: false },
			{ text: "Venezuela", isCorrect: false },
			{ text: "Brazil", isCorrect: true }
		]
	},
	{
		id: 22,
		q: "In Iron Man 3, Happy is seriously injured duing a bombing where?",
		pic: "images/happy.jpg",
		a: [{ text: "JPL Labs", isCorrect: false },
			{ text: "Stark Tower", isCorrect: false },
			{ text: "SHIELD Facility", isCorrect: false },
			{ text: "TCL Chinese Theatre", isCorrect: true }
		]
	},
	{
		id: 23,
		q: "What is the name of the boy that helps Tony in Iron Man 3?",
		pic: "images/harley.jpg",
		a: [{ text: "John", isCorrect: false },
			{ text: "Gabriel", isCorrect: false },
			{ text: "Harley", isCorrect: true },
			{ text: "Hayden", isCorrect: false }
		]
	},
	{
		id: 24,
		q: "What is the name of the scientist that helps Steve become Captain America?",
		pic: "images/Abraham_Erskine.jpg",
		a: [{ text: "Howard Stark", isCorrect: false },
			{ text: "Dr. Emil Hamilton", isCorrect: false },
			{ text: "Johann Schmidt", isCorrect: false },
			{ text: "Abraham Erskine", isCorrect: true }
		]
	},
	{
		id: 25,
		q: "What was Steve Rogers dosed with during the Super Soldier procedure?",
		pic: "images/cap_tube.jpg",
		a: [{ text: "Gamma Rays", isCorrect: false },
			{ text: "Proto-Rays ", isCorrect: false },
			{ text: "Vita-Rays", isCorrect: true },
			{ text: "Super Rays", isCorrect: false }
		]
	},
	{
		id: 26,
		q: "What type of poisoning did Stark suffer from in Iron Man 2?",
		pic: "images/palladium.jpg",
		a: [{ text: "Vibranium", isCorrect: false },
			{ text: "Platinum", isCorrect: false },
			{ text: "Plutonium", isCorrect: false },
			{ text: "Palladium", isCorrect: true }
		]
	},
	{
		id: 27,
		q: "What floor does Sam Wilson jump out of in The Winter Soldier?",
		pic: "images/41st_floor.jpg",
		a: [{ text: "31", isCorrect: false },
			{ text: "23", isCorrect: false },
			{ text: "41", isCorrect: true },
			{ text: "49", isCorrect: false }
		]
	},
	{
		id: 28,
		q: "In Infinity War, where are Wanda and Vision when they are ambushed?",
		pic: "images/wanda_vision.jpg",
		a: [{ text: "London", isCorrect: false },
			{ text: "Toronto", isCorrect: false },
			{ text: "New York", isCorrect: false },
			{ text: "Scotland", isCorrect: true }
		]
	},
	{
		id: 29,
		q: "How many stones does Thanos have when he arrives on Titan?",
		pic: "images/thanos_iw.jpg",
		a: [{ text: "Four", isCorrect: true },
			{ text: "Three", isCorrect: false },
			{ text: "Two", isCorrect: false },
			{ text: "One", isCorrect: false }
		]
	},
	{
		id: 30,
		q: "In Doctor Strange, what is the name of the parapalegic that uses magic to walk?",
		pic: "images/j_pangmore.jpg",
		a: [{ text: "Adam Strange", isCorrect: false },
			{ text: "Justin Langmore", isCorrect: false },
			{ text: "Jonathan Pangmore", isCorrect: true },
			{ text: "Lily Potter", isCorrect: false }
		]
	},
	{
		id: 31,
		q: "What is the title of Flash's book in Spiderman: No Way Home?",
		pic: "images/Flash_Thompson.jpg",
		a: [{ text: "Spideys's Best Friend", isCorrect: false },
			{ text: "Spider-Man's Super Friend", isCorrect: false },
			{ text: "Flashpoint", isCorrect: true },
			{ text: "Web of Friendships", isCorrect: false }
		]
	},
	{
		id: 32,
		q: "Where are Peter and Quentin when Quentin obtains EDITH?",
		pic: "images/spidey_mysterio.jpg",
		a: [{ text: "Abandoned Building", isCorrect: false },
			{ text: "A Bar", isCorrect: true },
			{ text: "A Restaurant", isCorrect: false },
			{ text: "A House", isCorrect: false }
		]
	},
	{
		id: 33,
		q: "Which Avenger does Scott Lang fight in Ant-Man?",
		pic: "images/ant_man falc.jpg",
		a: [{ text: "Falcon", isCorrect: true },
			{ text: "Black Widow", isCorrect: false },
			{ text: "War Machine", isCorrect: false },
			{ text: "Iron Man", isCorrect: false }
		]
	},
	{
		id: 34,
		q: "Which one of these was NOT part of Scott Lang's house arrest montage?",
		pic: "images/paul_rudd_house_arrest.jpg",
		a: [{ text: "Karoke", isCorrect: false },
			{ text: "Napping", isCorrect: true },
			{ text: "Drumming", isCorrect: false },
			{ text: "Reading", isCorrect: false }
		]
	}

]


// MAKE IT A VARIABLE
var button = 0;

for (i=0; i<quizQuestions.length; i++) {

	button++;

	var op1 = document.getElementsByClassName("btn" + String(button));
	var op2 = document.getElementsByClassName("btn" + String((button+1)));
	var op3 = document.getElementsByClassName("btn" + String((button+2)));
	var op4 = document.getElementsByClassName("btn" + String((button+3)));

	var questionOne = document.getElementsByClassName("question-title" + String(i+1));

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
    console.log(answers[i]);
	    op1[0].style.backgroundColor = "green";
      op2[0].style.textDecoration = "line-through";
      op3[0].style.textDecoration = "line-through";
      op4[0].style.textDecoration = "line-through";
	    if (answers[i] != "true") {
				if (optionChosen(i)  == "second") {
					op2[0].style.backgroundColor = "gray";
				}
				if (optionChosen(i)  == "third") {
					op3[0].style.backgroundColor = "gray";
				}
				if (optionChosen(i)  == "fourth") {
					op4[0].style.backgroundColor = "gray";
				}

			}

	  }
	if (op2[0].value == "true") {
    console.log(answers[i]);
	   op2[0].style.backgroundColor = "green";
     op1[0].style.textDecoration = "line-through";
     op3[0].style.textDecoration = "line-through";
     op4[0].style.textDecoration = "line-through";
		 if (answers[i] != "true") {
			 if (optionChosen(i)  == "first") {
				 op1[0].style.backgroundColor = "gray";
			 }
			 if (optionChosen(i)  == "third") {
				 op3[0].style.backgroundColor = "gray";
			 }
			 if (optionChosen(i)  == "fourth") {
				 op4[0].style.backgroundColor = "gray";
			 }
		 }

	  }
	if (op3[0].value == "true") {
    console.log(answers[i]);
	   op3[0].style.backgroundColor = "green";
     op1[0].style.textDecoration = "line-through";
     op2[0].style.textDecoration = "line-through";
     op4[0].style.textDecoration = "line-through";

		 if (answers[i] != "true") {
			 if (optionChosen(i)  == "first") {
				 op1[0].style.backgroundColor = "gray";
			 }
			 if (optionChosen(i)  == "second") {
				 op2[0].style.backgroundColor = "gray";
			 }
			 if (optionChosen(i)  == "fourth") {
				 op4[0].style.backgroundColor = "gray";
			 }
		 }

	  }
	if (op4[0].value == "true") {

    console.log(answers[i]);
	  op4[0].style.backgroundColor = "green";
    op1[0].style.textDecoration = "line-through";
    op2[0].style.textDecoration = "line-through";
    op3[0].style.textDecoration = "line-through";
		if (answers[i] != op1[0].value) {
		 if (optionChosen(i)  == "first") {
			 op1[0].style.backgroundColor = "gray";
     }
     if (optionChosen(i)  == "second") {
				op2[0].style.backgroundColor = "gray";
      }
			 if (optionChosen(i)  == "third") {
				 op3[0].style.backgroundColor = "gray";
			 }
		 }

	  }
	button+=3;
	// console.log("hello");
}

for (x=0; x<answers.length; x++) {
	if (answers[x] == "true") {
		score++;
	}
}
console.log(score);
// console.log(score);

var message = document.getElementsByClassName("playerMessage")[0];

if (score < 5){
  message.innerText =  "Do you even watch the movies? \nYou got " + score + " correct."
}

else if (score < 7) {
  message.innerText =  "Not quite Avenger material... \nYou only got " + score + " correct."

}

else if (score >= 8) {
  message.innerText = "Excelsior! \nYou got " + score + " correct!";
}

// var message = document.getElementsByClassName("playerMessage")[0];
// message.innerText = "Excelsior! \nYou got " + score + " correct!";
