$( document ).ready(function() {

	// Sound:
	//new Audio('./assets/audio/My-Shot.mp3').play();

  	//function playGame(){
  		//clicking start button will begin timer and call play game function


		var correctAnswers = []
		var wrongAnswers = []
		var unanswered = []
		//var counter = [] //not sure if i need this

		var trivia = [
			{
				question: "What department of the Federal Government was Alexander Hamilton in charge of?",
				answers: ["State", "Education", "Labor", "Treasury"],
				rightAnswer: "Treasury",
			},

			{
				question: "Hamilton did not help establish which of the following?",
				answers: ["First National Bank", "US Coast Guard", "Smithsonian Museum", "US Mint"],
				rightAnswer: "Smithsonian Museum",
			},

			{
				question: "Where was Alexander Hamilton born?",
				answers: ["France", "USA", "Nevis", "Ireland"],
				rightAnswer: "Nevis",
			},

		]

		function radioButtons(name, value, text) {
			var form = document.createElement("form");
			radio = document.createElement("input");
			radio.type = "radio";
			radio.name = name;
			radio.value = value;
			form.appendChild(radio);
			form.appendChild(document.createTextNode(text[0]));
			

			var radioTwo = document.createElement("input");
			radioTwo.type = "radio";
			radioTwo.name = name;
			radioTwo.value = value;

			form.appendChild(radioTwo);

			form.appendChild(document.createTextNode(text[1]));
			return form;
		}




		for (var i =0; i < trivia.length; i++) {
			$("#quiz").append("<p>" + trivia[i].question + "</p>");

			var list = trivia[i].answers;

			var button = radioButtons("button", "value", list);
			$("#quiz").append(button);
			
		};


		//create a submit button
		$("#submit").on("click", function(){

			var isRadio = $("input[type = 'radio']");
			console.log(isRadio);

			//loop through questions
			for( i = 0; i < isRadio.length; i++){
				
				if(isRadio.checked === true){
					console.log("is checked");
				}
			};


		});


	


	














//looking for an on checked event
//make a class of correct and incorrect answers
//listen if correct answer changed
// function isCorrect() {
// 	for (var i = 0; i < 4; i++) {
// 	}
// }

// 	$(".correct").change(function() {
// 	    if(this.checked) {
// 	    correctAnswers++;
// 	    console.log(correctAnswers);
// 		console.log(wrongAnswers);
// 		console.log("correct here I am");
// 	    }
// 	});

// 	$(".wrong").change(function() {
// 	    if(this.checked) {
// 	    wrongAnswers++;
// 	    console.log(correctAnswers);
// 		console.log(wrongAnswers);
// 		console.log("wrong is here");
// 	    }
// 	});






	//}  //closing for play game function
});  //closing for doc ready

//playGame()

