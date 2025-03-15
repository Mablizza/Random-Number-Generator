import { winGifs, loseGifs } from "./gifs.js"

let winBtn = document.getElementById("win-btn")
let newNumberEl = document.getElementById("new-nmbr")
// let audio = document.getElementById("audio")
let loseBtn = document.getElementById("lose-btn")
let guessCounterEl = document.getElementById("total-guesses-counter")
let gifEl = document.getElementById("gif-box")


let totalGuessCounter = 0
let winCounter = 0
let lossCounter = 0

let tower = document.getElementById("tower");
let blocks = [ ];
let blockHeight = 20;
let blockWidth = 40;

//start game with 5 blocks in tower
document.addEventListener("DOMContentLoaded", () => {
    const times = 5;
    Array.from({length: times}, () => addBlock2Tower());
})

newNumberEl.addEventListener("click", function generateNum() {
    let numberEl = document.getElementById("rndm-nmbr")
    let floor = document.getElementById("numberFloor").value
    let cieling = document.getElementById("numberCieling").value

    if (floor == "" || cieling == ""){
        floor = 10
        cieling = 100
        let randomNumber = Math.floor(Math.random()*(cieling-floor)) + Math.floor(floor) // choose roof of num Generator
        numberEl.textContent = randomNumber
    } else {
        let randomNumber = Math.floor(Math.random()*(cieling-floor)) + Math.floor(floor) // choose roof of num Generator
        numberEl.textContent = randomNumber
    }
    
    gifEl.innerHTML = ``
})

winBtn.addEventListener("click", function win() {
    let winsEl = document.getElementById("wins-counter")
    let winTrackerEl = document.getElementById("win-tracker")

    winsEl.textContent +=  "✅"
    winCounter = winCounter + 1
    totalGuessCounter += 1
    winTrackerEl.textContent = `Total Wins: ${winCounter}`
    guessCounterEl.textContent = "Total Tries: " + totalGuessCounter
    gifEl.innerHTML = `<img id="gif-container" src="${winGifs[Math.floor(Math.random()*winGifs.length)]}">`
    // audio.play()

    //Updates BlockTower Game
    addBlock2Tower()

})

loseBtn.addEventListener("click", function lose() {
    let lossesEl = document.getElementById("loss-counter")
    let lossTrackerEl = document.getElementById("loss-tracker")

    lossesEl.textContent += "❌"
    lossCounter += 1
    totalGuessCounter += 1
    lossTrackerEl.textContent = "Total Losses: " + lossCounter
    guessCounterEl.textContent = "Total Tries: " + totalGuessCounter
    gifEl.innerHTML = `<img src="${loseGifs[Math.floor(Math.random()*loseGifs.length)]}">`

    //Updates BlockTower Game
    removeBlockFromTower()
    


})

function addBlock2Tower(){
    let newBlock = document.createElement("div");
    newBlock.classList.add("block");
    let bottomPosition = blocks.length * blockHeight;
    newBlock.style.left = "75px";
    newBlock.style.bottom = `${bottomPosition}px`;
    newBlock.style.backgroundColor = getRandomColor();
    tower.appendChild(newBlock);
    blocks.push(newBlock);
}

function removeBlockFromTower(){
    if (blocks.length > 0) {
        let randomIndex = Math.floor(Math.random() * blocks.length);
        let removedBlock = blocks.splice(randomIndex, 1)[0];
        tower.removeChild(removedBlock);

        blocks.forEach((block, index) => {
            let move = Math.random() < 0.5 ? -10 : 10;
            let currentLeft = parseInt(block.style.left);
            block.style.left = `${currentLeft + move}px`;
            block.style.bottom = `${index * blockHeight}px`; // Ensuring no gaps
        });

        if (!checkTowerStability()) {
            collapseTower();
        }
    }

    function checkTowerStability() {
        for (let i = 1; i < blocks.length; i++) {
            let aboveBlock = blocks[i];
            let belowBlock = blocks[i - 1];
            let aboveLeft = parseInt(aboveBlock.style.left);
            let belowLeft = parseInt(belowBlock.style.left);
            //console.log("if: ", Math.abs(aboveLeft - belowLeft), "is greater than: ", blockWidth * 1.1, "the tower will collapse")
            if (Math.abs((aboveLeft - belowLeft)) > blockWidth * 0.9) {
                return false;
            }
        }
        return true;
    }

    function collapseTower() {
        blocks.forEach((block, index) => {
            block.style.transition = "transform 1s ease-out";
            block.style.transform = `translateY(${(blocks.length - index) * 20}px) rotate(${Math.random() * 60 - 30}deg)`;
        });
        setTimeout(() => {
            blocks.forEach(block => tower.removeChild(block));
            blocks = [];
        }, 1000);

        //Reset Game ScoreBoard If Tower Game Collapses
        setTimeout(()=>{location.reload()},2500)
    }
}

function getRandomColor() {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

