const buttons = document.querySelectorAll('button');
const showResult = document.querySelector(".result");
const yourScore = document.getElementById('yourScore');
const compScore = document.getElementById('compScore');



buttons.forEach((button)=>{
  button.addEventListener('click', ()=>{
    const usersChoice = button.id;
    const result = resultDisplay(usersChoice, compPlay());
    showResult.textContent = result;
    yourScore.innerHTML = pScore;
    compScore.innerHTML = cScore;
  })
})

    function compPlay(){
      const choices = ["rock" , "paper" , "scissors"];
      const randomChoice = 
      Math.floor(Math.random()*choices.length);
      return choices[randomChoice];
    }
    let pScore = 0;
    let cScore = 0;

    function resultDisplay(playerChoice, computerChoice){
      if(
        playerChoice === computerChoice){
        return "Uh oh, it's a tie!"
      }else if(
        playerChoice === "rock" && computerChoice === "paper" || 
        playerChoice === "paper" && computerChoice === "scissors" ||
        playerChoice === "scissors" && computerChoice === "rock"){
          cScore++
        return "You lose 😥  " + computerChoice + " beats " + playerChoice;
      }else{
        pScore++
        return "You won 🎊  " + playerChoice + " beats " + computerChoice;
        }
    }
