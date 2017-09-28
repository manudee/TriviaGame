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

  if(!gameStarted){
    triviaId = setInterval(decrement, 1000);
    gameStarted = true;
    $("#triviaTime").show();
  }
}


function stopGame() {

  clearInterval(triviaId);
                   //remove it later and call it when user sees the statistics on answers submitted.

 }

 function reset(){
                gameStarted = false;
                $("#startGame").show();
                triviaTime = 15;
                correctAnswers = 0;
                incorrectAnswers = 0;
                unanswered = 0;
              
                $("#results").empty();
                $("#reset").remove();

               }




 function decrement() {
                triviaTime--;
                $("#triviaTime").html("<h2>" + "TimeRemaining:" +  triviaTime + "</h2>");
                //$("#submit").show();
                if(triviaTime === 0)
                  stopGame();

               }



function createQuiz(){
                $("#startGame").hide();
                for(i=0;i<triviaQ.length;i++){
                  var html = $('<div>').addClass("question col-md-offset-5 game").appendTo('body');
                  $(html).append(triviaQ[i].question)
                  console.log(triviaQ[i].question)

                  for(j=0;j<triviaQ[i].answers.length;j++){
                    console.log(triviaQ[i].answers.length)
        //'<div class="answers">'+triviaQ[i].answers[j]+'</div>'

        var ans =$('<div><input type="radio" id=answer'+i+j+' name=answer'+ i +'><label for=answer'+i+j+'>' + triviaQ[i].answers[j] +'</label></input></div>').addClass("answers col-md-offset-5 game").appendTo('body')
        //$(ans).append(triviaQ[i].answers[j]);
        console.log(triviaQ[i].answers[j]);

    }





}

$('<button id="submit" name="submit">Submit</button>').addClass("btn btn-primary btn-lg col-md-offset-5").appendTo('body');



}

function checkAnswer(){



  $('.question').each(function(i,obj){
                                //var answerValue =$('input[name=answer'+i+']:checked').attr("id");
                                //var answerValue = $('input[name=answer'+i+']:checked').attr("id");

                                var answerValue = $('label[for="' + $('input[name=answer'+i+']:checked').attr("id") + '"]').text();
                                console.log(answerValue);
                                //console.log("HERE" + triviaQ[i].answers[2]);
                                var currAns = triviaQ[i].answers[triviaQ[i].correctAnswer];

                                console.log("Correct Answer " + currAns);

                                if(answerValue === currAns){

                                  correctAnswers++;
                                                // console.log("number of correct answer:"+correctAnswers);
                //                             console.log("number of Incorrect answer:"+unanswered);
    //        console.log("number of unanswered questions:"+incorrectAnswers);
}
else if(!answerValue){
  unanswered++;
                                                // console.log("number of correct answer:"+correctAnswers);
                //                            console.log("number of Incorrect answer:"+unanswered);
    //        console.log("number of unanswered questions:"+incorrectAnswers);
}
else{
  incorrectAnswers++;
                                                // console.log("number of correct answer:"+correctAnswers);
                //              console.log("number of Incorrect answer:"+unanswered);
    //       console.log("number of unanswered questions:"+incorrectAnswers);
}


});

  console.log("number of correct answer:"+correctAnswers);
  console.log("number of Incorrect answer:"+incorrectAnswers);
  console.log("number of unanswered questions:"+ unanswered);




}



function displayStats(){

  $(".game").remove();
  $("#submit").remove();
  //$("#startGame").hide();
  triviaTime = 0;
  stopGame();
  $("#triviaTime").hide();

  


  $( "#results").append(
    "<div><h2>All Done!!!</h2></div>",
    "<div><h2>Correct Answers: " + correctAnswers + "</h2></div>",
    "<div><h2>Incorrect Answers: " + incorrectAnswers + "</h2></div>",
    "<div><h2>Unanswered: " + unanswered + "</h2></div>");

  $('<button id="reset" name="reset">Reset</button>').addClass("btn btn-primary btn-lg col-md-offset-5").appendTo('body');

  



}




$(document).ready(function(){



  $("#startGame").on("click", function(){
    createQuiz();
    startGame();
    
    $("body").on("click", "#submit", function(){

      checkAnswer();
      displayStats();

      $("body").on("click","#reset",function(){

        reset();
      });


    });

    
    

  });



});


