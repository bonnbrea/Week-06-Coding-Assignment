//create an automated version of the classic game WAR!

//the game consists of two players, so lets start by creating a class to create these players with. Each player will need a name, hand, and score to keep track of.

class Player {
    constructor (name){
    this.player= name;
    this.playerHand= [];
    this.playerScore= 0
    }
}


//next, lets create the cards that will go into the deck, with the arguments being face, value, and suit
class Card {
    constructor (face, value, suit){
        this.face=face;
        this.value=value
        this.suit=suit;
    }
}

//now that the class Card has been created, we need to create the class deck for the deck of cards in the game using an array

class Deck {
    constructor(){
    this.deckOfCards= [];
    }

    //next we add a method called makeDeck to give value to suits, face, and values in the deck

    makeDeck(){
        this.deckOfCards=[];
        const faces= [2,3,4,5,6,7,8,9,10,'J','Q','K','A'];
        const values= [2,3,4,5,6,7,8,9,10,11,12,13,14];             //the values array is to make sure the system knows what value face cards, such as king, hold compared to other numbered cards. 
        const suits=['Clubs','Diamonds','Hearts','Spades'];

        //now we create need to make a loop that will create into the array deckOfCards

        for (let f=0; f < faces.length; f++){
            for (let s=0; s < suits.length; s++){
                for (let v=0; v < values.length; v++){
                this.deckOfCards.push(new Card(faces[f], values[v], suits[s]));
            }
        }
    }
    }
//next we want to add a method to shuffle the deck using the Fisher-Yates shuffle algorithm 
     shuffleDeck(){
        const shuffle= this.deckOfCards;
        for (let i=shuffle.length-1;i>0;i--){
            let x= Math.floor(Math.random()*(i+1));
            let holdArray = shuffle [i];     //this is a place holder for the iteration of our deck
            shuffle [i] = shuffle [x];
            shuffle [x] = holdArray;

        }
    }
    

}


const deck= new Deck();




//before we start our game, lets name our players using the player class
const playerOne= new Player('Bre');
const playerTwo= new Player('Luke');




//next lets start the game with the game class. The game will start with dealing the shuffled deck of cards to each player
class Game {
    constructor(){
        this.playersInGame=[];
    }

    startGame(){
        this.playersInGame.push(playerOne);
        this.playersInGame.push(playerTwo);
        deck.makeDeck();
        deck.shuffleDeck();
        this.dealHand();
        this.anyRound();
        this.finalScore();
    }

    dealHand(){
        let cards= deck.deckOfCards.splice(0,26);
        playerOne.playerHand.push(cards);
        let cardsTwo= deck.deckOfCards;
        playerTwo.playerHand.push(deck);
    }






    anyRound(){
        for (let round=0; round <26; round++){          //now we create a for loop for all of the rounds. This will go 26 rounds so each player plays all of their cards. 
        let playerOneCard=playerOne.playerHand.pop();       //pop will take the next card out of the players hand to play
        let playerTwoCard=playerTwo.playerHand.pop();
        console.log( `Round ${round + 1}: ${playerOne.player} plays a ${playerOneCard.face} of ${playerOneCard.suit} and ${playerTwo.player} plays a ${playerTwoCard.face} of ${playerTwoCard.suit}`);    //here we log what card each player plays per round

     //next we use if else to determine what happens depending on which player wins the round, or if the players tie.

        if (playerOneCard.value > playerTwoCard.value) {
            console.log(`${playerOne.player} wins round ${round + 1} !`);      //if player one wins
            playerOne.playerScore++;



        } else if (playerTwoCard.value > playerOneCard.value) {
            console.log(`${playerTwo.player} wins round ${round + 1} !`);      //if player two wins 
            playerTwo.playerScore++;



        } else if(playerOneCard.value == playerTwoCard.value) {
            console.log(`${playerOne.player} and ${playerTwo.player} tie for round ${round + 1}`);     //if they tie
        }
    }
    }

    

    finalScore(){
        let finalScoreOne= playerOne.playerScore;
        let finalScoreTwo= playerTwo.playerScore;
        console.log (`${playerOne.player} finishes with a total score of ${finalScoreOne} and ${playerTwo.player} finishes with a total score of ${finalScoreTwo}`);
        if (finalScoreOne > finalScoreTwo){
            console.log (`${playerOne.player} WINS THE GAME!`);
        } else if (finalScoreTwo > finalScoreOne){
            console.log (`${playerTwo.player} WINS THE GAME!`);
        } else if(finalScoreOne == finalScoreTwo) {
            console.log (`${playerOne.player} and ${playerTwo.player} TIE!`)
        }

    }


    }


//start the game here

let newGame= new Game();
newGame.startGame();







