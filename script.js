let scoreHuman = 0;
let scoreSi = 0;

function generate() {
  let userScore = document.getElementById('userScore');
  let siScore = document.getElementById('siScore');
  let userNumber = document.getElementById('userNumber');
  let siNumber = document.getElementById('siNumber');
  
  let newScore1 = Math.floor(Math.random() * 10);
  let newScore2 = Math.floor(Math.random() * 10);
  
  userScore.textContent = newScore1;
  siScore.textContent = newScore2;

 if (newScore1 > newScore2) {
    scoreHuman++;
    userNumber.textContent = scoreHuman;
  } else if (newScore2 > newScore1) {
    scoreSi++;
    siNumber.textContent = scoreSi;
  } 

  if (scoreHuman >= 3 || scoreSi >= 3) {
    if (scoreSi >= 3) {
      alert("Super Intelligence wins!");
    } else {
      alert("User wins!");
    }
    
    scoreHuman = 0;
    scoreSi = 0;
    userNumber.textContent = scoreHuman;
    siNumber.textContent = scoreSi;
  }
}
