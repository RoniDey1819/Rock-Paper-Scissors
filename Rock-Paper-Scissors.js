let score = JSON.parse(localStorage.getItem('score'))
|| {
wins:0,
losses:0,
ties:0,
};
//const score is an object variable , who store JSON.parse object 
//which is store in localStorage also
/*if(!score){
score = {
wins:0,
losses:0,
ties:0,
};
}*/

function resetScore(){
score.wins=0;
score.losses=0;
score.ties=0;
localStorage.removeItem('score');
updateScoreElement();

document.querySelector('.js-result').innerHTML = 'No Result';

document.querySelector('.js-moves')
.innerHTML = `You :
<span class="empty-span">.</span>
<span class="empty-span">.</span>
: Computer`
}

function updateScoreElement(){
document.querySelector('.js-score')
.innerHTML = `win : ${score.wins} loss : ${score.losses} tie : ${score.ties}`;
}

function computerChoose(){
const randomNumber=(Math.random());
let computerMove='';

if(randomNumber >= 0 && randomNumber < 1/3)
{computerMove='Rock';}
else if(randomNumber >= 1/3 && randomNumber < 2/3)
{computerMove='Paper';}
else if(randomNumber >= 2/3 && randomNumber < 1)
{computerMove= 'Scissor';}

return computerMove;
}


function mainGame(computerMove,myMove){
let result='';
if(myMove==='Rock'){
if(computerMove === 'Rock'){
    result = 'Tie';
}
else if(computerMove === 'Paper'){
    result = 'You Loss';
}
else if(computerMove === 'Scissor'){
    result = 'You win';
}
}
else if(myMove==='Paper'){
if(computerMove === 'Rock'){
    result = 'You win';
}
else if(computerMove === 'Paper'){
    result = 'Tie';
}
else if(computerMove === 'Scissor'){
    result = 'You Loss';
}
}
else if(myMove==='Scissor'){
if(computerMove === 'Rock'){
    result = 'You Loss';
}
else if(computerMove === 'Paper'){
    result = 'You win';
}
else if(computerMove === 'Scissor'){
    result = 'Tie';
}
}

if(result === 'You win'){
score.wins += 1;
}
else if(result === 'You Loss'){
score.losses += 1;
}
else if(result === 'Tie'){
score.ties += 1;
}

localStorage.setItem('score',JSON.stringify(score));

document.querySelector('.js-result')
.innerHTML = result

document.querySelector('.js-moves')
.innerHTML = `You :
<img src="img/${myMove}.png" class="move-icon">
<img src="img/${computerMove}.png" class="move-icon">
: Computer`

updateScoreElement();
}

updateScoreElement(); // function call

let isAutoPlaying = false ;
let intervalId ;

function autoplay() {
    if(!isAutoPlaying) {
        intervalId = setInterval(function() {
            const playerMove = computerChoose();
            const playerMove2 = computerChoose();
            mainGame(playerMove,playerMove2);
        },1300);
        isAutoPlaying = true;
    } else {
        clearInterval(intervalId);
        isAutoPlaying = false;
    } 
}
