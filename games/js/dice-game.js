function rollDice(){
    let goldCoins = 0;
    for(i = 0; i < 10; i++){
        const roll = Math.floor(Math.random() *6)+1;
        alert('You roll a ' + roll + '.');
        if(roll === 1){
            alert('Game Over');
            break;
        }
        if (roll === 4 && goldCoins > 0){
            goldCoins -= 1;
            alert('You lost 1 coin your total now is ' + goldCoins);
        }
        if (roll < 5) {
            alert('You have a total of ' + goldCoins);
            continue;
        }
        goldCoins+= roll;
        alert('Congratz you get ' + roll + ' coins.  You have a total of ' + goldCoins);
        
    }
    alert('you have won a total of ' + goldCoins);
}