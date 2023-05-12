const cellElements = document.getElementsByClassName("cell");

const player1 = document.getElementById("player1")
const player2 = document.getElementById("player2")

const result = document.getElementsByClassName("result");
const text = document.getElementById("who-win-game");
const restart_btn = document.getElementById("restart"); 

const playerO = "O";
const playerX = "X";
var zero_X = true;


const winner = [
    [0 , 1 , 2],
    [3 , 4 , 5],
    [6 , 7 , 8],
    [0 , 3 , 6],
    [1 , 4 , 7],
    [2 , 5 , 8],
    [0 , 4 , 8],
    [2 , 4 , 6]
]



Array.from(cellElements).forEach((cell) => {
        cell.onclick = ()=>{
            // getting the output
            let current_player = getOutput(cell);
            // Show the Output
            cell.innerText = current_player;
            // check the winner
            if(chk_winner(current_player)) {
                addInactive();
                text.innerText = current_player + "  Win The Game";

                console.log(current_player + " Winner")
            } else if (isDraw()){
                // Check whether match is draw or not
                addInactive();
                text.innerText = " Draw The Game";

                console.log("Match draw");
            } else {
                // Invert the value which hep to show 0 or X
                invert_zero_X();
                // This method is for swapping background
                swap_player();
                // This methid is for is once a plave reserve then it can not be change
                inactive_pointer(cell);

            }

        }
});

let chk_winner = (current_player)=>{
    return winner.some((condition) =>{
       return  condition.every((index)=>{
           return cellElements[index].classList.contains(current_player);
        });
    });
}

function isDraw() {
    return [...cellElements].every(each_cell => {
       return  each_cell.classList.contains("O") || each_cell.classList.contains("X");
    });
}

let invert_zero_X = ()=>{
        zero_X = !zero_X;
}

let inactive_pointer = (cell)=> {
    cell.classList.add("disabled-pointer");
}

let getOutput = (cell)=> {
    // o and x these 2 are class which help to "identify the Winner by the .some() and evry() method"
    if(zero_X){
        cell.classList.add("O");
    } else {
        cell.classList.add("X");
    }
   
    return  zero_X ? playerO : playerX;
}

let swap_player = ()=> {
    if(zero_X == false) {
        player1.classList.remove("player-time");
        player2.classList.add("player-time");
    } else {
        player2.classList.remove("player-time");
        player1.classList.add("player-time");
        
    }
}

let addInactive = ()=>{
    result[0].classList.remove("inactive");
}

restart_btn.onclick =  ()=>{
    location.reload();
}