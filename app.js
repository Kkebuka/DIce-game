const image1 = document.querySelector(".img1");
const image2 = document.querySelector(".img2");
const winner = document.querySelector("h1");
const playGame = document.querySelector(".playGame")

// let n = Math.random();
// let m = Math.random();
// let die1;
// let die2;
// die1 = Math.floor((n * 6)) + 1;
// die2 = Math.round((m *6)) + 1 ;
// console.log(die1);
// console.log(die2);
// console.log(playGame);


playGame.addEventListener("click", function(e)
 {
 let n = Math.random();
let m = Math.random();
let die1;
let die2;
die1 = Math.floor((n * 6)) + 1;
die2 = Math.round((m *6)) + 1 ;
console.log(die1);
console.log(die2);
console.log(playGame);

    diceResult(die1,image1);

    diceResult(die2,image2);
    
   if(die1 > die2){
    winner.innerHTML="Player 1 wins"
   } else if(die1 === die2){
    winner.innerHTML="Its a draw"
   } else if(die2 > die1){
    winner.innerHTML="Player 2 wins"
   }
   e.preventDefault();
});


function diceResult(type,imageSource){
    let roll;
    let image;
        roll = type;
        image = imageSource;
    
    if(roll === 1){
        image.src="/images/dice1.png"
    }else if(roll === 2){
        image.src="/images/dice2.png"
    }else if(roll === 3){
        image.src="/images/dice3.png"
    }else if(roll === 4){
        image.src="/images/dice4.png"
    }else if(roll === 5){
        image.src="/images/dice5.png"
    }else if(roll === 6){
    image.src="/images/dice6.png"
       }
    };

