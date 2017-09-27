var triviaTime = 5;
var gameStarted = false;

//global object for trivia questions
var triviaQ = [


{
	question: "What is the national language of India?",
	answers: ["English","Hindi","Tulu","Nepali"],
	correctAnswer: 1

},

{
	question: "The oldest parliament in the world belongs to what country?",
	answers: ["Iceland","Netherlands","Scotland","Ireland"],
	correctAnswer: 0

},

{
	question: "In what year did Fidel Castro die?",
	answers: ["2015","2014","2016","2017"],
	correctAnswer: 2

},

{
	question: "HTML and CSS are computer languages used to create what?",
	answers: ["Bugs","Games","Toys","WebSites"],
	correctAnswer: 3

},

{
	question: "In our solar system which two planets rotate clockwise?",
	answers: ["Mars and Saturn","Neptune and pluto","Venus & Uranus","None of the above"],

	correctAnswer: 2

}



]


function startGame() {

	if(!gameStarted){
		triviaId = setInterval(decrement, 1000);
		gameStarted = true;
	}
}


function stopGame() {

	clearInterval(triviaId);
 	     reset();//remove it later and call it when user sees the statistics on answers submitted.
 	     
 	 }

 	 function reset(){
 	 	gameStarted = false;
 	 	$("#startGame").show();
 	 	triviaTime = 5;

 	 	

 	 }




 	 function decrement() {
 	 	triviaTime--;
 	 	$("#triviaTime").html("<h2>" + "TimeRemaining:" +  triviaTime + "</h2>");
 	 	$("#submit").show();
    //  if(triviaTime === 0)
      //	stopGame();

  }



  function createQuiz(){
  	
  	for(i=0;i<triviaQ.length;i++){
  		var html = $('<div>').addClass("question").appendTo('body');
  		$(html).append(triviaQ[i].question)
  		console.log(triviaQ[i].question)
  		
  		for(j=0;j<triviaQ[i].answers.length;j++){
  			console.log(triviaQ[i].answers.length)
        //'<div class="answers">'+triviaQ[i].answers[j]+'</div>'
        
        var ans =$('<div><input type="radio" name="answer">' +triviaQ[i].answers[j] +'</input></div>').addClass("answers").appendTo('body')
        //$(ans).append(triviaQ[i].answers[j]);
        console.log(triviaQ[i].answers[j]);
    }
    




}

}

function checkAnswer(){



}






$(document).ready(function(){

	$("#submit").hide();

	$("#startGame").on("click", function(){
		createQuiz();
		startGame();

		$("#startGame").hide();
		
	});






});
