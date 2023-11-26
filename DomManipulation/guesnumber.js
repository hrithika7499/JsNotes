let random=parseInt(Math.random()*100+1);
// select the selectors for dom 

const userInput=document.querySelector('#guessField');
const submit=document.querySelector('#subt');
const guessSlot=document.querySelector('.guesses');
const guessRemain =document.querySelector('.lastResult');
const loworhi=document.querySelector('.lowOrHi');
const startOver=document.querySelector('.resultParas');

const p=document.createElement('p');


//array to store all prev guess
let prevgues=[];
let numguess=1;//increment the guess counter to end after 10
let playgame=true;//start of loop
if(playgame){
 submit.addEventListener('click',function(e){
   e.preventDefault();
   const guess=parseInt(userInput.value);
   validateGuess(guess);
 })

  }

  function validateGuess(guess){
    if(isNaN(guess)){
      alert('Please Enter a Valid Number');
    }else if(guess<1){
      alert('Please enter a valid number');

    }else if(guess>100){
      alert('Please Enter a Valid Number');
    }
    
    else {
      //push the gues into array
      prevgues.push(guess);

        //what if that chance would be last
      if(numguess === 11){
        displayGuess(guess);
        displayMessage(`Game Over! The number was ${random}`);
        endGame();

    }else{
    displayGuess(guess);
    checkGuess(guess);
    }
  }
}

function checkGuess(guess){
  if(guess===random){
    displayMessage('Congratualations ! You Have Guess it Right')
    endGame();
  }
  else if(guess< random){
    displayMessage('Argh!! Your Guess was too low for the random number');
  }else if (guess>random){
    displayMessage('OHHH !!! Your Guess was as High as your expectations ')
  }
}

function displayGuess(guess){
  userInput.value='';//basially empty the input field
  guessSlot.innerHTML+=`${guess},   `;
  numguess++;
  guessRemain.innerHTML=`${11-numguess}`;

}

function displayMessage(message){
  loworhi.innerHTML=`<h2>${message}</h2>`;
}
function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame(){
const newgamebutton=document.querySelector('#newGame');
newgamebutton.addEventListener('click',function(e){
  e.preventDefault();
  random=parseInt(Math.random()*100+1);
  prevgues=[];
  numguess=1;
  guessSlot.innerHTML='';
  guessRemain.innerHTML=`${11-numguess}`;
  userInput.removeAttribute('disabled');
  startOver.removeChild(p);
  playgame=true;
})
}





