console.log("shivanshu mishra");

const button = document.querySelectorAll(".btn");
const game = document.querySelector(".gameContainer");
const message = document.querySelector("#msg");
const newbtn = document.querySelector('.newbtn');
const resetbtn = document.querySelector(".reset")
const msgContainer = document.querySelector(".msgContainer")
const myAudio = document.getElementById("myAudio")
const myAudio2 = document.getElementById("myAudio2")

let turnX = true;

function playAudio2() {
    myAudio2.play();
}

    const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
    ];


    // console.log(winPatterns[0][0])
    // console.log(winPatterns[0][1])
    // console.log(winPatterns[0][2])

    const resetGame = () => {
        turnX = true;
        enabled();
        message.innerHTML = ''
        msgContainer.classList.add("hide");
    }

    button.forEach((btn) => {
        btn.addEventListener("click", () => {
        playAudio2();
            if(turnX) {
                btn.innerHTML = "X";
                btn.disabled = true;
                turnX = false;
              
            }
            else {
                btn.innerHTML = "0";
                btn.disabled = true;
                turnX = true;
            }
            btn.disabled = true;
            gameWin();
            
        })

    })

    const dissabled = () => {
        for(btn of button) {
            btn.disabled = true;
        }
    }
    const enabled = () => {
        for(btn of button) {
            btn.disabled = false;
            btn.innerHTML = ''
        }
    }
    const showWinner = (winner) => {
        message.innerHTML = `congratulations winner is ${winner}`;
        msgContainer.classList.remove("hide");
       
    }


    function gameWin() {
      
        for(let pattern of winPatterns) {
          let val1 = button[pattern[0]].innerHTML;
          let val2 = button[pattern[1]].innerHTML;
          let val3 = button[pattern[2]].innerHTML;

          if(val1 != '' && val2 != '' && val3 != '') {
            if(val1 === val2 && val1 === val3) {
            
                showWinner(val1);
                
              
                dissabled();
                
            }
            
          }
        }
    }

    newbtn.addEventListener("click", resetGame) 
    resetbtn.addEventListener("click", resetGame) 


    function pauseAudio() {
        myAudio.pause();
    }
    
    pauseAudio();