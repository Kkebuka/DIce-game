const image1 = document.querySelector(".img1");
const image2 = document.querySelector(".img2");
const winner = document.querySelector("h1")

document.addEventListener("DOMContentLoaded", function()
 {
    let n = Math.random();
    let m = Math.random();
    let die1;
    let die2 = m * m;
    die1 = Math.floor((n * 6) + 1);
    die2 = Math.round((die2 * 5) + 1 );


    if(die1 === 1){
        image1.src="/images/dice1.png"
    }else if(die1 === 2){
        image1.src="/images/dice2.png"
    }else if(die1 === 3){
        image1.src="/images/dice3.png"
    }else if(die1 === 4){
        image1.src="/images/dice4.png"
    }else if(die1 === 5){
        image1.src="/images/dice5.png"
    }else if(die1 === 6){
        image1.src="/images/dice6.png"
   }

    if(die2 === 1){
        image2.src="/images/dice1.png"
    }else if(die2 === 2){
        image2.src="/images/dice2.png"
    }else if(die2 === 3){
        image2.src="/images/dice3.png"
    }else if(die2 === 4){
        image2.src="/images/dice4.png"
    }else if(die2 === 5){
        image2.src="/images/dice5.png"
    }else if(die2 === 6){
    image2.src="/images/dice6.png"
   }

   if(die1 > die2){
    winner.innerHTML="Player 1 wins"
   } else if(die1 === die2){
    winner.innerHTML="Its a draw"
   } else if(die2 > die1){
    winner.innerHTML="Player 2 wins"
   }
});


