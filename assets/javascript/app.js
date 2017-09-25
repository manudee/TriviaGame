var triviaTime = 30;



$(document).ready(function(){



$("#startGame").on("click", function(){
	startGame();
});


function startGame() {
      triviaId = setInterval(decrement, 1000);
}

function decrement() {

      triviaTime--;

      $("#triviaTime").html("<h2>" + triviaTime + "</h2>");

}

});
