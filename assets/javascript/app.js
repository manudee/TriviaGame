var triviaTime = 15;
var gameStarted = false;


var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;


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
 $("#reset").hide();
  if(!gameStarted){
    triviaId = setInterval(decrement, 1000);
    gameStarted = true;
    $("#triviaTime").show();
  }
}


function stopGame() {

  clearInterval(triviaId);

 }

 function reset(){
                gameStarted = false;
                triviaTime = 15;
                correctAnswers = 0;
                incorrectAnswers = 0;
                unanswered = 0;
                $("#startGame").show();
                $("#results").empty();
                $("#reset").hide();
}




 function decrement() {
                triviaTime--;
               
                $("#triviaTime").html("<h2>" + "TimeRemaining:" +  triviaTime + "</h2>");
              
                if(triviaTime === 0)
                  stopGame();

}



function createQuiz(){
   
//hide the startGame button once Quiz is created.
   $("#startGame").hide();
                

    for(i=0;i<triviaQ.length;i++){
         var html = $('<div>').addClass("question col-md-offset-5 game").appendTo('body');
         $(html).append(triviaQ[i].question)
          //console.log(triviaQ[i].question)

           for(j=0;j<triviaQ[i].answers.length;j++){
              //console.log(triviaQ[i].answers.length)
              var ans =$('<div><input type="radio" id=answer'+i+j+' name=answer'+ i +'><label for=answer'+i+j+'>' + triviaQ[i].answers[j] +'</label></input></div>').addClass("answers col-md-offset-5 game").appendTo('body')
              //console.log(triviaQ[i].answers[j]);

          }
}


//Create the submit button on the fly once quiz is created
$('<button id="submit" name="submit">Submit</button>').addClass("btn btn-primary btn-lg col-md-offset-5").appendTo('body');



}

function checkAnswer(){



  $('.question').each(function(i,obj){
      
        var answerValue = $('label[for="' + $('input[name=answer'+i+']:checked').attr("id") + '"]').text();
         //console.log(answerValue);
                               
        var currAns = triviaQ[i].answers[triviaQ[i].correctAnswer];
        //console.log("Correct Answer " + currAns);

        if(answerValue === currAns)
           correctAnswers++;  
        else if(!answerValue)
            unanswered++;
        else
            incorrectAnswers++;


      });

  // console.log("number of correct answer:"+correctAnswers);
  // console.log("number of Incorrect answer:"+incorrectAnswers);
  // console.log("number of unanswered questions:"+ unanswered);
}



function displayStats(){


  //remove questions and answers from the div with class game once stats are displayed.
  $(".game").remove();
 
  //remove submit button once stats are displayed
  $("#submit").remove();

  //set triviaTime to 0 and call StopGame
  triviaTime = 0;
  stopGame();

  //hide triviaTime div on displaying stats
  $("#triviaTime").hide();

  //empty the results before you append the stats. This is needed for subsequent games even if not needed for the 1st run
  $("#results").empty();

  $( "#results").append(
    "<div><h2>All Done!!!</h2></div>",
    "<div><h2>Correct Answers: " + correctAnswers + "</h2></div>",
    "<div><h2>Incorrect Answers: " + incorrectAnswers + "</h2></div>",
    "<div><h2>Unanswered: " + unanswered + "</h2></div>");


  //show the reset button to start a new game
  $("#reset").show();


}




$(document).ready(function(){
  //hide reset at the beginning
           $("#reset").hide();
  //on clicking start game, create the quiz and start the timer
           $("#startGame").on("click", function(){
                    createQuiz();
                    startGame();
  //on clicking submit check the answer to calculate variables and then call displaystats to show results.                  
           $("body").on("click", "#submit", function(){
                    checkAnswer();
                    displayStats();
 // on clicking reset start a new game after resetting all the variables.
            $("body").on("click","#reset",function(){
                  reset();
            });


            });
    });

});