const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let counter = 0;


//https://didigal.rolan.si/zmago-jeraj-pes-2/

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  counter ++;

  if(counter == 1){
    let msg = "Osrednja figura na sliki je žival !"
    displayMsg(msg)
  }
  if(counter == 2){
    let msg = "V Ozadju je Naselje z bloki"
    displayMsg(msg)
  }

  if(counter == 3){
    let msg = "Narava je naslikana v modri barvi, barvi hladnosti, globoke oddaljenosti, hrepenenja po pripadnosti !"
    displayMsg(msg)
  }

  if(counter == 4){
    let msg = "Iz modre narave izstopajo močne rdeče podrobnosti, kot so luči avtomobila, »fička«. !"
    displayMsg(msg)
  }

  if(counter == 5){
    let msg = "Pes velja za vdanega in zvestega človeškega prijatelja, pa vendar je na sliki upodobljen osamljen Morda je zapuščen !" 
    displayMsg(msg)
  } 

  if(counter == 6 ){
    
    let msg = "Bravooooooo !!!" 
    displayMsg(msg) 

    setTimeout(() =>{
      window.location.href = "https://didigal.rolan.si/zmago-jeraj-pes-2/";
    }, 1500);  
    

  }

  resetBoard();

   
}

function displayMsg(msg){
  document.getElementById("popup").innerHTML = msg
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

//12 ->
(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));