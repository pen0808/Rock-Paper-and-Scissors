console.log();

function pickComputerMove(){
  // Generate random number
  const randomNumber = Math.random();
  let computerMove = "";

  if(randomNumber >=0 && randomNumber < 1/3){
    computerMove = "Rock";
  }else if(randomNumber >= 1/3 && randomNumber < 2/3){
    computerMove = "Paper";
  }else if(randomNumber >= 2/3 && randomNumber < 1){
    computerMove = "Scissors";
  }
  return computerMove;
}  

let score =JSON.parse(localStorage.getItem("score")) || {
  win: 0, 
  lose: 0, 
  tie: 0
};



// Get player move and know the winner

function playerMove(moves){
  let computermove = pickComputerMove();
  let result = "";
  if(moves === "Rock"){
    if(computermove === "Rock"){
      result = "Tie";
    }else if(computermove === "Paper"){
      result = "You Lose";
    }else if(computermove === "Scissors"){
      result = "You Win";
    }
  }else if(moves === "Paper"){
    if(computermove === "Rock"){
      result = "You Win";
    }else if(computermove === "Paper"){
      result = "Tie";
    }else if(computermove === "Scissors"){
      result = "You Lose";
    }
  }else if(moves === "Scissors"){
    if(computermove === "Rock"){
      result = "You Lose";
    }else if(computermove === "Paper"){
      result = "You Win";
    }else if(computermove === "Scissors"){
      result = "Tie";
    }
  }

  // score
 /* const score ={
    win:0,
    lose:0,
    tie:0
  }*/

  if(result === "You Win"){
    score.win +=1;
  }else if(result === "You Lose"){
    score.lose += 1;

  } else if(result === "Tie"){
    score.tie += 1;
  }

  // Save locally
  localStorage.setItem("score", JSON.stringify(score));

  document.getElementById('demo').innerHTML = result;
  document.getElementById('demo1').innerHTML = `You picked <img src="./img/${moves}-emoji.png" class="img">. Computer picked <img src="./img/${computermove}-emoji.png" class="img">.`
  document.getElementById('demo2').innerHTML = `Win : ${score.win}, Lose : ${score.lose}, Tie : ${score.tie}`

  console.log(`You picked ${moves}. Computer picked ${computermove}. ${result}.\n Win : ${score.win}, Lose : ${score.lose}, Tie : ${score.tie}. `)
}

function resetItems(){
  score.win =0;
  score.lose = 0;
  score.tie = 0; 
  document.getElementById('demo').innerHTML = "";
  document.getElementById('demo1').innerHTML = "";
  document.getElementById('demo2').innerHTML = `Win : ${score.win}, Lose : ${score.lose}, Tie : ${score.tie}`
}
