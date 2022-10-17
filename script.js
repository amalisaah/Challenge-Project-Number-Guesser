let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget=()=> (Math.ceil(Math.random()*9))

function compareGuesses(human,target,computer){
  if (human< 0 || human >9)
    alert('dude follow rules');
  let humanError=human -target;
  if (humanError==0)
    return true;
  if (humanError< 0)
    humanError*=-1;
  let computerError =computer - target;
  if (computerError< 0)
    computerError*=-1;
  return humanError<= computerError ? true:false;
}
function updateScore(winner){
  switch (winner){
    case 'human':humanScore+=1;
  break
    case 'computer':computerScore+=1;
  }
  // winner==='human'? humanScore+=1: computerScore+=1;
}

advanceRound=()=>{
  currentRoundNumber+=1;
}
