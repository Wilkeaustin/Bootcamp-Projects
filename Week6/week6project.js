class Player {
    constructor (name) 
    {
       this.name = name;
       this.hand = [];
       this.score = 0; 
    }
    playCard() 
    {
        return this.hand.pop();
    }

    incrementScore() 
    {
        this.score = this.score + 1;
    }
}  

// End Player

class Deck {
    constructor () {
        this.cards = []
    }
    shuffleDeck() {
        this.cards = this.cards.sort(() => Math.random() - 0.5)
    }
}

//End Deck 

class Card 
{
    constructor(suit, value) 
    {
        this.suit = suit;
        this.value = value;
    }

    descirbe() 
    {
        return `${this.value} of ${this.suit}`    
    }
    
}

//End Card



