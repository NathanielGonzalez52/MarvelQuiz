// var x = 0;
// while (x < 1000) {
// 	var randNum = Math.random();
// 	console.log(Math.floor(randNum * (11 + 1)));
// 	x++;
// }
//
//
// // console.log(randNum());
// // Questions will be asked
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

	}


]

// console.log(Questions.length)
//
// Set start
var start = true;
//



// Iterate
function iterate(id) {
	// gameStarted = true;
	// if (gameStarted) {
	//
	// }
	// var score = 0;
	// Getting the result display section
	// var result = document.getElementsByClassName("result");
	// result[0].innerText = "";

	// Getting the question

	// const question = document.getElementById("question");
	// Setting question title TEXT


	// title.innerText = "Question " + Number(question);
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

	var selected = "";

	// Show selection for op1
	op1.addEventListener("click", () => {
		op1.style.backgroundColor = "green";
		op2.style.backgroundColor = "grey";
		op3.style.backgroundColor = "grey";
		op4.style.backgroundColor = "grey";
		selected = op1.value;
	})

	// Show selection for op2
	op2.addEventListener("click", () => {
		op1.style.backgroundColor = "grey";
		op2.style.backgroundColor = "green";
		op3.style.backgroundColor = "grey";
		op4.style.backgroundColor = "grey";
		selected = op2.value;
	})

	// Show selection for op3
	op3.addEventListener("click", () => {
		op1.style.backgroundColor = "grey";
		op2.style.backgroundColor = "grey";
		op3.style.backgroundColor = "green";
		op4.style.backgroundColor = "grey";
		selected = op3.value;
	})

	// Show selection for op4
	op4.addEventListener("click", () => {
		op1.style.backgroundColor = "grey";
		op2.style.backgroundColor = "grey";
		op3.style.backgroundColor = "grey";
		op4.style.backgroundColor = "green";
		selected = op4.value;
	})
	// // Grabbing the next button
	// const next = document.getElementsByClassName("next");
	//
	// // Evaluate method
	// next[0].addEventListener("click", () => {
	// 	question++;
	// 	if (selected == "true") {
	// 		score += 1;
	// 	} else {
	// 		console.log("wrong");
	// 	}
	// })

	// PREVIOUS FUNCTION
	// const previous = document.getElementsByClassName("previous")
	//
	// // Previous functionality
	// previous[0].addEventListener("click", () => {
	//
	// 	title.innerText = "Question " + Number(id-1);
	// 	// Setting the question text
	// 	question.innerText = Questions[id-1].q;
	// })


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

// RANDOMIZE QUESTIONS

// Questions will be asked
function randNum() {
	var randValue = Math.random();
	// Math.floor(randNum * (11 + 1))
	var randQues = Math.floor(randValue * (10+1))
	return randQues;
	// if (nums.includes(randQues)) {
	// 	console.log(randQues);
	// 	console.log("Already used")
	// 	nums.pop();
	// 	console.log(nums);
	// 	randNum()
	// } else {
	// 	nums.push(randQues)
	// 	return randQues;
	// }

}

const nums = [];


// first random question
if (start) {
	var id = 1;
	title.innerText = "Question " + Number(id);
	var firstQuestion = randNum();
	nums.push(firstQuestion);
	iterate(firstQuestion.toString());
	// console.log(nums);
}

// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 1;

gameOn = true;

next.addEventListener("click", () => {
	start = false;
	if (id <= Questions.length-1) {
		id++;
		var nextQuestion = randNum();
		// console.log(nextQuestion)
		// while (id < 11) {
		// 	var a = randNum();
		// 	console.log(a);
		// 	id++;
		// }
		while (nums.includes(nextQuestion)) {
			// console.log(nextQuestion);
				nextQuestion = randNum();
				console.log("Yes, it's already been selected.");
				console.log(nextQuestion);
		}

		nums.push(nextQuestion);
		console.log(nums);
		// console.log(nums)
		title.innerText = "Question " + Number(id);
			// nums.push
		iterate(nextQuestion.toString());

		// title.innerText = "Question " + Number(id);
		// iterate(nextQuestion.toString());
		// console.log(randNum());
	}

})

// C:\Users\natha\OneDrive\desktop\MarvelQuiz\index.html
