var playerName = window.prompt("Whats your robots name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;


var fight = function(enemyName) {
    //checks if enemy is alive
    while(enemyHealth > 0 && playerHealth > 0) {
        // see if player wants to fight
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? enter 'FIGHT' or 'SKIP'.");
        //if player skips fight
        if (promptFight === "skip" || promptFight === "SKIP") {
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }
            else {
                fight();
            }
        }
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
                //if enemy health less than 0 leave while loop
                break;
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
                //leave while loop if player is dead
                break;
            }
            else {
                window.alert(playerName + " still has " + playerHealth + " health remaining.");
            }
        }
        else {
            window.alert("You need to choos a valid option. Try again!");
        }
    }

};
//start game function
var startGame = function() {
    //ensures player starts with correct values every game
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    for(var i = 0; i < enemyNames.length; i++) {
        if (playerHealth >0) {
            //let player know what round their in
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
            //pick new enemy to fight based on index of enemyNames array
            var pickedEnemyName = enemyNames[i];
            //reset enemyHealth before starting new fight
            enemyHealth = 50;
            //passed pickedEnemyName variable through the fight function
            fight(pickedEnemyName);
            // if were not at the last enemy in the array nad player is still alive
            if (playerHealth > 0 && i < enemyNames.length - 1) {
                //ask player if they want to use the store before the next round
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
                //if yes take them to the store function
                if (storeConfirm) {
                    shop();
                }
                
            }
        }
        else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }
    //play again
    endGame();
};
var endGame = function() {
    window.alert("The game has now ended. lets see how you did!");
    //if player alive, player wins
    if (playerHealth > 0) {
        window.alert("Great Job, you've survived the game! You now have a score of " + playerMoney + ".");
    }
    else {
        window.alert("You've lost your robot in battle.");
    }
    //ask player if they want to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        //restart the game
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }

};
//shop function
var shop = function() {
    //ask player what they want to do
    var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the shop? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE'.");
    //use switch to carry out action
    switch (shopOptionPrompt) {
        case "refill":
            window.alert("Refilling player's health by 20 for 7 dollars.");
            //increase health and decrease money
            playerHealth = playerHealth + 20;
            playerMoney = playerMoney - 7;
            break;
        case "upgrade":
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            //increase attack and decrease money
            playerAttack = playerAttack + 6;
            playerMoney = playerMoney - 7;
            break;
        case "leave":
            window.alert("Leaving the store.");
            //do nothing so the function will end
            break;
        default:
            window.alert("You did not pick a valid option. Try again.");
            //call shop again to force player to choose valid option
            shop();
            break;
    }
}
//start the game when the page loads/calls startGame function
startGame();
