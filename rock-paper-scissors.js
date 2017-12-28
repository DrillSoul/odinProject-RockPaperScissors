function computerChoice(foo) {
  var randomNo = Math.floor((Math.random() * 3) + 1);
  if (randomNo === 1) {
    foo = "rock";
  }
  else if (randomNo === 2){
    foo = "paper";
  }
	  else {
		  foo="scissors";
	  }
  return foo;
}
function rockPaperScissors(score) {
  
  var playerMove = prompt("Rock, paper, or scissors?");
  playerMove.toLowerCase();
  var compMove = "";
compMove = computerChoice(compMove);
  if (playerMove===compMove)
    { alert("The result is a tie!");}
    else if (playerMove==="rock")
    {
        if (compMove==="scissors")
        {alert("Rock wins!");
		score.playerScore = score.playerScore + 1;
			}
        else if (compMove==="paper")
        {alert("Paper wins...");
			score.compScore = score.compScore + 1;
			}
		
    }
    else if (playerMove==="paper")
    {
        if (compMove==="rock")
        {alert("Paper wins!");
			score.playerScore = score.playerScore + 1;
		 
			}
        else if (compMove==="scissors")
        {alert("Scissors wins...");
			score.compScore = score.compScore + 1;
		 
			}
		
    }
    else if (playerMove==="scissors")
    {
        if (compMove==="rock")
        {
			alert("Rock wins...");
			score.compScore = score.compScore + 1;
			}
        else if (compMove==="paper")
        {alert("Scissors wins!");
			score.playerScore = score.playerScore + 1;
		 
			}
		
    }
    else
    { alert("Invalid entry.");
	rockPaperScissors(score);
	}
	return score;
}

function RPS_5Rounds() {
	
	
	
	var tally = {
		playerScore: 0,
		compScore: 0
	};
	
	
	//Round 1
	alert("Round 1!");
	rockPaperScissors(tally);
	alert("Player Score: " + tally.playerScore);
	alert("Computer Score: " + tally.compScore);
	
	//Round 2
	alert("Round 2!");
	rockPaperScissors(tally);
	alert("Player Score: " + tally.playerScore);
	alert("Computer Score: " + tally.compScore);
	
	//Round 3
	alert("Round 3!");
	rockPaperScissors(tally);
	alert("Player Score: " + tally.playerScore);
	alert("Computer Score: " + tally.compScore);
	
	//Round 4
	alert("Round 4!");
	rockPaperScissors(tally);
	alert("Player Score: " + tally.playerScore);
	alert("Computer Score: " + tally.compScore);
	
	//Round 5
	alert("Round 5!");
	rockPaperScissors(tally);
	alert("Player Score: " + tally.playerScore);
	alert("Computer Score: " + tally.compScore);
	

}

function RPS_game() {
	alert("Let's play Rock, Paper, Scissors!");
	RPS_5Rounds();
	var nextRound = prompt("Would you like to play again? (Yes or No)");
	nextRound.toLowerCase();
	if (nextRound === "yes") {
		RPS_game();
	}
	else {
		alert("Thanks for playing!");
	}
}

RPS_game();






