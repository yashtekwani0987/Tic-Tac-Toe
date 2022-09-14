let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3")
let turn = "X";
let isGameOver = false;

//Function to change the turn
const changeTurn = () => {
    return turn === "X" ? "O" : "X";
}


//Function to check for the win
const checkWin = () => {
    let boxText = document.getElementsByClassName('boxText')
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    // console.log(boxText[e[0]]);
    wins.forEach(e => {
        if ((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[2]].innerText === boxText[e[1]].innerText) && (boxText[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxText[e[0]].innerText + " Won ";
            isGameOver = true;
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "156px";
        }
    })

}


//Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector(".boxText");
    element.addEventListener('click', () => {
        if (boxText.innerText === '') {
            boxText.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!isGameOver) {

                document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
            }
        }

    })

});

// Reset Button
let reset = document.getElementById('reset');
reset.addEventListener('click', () => {
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "0px"
    let boxText = document.querySelectorAll('.boxText');
    Array.from(boxText).forEach(element => {
        element.innerText = "";
    })
    document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;



})