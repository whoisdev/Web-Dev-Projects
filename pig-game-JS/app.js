/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores,round_score,active_player,dice;

scores = [0,0];
round_score = 0;
active_player = 0;
document.querySelector('.dice').style.display='none';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';
document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';

document.querySelector(".btn-roll").addEventListener('click',function(){
    dice = Math.floor(Math.random()*6)+1;
    document.querySelector('.dice').style.display='block';
    document.querySelector('.dice').src = './dice-' + dice + '.png';
    if( dice !==1 ) {
        var current_score=Number(document.querySelector('#current-' + active_player).textContent);
        current_score+=dice;
        document.querySelector('#current-' + active_player).textContent=current_score;
    }else{
        if(active_player==0){
            active_player=1;
        }
        else{
            active_player=0;
        }

    }

});