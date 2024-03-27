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
let p1 = document.getElementById('plyr1')
let p2 = document.getElementById('plyr2')
let coinaudio = new Audio('smb_coin.wav')
let clickaudio = new Audio('clicksound.wav')
let openingaudio = new Audio('smb_stage_clear.wav')
let secnum2 = 0;
let flag = 0;

// newgame button code

newgame.addEventListener('click',function(){
  openingaudio.play();
  newgame.style.backgroundColor = 'lightgreen'
    diceroller.style.display = 'block';
    hold.style.display = 'block';
     document.getElementById("pc1").style.display = "none";
  let firstnamep = prompt("Enter First player Name")
  let secondnamep = prompt("Enter Second Player Name")
  let firstname = firstnamep.toUpperCase();
  let secondname = secondnamep.toUpperCase()
  p1.textContent = firstname
  p2.textContent = secondname
});

// dice roll code

diceroller.addEventListener("click", function () {
      clickaudio.play()
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
        if (flag === 0) {
          document.getElementById("pc0").style.display = "block";
          document.getElementById("pc1").style.display = "none";
          player2box.style.justifyContent = 'center'
          player1box.style.justifyContent = 'flex-start'
        } else {
          document.getElementById("pc0").style.display = "none";
          document.getElementById("pc1").style.display = "block";
          player1box.style.justifyContent = "center";
          player2box.style.justifyContent = "flex-start";
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
      coinaudio.play()
      if (flag === 0) {
        a1 += secnum2;
        document.getElementById(`mainval${flag}`).textContent = a1;
        if (a1 >= 100){
          alert(`${p1.textContent} is WINNER`)
        }
        secnum2 = 0;
        document.getElementById(`tempvlue${flag}`).textContent = 0;
       document.getElementById("pc0").style.display = "none";
       document.getElementById("pc1").style.display = "block";
       player1box.style.justifyContent = "center";
       player2box.style.justifyContent = "flex-start";
        flag = 1;
        player2box.style.backgroundColor = "#d7a3b0";
        player1box.style.backgroundColor = "#b26e8c";
      }else if (flag === 1) {
        a2 += secnum2;
        document.getElementById(`mainval${flag}`).textContent = a2;
       if (a2 >= 100) {
         alert(`${p2.textContent} is WINNER`);
       }
        secnum2 = 0;
        document.getElementById(`tempvlue${flag}`).textContent = 0;
          document.getElementById("pc0").style.display = "block";
          document.getElementById("pc1").style.display = "none";
          player2box.style.justifyContent = "center";
          player1box.style.justifyContent = "flex-start";
        flag = 0;
        player1box.style.backgroundColor = "#d7a3b0";
        player2box.style.backgroundColor = "#b26e8c";
      }
    });

    