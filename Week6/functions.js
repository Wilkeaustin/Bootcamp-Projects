const suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
const values = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
//End Card Values

function main () 
{
    //Game starts when player selects yes(1) from the opening menu.
    let startGame = prompt("Would you like to declare WAR!? \n1) Yes, I'm ready for battle!  \n2) No, my army is not yet ready...");
    if (startGame == 1) 
    {
    //Once yes is selected the game asks for player names, then creates the deck, then shuffles the deck, and then deals the cards to the players.
        let deck = new Deck
        let player1Name = prompt("Enter name of Player 1: ")
        let player1 = new Player(player1Name);
        let player2Name = prompt("Enter name of Player 2: ")
        let player2 = new Player(player2Name);
        populateDeck(deck);
        deck.shuffleDeck();
        player1.hand = deck.cards.splice(0, 26);
        player2.hand = deck.cards.splice(0, 26);
        playGame(player1, player2);
    } 
    else 
    {
    //Any other input besides (1) will simply return the following phrase.
        alert('Come back when you are ready...');
    }
}


//Game Initialization ^






//Player customization^


function populateDeck(deck) 
{ 
    /* Deck population is a nested loop 
    that runs through all 4 suites, and 
    all 13 card values and pushes all 52 
    cards to the deck. */
    for(let i = 0; i < suits.length; i++) 
    {
        for(let x = 0; x < values.length; x++) 
        {
            let card = new Card(suits[i], values[x]);
            deck.cards.push(card);
        } 
    }
}

//Make Deck

function getValue(string)
{
    switch(string)
    {
    case "Ace":
        return 14;
        break;
    case "Jack":
        return 11;
        break;
    case "Queen":
        return 12;
        break;
    case "King":
        return 13;
        break;
    default:
        return parseInt(string);
    }
}



/* WOW. This one was tough to implement for some reason.
I finally figured out that I could just splice half of 
the deck and give it to player 1, and then simply make 
player 2 what remained of the deck array. I'm positive 
there is an easier way, but with my current setup this
is what I was able to make work. */

function playGame(player1, player2) 
{
   console.log(player1.hand)
   console.log(player2.hand)
   for(let i = 0; i < 26; i++)
   {
       let card1 = player1.playCard();
       let card2 = player2.playCard();
       if(getValue(card1.value) > getValue(card2.value))
       {
           player1.incrementScore();
       }
       else if (getValue(card1.value) < getValue(card2.value))
       {
            player2.incrementScore();
       }
   }
   if (player1.score > player2.score)
   {
       alert(player1.name + " wins!")
   }
   else if (player1.score < player2.score)
   {
       alert(player2.name + " wins!")
   }
   else
   {
       alert("It's a tie!!!")
   }
}



main();