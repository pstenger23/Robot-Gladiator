


var fight = function(enemy) {
    //checks if enemy is alive
    while(enemy.health > 0 && playerInfo.health > 0) {
        // see if player wants to fight
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? enter 'FIGHT' or 'SKIP'.");
        //if player skips fight
        if (promptFight === "skip" || promptFight === "SKIP") {
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            if (confirmSkip) {
                window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
                playerInfo.money = Math.max(0, playerInfo.money - 10);
                console.log("playerMoney", playerInfo.money);
                break;
            }
            else {
                fight();
            }
        }
        //wrapping all in if statement for promptFight
        if (promptFight === "fight" || promptFight === "FIGHT") {
            //generate random damage value based on players attack power
            var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack)
            //subtract value of Player attack from enemyHealth
            enemy.health = Math.max(0, enemy.health - damage);
            //log resulting message in console
            console.log(
                playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
            );
            // check enemies health
            if (enemy.health <= 0) {
                window.alert(enemy.name + " has died");
                //if enemy health less than 0 leave while loop
                break;
            }
            else {
                window.alert(enemy.name + " still has " + enemy.health + " health left.");
            }
            //generate random damage value based on attack power
            var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
            //subtract enemyAttack from playerHealth
            playerInfo.health = Math.max(0, playerInfo.health - damage);
            //log result in console
            console.log(enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining.");
            //check if our robot is still alive
            if (playerInfo.health <= 0) {
                window.alert(playerInfo.name + " has died.");
                //leave while loop if player is dead
                break;
            }
            else {
                window.alert(playerInfo.name + " still has " + playerInfo.health + " health remaining.");
            }
        }
        else {
            window.alert("You need to choos a valid option. Try again!");
        }
    }

};
//start game function
var startGame = function() {
    //reset player stats
    playerInfo.reset();
    for(var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health >0) {
            //let player know what round their in
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
            //pick new enemy to fight based on index of enemyNames array
            var pickedEnemyObj = enemyInfo[i];
            //reset enemyHealth before starting new fight
            pickedEnemyObj.health = randomNumber(40, 60);
            //passed pickedEnemyName variable through the fight function
            fight(pickedEnemyObj);
            // if were not at the last enemy in the array nad player is still alive
            if (playerInfo.health > 0 && i < enemyNames.length - 1) {
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
    if (playerInfo.health > 0) {
        window.alert("Great Job, you've survived the game! You now have a score of " + playerInfo.money + ".");
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
        case "REFILL":
        case "refill":
            if (playerMoney >= 7) {
                window.alert("Refilling player's health by 20 for 7 dollars.");
                //increase health and decrease money
                playerInfo.health = playerInfo.health+ 20;
                playerInfo.money = playerInfo.money - 7;
            }
            else {
                window.alert("You do not have enough money!");
            }
            break;
        case "UPGRADE":
        case "upgrade":
            if (playerInfo.money>= 7) {
                window.alert("Upgrading player's attack by 6 for 7 dollars.");
                //increase attack and decrease money
                playerInfo.attack = playerInfo.attack + 6;
                playerInfo.money = playerInfo.money - 7;
            }
            else {
                console.log("You do not have enough money!");
            }
            break;
        case "LEAVE":
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
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};

var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100,
        this.money = 10,
        this.attack = 10
    },
    refillHealth: function() {
        this.health += 20;
        this.money -= 7;
    },
    upgradeAttack: function() {
        this.attack += 6;
        this.money -= 7;
    }
};

var enemyInfo = [
    {
    name: "Roborto",
    attack: randomNumber(10, 14)
},
{
    name: "Amy Android",
    attack: randomNumber(10, 14)
},
{
    name: "Robo Trumble",
    attack: randomNumber(10, 14)
}
];
//start the game when the page loads/calls startGame function
startGame();
