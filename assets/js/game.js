var playerName = window.prompt("Whats your robots name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;


var fight = function(enemyName) {
    //checks if enemy is alive
    while(enemyHealth > 0) {
        // see if player wants to fight
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? enter 'FIGHT' or 'SKIP'.");
        //wrapping all in if statement for promptFight
        if (promptFight === "fight" || promptFight === "FIGHT") {
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
        }
        else if (promptFight === "skip" || promptFight === "SKIP") {
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                playerMoney = playerMoney - 2;
            }
            else {
                fight();
            }
        }
        else {
            window.alert("You need to choos a valid option. Try again!");
        }
    }

};

for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}
