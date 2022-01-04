'use strict';
/* console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent= 'Correct number!';*/

let secretNumber = Math.trunc(Math.random()*20)+ 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
  };

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number (document.querySelector('.guess').value);
    console.log(guess, typeof guess );

    if(score > 1){

        // no input
        if (!guess) {
            displayMessage('No Number !');
        } 

        //correct input  
        else if (guess === secretNumber) {  
            displayMessage('Correct number!');

            document.querySelector('.number').textContent = secretNumber;

            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';

            if(score>highscore){
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
            }
        } 
        
        //wrong input
        else if (guess !== secretNumber){
            displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
            score--;
            document.querySelector('.score').textContent = score;
        }
    }


        /*wrong input  
        else if(guess > secretNumber) {
          
            document.querySelector('.message').textContent = 'Too High !';
            score--;
            document.querySelector('.score').textContent = score;
        }else if(guess < secretNumber) {
            document.querySelector('.message').textContent = 'Too Low !';
            score--;
            document.querySelector('.score').textContent = score;
        }*/

    //Lost game
    else{
        displayMessage('You Lost the Game');
        document.querySelector('.score').textContent = 0;

        document.querySelector('body').style.backgroundColor = '#FF0000';
    }
   
});

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random()*20)+ 1;

    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
  
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  });