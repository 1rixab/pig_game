let newgame = document.getElementById('newgamebtn')
let player1box = document.getElementById('box0')
let player2box = document.getElementById("box1");
let diceroller = document.getElementById('diceroll')
let crrvalplayer0 = document.getElementById('tempvlue0')
let crrvalplayer1 = document.getElementById("tempvlue1");
let hold = document.getElementById('holdbtn')
let playerscore1 = document.getElementById('mainval0')
let playerscore2 = document.getElementById('mainval1')
let six = document.getElementById('dicesix')
let five = document.getElementById("dicefive");
let four = document.getElementById("dicefour");
let three = document.getElementById("dicethree");
let two = document.getElementById("dicetwo");
let one = document.getElementById("diceone");

let secnum2 = 0;

// newgame button code

newgame.addEventListener('click',function(){
  newgame.style.backgroundColor = 'lightgreen'
    diceroller.style.display = 'block';
    hold.style.display = 'block';
});

let flag = 0;

// dice roll code

    diceroller.addEventListener("click", function () {
      const secnum1 = Math.trunc(Math.random() * 6) + 1;
      
      if (secnum1 !== 1) {
        secnum2 += secnum1;
        document.getElementById(`tempvlue${flag}`).textContent = secnum2;
      }else{
        secnum2 = 0;
        document.getElementById(`tempvlue${flag}`).textContent = 0;
        document.getElementById(`box${flag}`).style.backgroundColor = "#b26e8c";
        flag = flag === 0 ? 1 : 0;
        document.getElementById(`box${flag}`).style.backgroundColor = "#d7a3b0";
      } 

      if (secnum1 === 6) {
        six.style.display = "block";
        five.style.display = "none";
        four.style.display = "none";
        three.style.display = "none"; 
        two.style.display = "none";
        one.style.display = "none";
      }else if (secnum1 === 5) {
        six.style.display = "none";
        five.style.display = "block";
        four.style.display = "none";
        three.style.display = "none";
        two.style.display = "none";
        one.style.display = "none";
      }else if (secnum1 === 4) {
        six.style.display = "none";
        five.style.display = "none";
        four.style.display = "block";
        three.style.display = "none";
        two.style.display = "none";
        one.style.display = "none";
      }else if (secnum1 === 3) {
        six.style.display = "none";
        five.style.display = "none";
        four.style.display = "none";
        three.style.display = "block";
        two.style.display = "none";
        one.style.display = "none";
      }else if (secnum1 === 2) {
        six.style.display = "none";
        five.style.display = "none";
        four.style.display = "none";
        three.style.display = "none";
        two.style.display = "block";
        one.style.display = "none";
      }else if (secnum1 === 1) {
        six.style.display = "none";
        five.style.display = "none";
        four.style.display = "none";
        three.style.display = "none";
        two.style.display = "none";
        one.style.display = "block";
      }
    });
    let a1 = 0;
    let a2 = 0;
 
    // hold button code

    hold.addEventListener("click", function () {
      if (flag === 0) {
        a1 += secnum2;
        document.getElementById(`mainval${flag}`).textContent = a1;
        secnum2 = 0;
        document.getElementById(`tempvlue${flag}`).textContent = 0;
        flag = 1;
        player2box.style.backgroundColor = "#d7a3b0";
        player1box.style.backgroundColor = "#b26e8c";
      }else if (flag === 1) {
        a2 += secnum2;
        document.getElementById(`mainval${flag}`).textContent = a2;
        secnum2 = 0;
        document.getElementById(`tempvlue${flag}`).textContent = 0;
        flag = 0;
        player1box.style.backgroundColor = "#d7a3b0";
        player2box.style.backgroundColor = "#b26e8c";
      }
    });

    