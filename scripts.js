const choices=["rock","paper","scissors"]
const playerDisplay=document.getElementById("playerDisplay")
const computerDisplay=document.getElementById("CompuerDisplay")
const resultDisplay=document.getElementById("resultDisplay")
const PlayerScoreDisplay=document.getElementById("playerScore")
const ComputerScoreDisplay=document.getElementById("computerScore")
let playerScore=0
let computerScore=0
let tie=0
function playgame(playerChoice)
{
    const computerChoice=choices[Math.floor(Math.random()*3)]
   let result=""

   if(playerChoice===computerChoice)
   {
    result="IT'S A TIE !"
    resultDisplay.textContent
   }
   else
   {
    switch(playerChoice)
    {
        case "rock":
         result=(computerChoice==="scissors")?"YOU WIN":"YOU LOSE"
         break

         case "paper":
            result=(computerChoice==="rock")?"YOU WIN":"YOU LOSE"
        break 

        case "scissors":
            result=(computerChoice==="paper")?"YOU WIN":"YOU LOSE"
        break 

    }
   }
   playerDisplay.textContent=`PLAYER:-  ${playerChoice}`
   computerDisplay.textContent=`COMPUTER:-  ${computerChoice}`
   resultDisplay.textContent=result
   resultDisplay.classList.remove("yellow-text","green-text")
   resultDisplay.classList.remove("red-text","green-text")
  switch(result)
  {
    case "YOU WIN":
        resultDisplay.classList.add("green-text")
        playerScore++
        PlayerScoreDisplay.textContent=`${playerScore}`
    break

    case "YOU LOSE":
        resultDisplay.classList.add("red-text")
        computerScore++
        ComputerScoreDisplay.textContent=`${computerScore}`
    break

    case "IT'S A TIE !":
        tie++
        resultDisplay.classList.add("yellow-text")
  }
}