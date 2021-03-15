var playerName = window.prompt("Whats your robots name?");
var playerHealth = 100;
var playerAttack = 10;

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    //Alert players that the round is starting
    window.alert("Welcome to Robot Gladiators");
    // see if player wants to fight
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? enter 'FIGHT' or 'SKIP'.");
    //subtract value of Player attack from enemyHealth
    enemyHealth = enemyHealth - playerAttack;
    //log resulting message in console
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
    // check enemies health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
    //subtract enemyAttack from playerHealth
    playerHealth = playerHealth - enemyAttack;
    //log result in console
    console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
    //check if our robot is still alive
    if (playerHealth <= 0) {
        window.alert(playerName + " has died.");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health remaining.");
    }

};

fight();
