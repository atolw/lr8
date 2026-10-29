let scoreHuman = 0;
let scoreSi = 0;

userNumber.textContent = scoreHuman;
siNumber.textContent = scoreSi;

function generate()
{
  let userScore = document.getElementById('userScore');
  let siScore = document.getElementById('siScore');
  let userNumber = document.getElementById('userNumber');
  let siNumber = document.getElementById('siNumber');
  
  let newScore1 =Math.floor(Math.random() * 10);
  let newScore2=   Math.floor(Math.random() * 10);
  userScore.textContent = newScore1;
  siScore.textContent = newScore2;

  if(newScore1 > newScore2) {userNumber.textContent = ++scoreHuman}
  else {siNumber.textContent = ++scoreSi}

}
