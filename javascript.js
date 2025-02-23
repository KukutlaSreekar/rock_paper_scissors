function getComputerChoice(){
    let randNum=Math.floor(Math.random() * 3);
    let compChoice;
    if (randNum==0)
    {
        compChoice="ROCK";
    }
    else if (randNum==1)
    {
        compChoice="PAPER";
    }
    else
    {
        compChoice="SCISSORS";
    }
    return compChoice;
    
}

function getHumanChoice(){
    let humChoice=prompt("Rock, Paper or Scissors?");
    return humChoice.toUpperCase();
}

