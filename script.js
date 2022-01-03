'use strict';
/* console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent= 'Correct number!';*/

const secretNumber = Math.trunc(Math.random()*20)+ 1;
let score = 20;

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number (document.querySelector('.guess').value);
    console.log(guess, typeof guess );

    if(score > 1){

        // no input
        if (!guess) {
            document.querySelector('.message').textContent = 'No Number';
        } 

        //correct input  
        else if (guess === secretNumber) {  
            document.querySelector('.message').textContent= 'Correct Number';

            document.querySelector('.number').textContent = secretNumber;

            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';
        } 
        
        //wrong input  
        else if(guess > secretNumber) {
          
            document.querySelector('.message').textContent = 'Too High !';
            score--;
            document.querySelector('.score').textContent = score;
        }else if(guess < secretNumber) {
            document.querySelector('.message').textContent = 'Too Low !';
            score--;
            document.querySelector('.score').textContent = score;
        }
    }

    //Lost game
    else{
        document.querySelector('.message').textContent= 'You Lost the Game';
        document.querySelector('.score').textContent = 0;

        document.querySelector('body').style.backgroundColor = '#FF0000';
    }
   
});

document.querySelector('.again').addEventListener('again', function(){


    
});