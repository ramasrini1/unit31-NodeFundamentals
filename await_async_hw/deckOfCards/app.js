//let baseURL = "http://deckofcardsapi.com/api/deck/new/draw";
let baseURL = 'https://deckofcardsapi.com/api/deck';

//Part 1
async function getCard() {
  data = await $.getJSON(`${baseURL}/new/draw`).then(data => {
  let {suit, value} = data.cards[0];
    console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
  });
}

getCard()

//Part 2
async function newPokemonCard(){
  let firstCard = null
  data = await $.getJSON(`${baseURL}/new/draw`)
  firstCard = data.cards[0];
  deckId = data.deck_id;

  data = await $.getJSON(`${baseURL}/${deckId}/draw`)
  let secondCard = data.cards[0];
  [firstCard, secondCard].forEach(function(card){
    console.log(
       `${card.value.toLowerCase()} of ${card.suit.toLowerCase()}`
    );
  });
}

newPokemonCard();

// // //Part 3
let deckId = null;
let $cardArea = $('#card-area');
let $btn = $('button');


// $.getJSON(`${baseURL}/new/shuffle`).then( data => {
//   deckId  = data.deck_id;
//   $btn.show();
  
// });

async function giveMeCard(){

  data = await $.getJSON(`${baseURL}/new/shuffle`)
  deckId  = data.deck_id;
 
  $btn.show().on('click', async function() {
    data = await $.getJSON(`${baseURL}/${deckId}/draw/`);
    let card = data.cards[0];
    let cardSrc = data.cards[0].image;
    let angle = Math.random() * 90 - 45;
    let randomX = Math.random() * 40 - 20;
    let randomY = Math.random() * 40 - 20;
    $cardArea.append(
    $('<img>', {
          src: cardSrc,
          css: {
            transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
          }
        })
    );
    if (data.remaining === 0) $btn.remove();
  });
}
giveMeCard();


 