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

let humScore=0;
let comScore=0;

function playRound(){
    compChoice=getComputerChoice();
    humChoice=getHumanChoice();
    if ((humChoice=="ROCK" && compChoice=="SCISSORS") || 
        (humChoice=="PAPER" && compChoice=="ROCK") ||
        (humChoice=="SCISSORS" && compChoice=="PAPER")) 
        {
            alert(`You won the round! ${humChoice} beats ${compChoice}`);
            humScore++;
            
        }
    else if(humChoice==compChoice)
    {
        alert("The round is a Tie!");
    }
    else
    {
        alert(`Computer won the round! ${compChoice} beats ${humChoice}`);
        comScore++;
    }
    

}

