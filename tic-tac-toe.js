const gameBoard = document.querySelector('#gameboard')

let arrMap = [0,0,0,0,0,0,0,0,0]
const startCells = ["","","","","","","","",""]
let turn = 'circle'
let strike = document.getElementById('strike')
const infoDisplay=document.querySelector('#info')
infoDisplay.innerHTML = "Circle goes first!"
infoDisplay.getElementsByClassName.fontSize = "x-large"
let win = false;

function createBoard(){
    //foreach can accept 3 parameters, currentItem, index, and an array
    //currentItem parameter is the only one that is required
    //index is optional, it represents the index number 
    //array parameter is also optional
    //you can rename currentItem, index, and array to anything you prefer
    
    startCells.forEach((cell, index)=>{
        const cellElem = document.createElement('div')
        cellElem.classList.add('square')
        cellElem.id = index
        cellElem.addEventListener('click', takeTurn)
        gameBoard.append(cellElem)
    })
}
createBoard()

function takeTurn(event){
    if(!event.currentTarget.hasChildNodes()&&win==false){
        const currentTurn = document.createElement("div")
        currentTurn.classList.add(turn)

        event.target.append(currentTurn)

        if(turn==='circle'){
            turn = 'x'
            arrMap[event.currentTarget.id] = 1 //circle
        }
        else{
            turn = 'circle'
            arrMap[event.currentTarget.id] = 2 //x
        }
        infoDisplay.textContent = "It is now " + turn + "'s turn "
    }
    checkWinCondition(1); //circle
    checkWinCondition(2); //x
}

function checkWinCondition(num){
    //assign victor as circle or num
    if (num==1){victor = "Circle"}
    else{victor = "X"}

    //horizontal
    if(arrMap[0]==num && arrMap[1]==num & arrMap[2]==num){
        infoDisplay.textContent = victor + " wins!"
        win=true;
        strike.style.visibility="visible";
        strike.style.transform="translateY(-1800%)"
    }
    if(arrMap[3]==num && arrMap[4]==num & arrMap[5]==num){
        infoDisplay.textContent = victor + " wins!"
        win=true;
        strike.style.visibility="visible";
        strike.style.transform="translateY(-1120%)"
    }
    if(arrMap[6]==num && arrMap[7]==num & arrMap[8]==num){
        infoDisplay.textContent = victor + " wins!"
        win=true;
        strike.style.visibility="visible";
        strike.style.transform="translateY(-455%)"
    }

    //vertical
    if(arrMap[0]==num && arrMap[3]==num & arrMap[6]==num){
        infoDisplay.textContent = victor + " wins!"
        win=true;
        strike.style.visibility="visible";
        strike.style.transform="rotate(90deg) translateX(-50%) translateY(665%)"
    }
    if(arrMap[1]==num && arrMap[4]==num & arrMap[7]==num){
        infoDisplay.textContent = victor + " wins!"
        win=true;
        strike.style.visibility="visible";
        strike.style.transform="rotate(90deg) translateX(-50%)"
    }
    if(arrMap[2]==num && arrMap[5]==num & arrMap[8]==num){
        infoDisplay.textContent = victor + " wins!"
        win=true;
        strike.style.visibility="visible";
        strike.style.transform="rotate(90deg) translateX(-50%) translateY(-665%)"
    }

    //diagonal
    if(arrMap[0]==num && arrMap[4]==num & arrMap[8]==num){
        infoDisplay.textContent = victor + " wins!"
        win=true;
        strike.style.visibility="visible";
        strike.style.transform="rotate(45deg) translateX(-29%) translateY(-750%)"
    }
    if(arrMap[2]==num && arrMap[4]==num & arrMap[6]==num){
        infoDisplay.textContent = victor + " wins!"
        win=true;
        strike.style.visibility="visible";
        strike.style.transform="rotate(135deg) translateX(-29%) translateY(780%)"
    }
    
    //check for a tie game
    if(arrMap[0]!=0 && arrMap[1]!=0 && arrMap[2]!=0 && arrMap[3]!=0 && arrMap[4]!=0 && arrMap[5]!=0 && arrMap[6]!=0 && arrMap[7]!=0 && arrMap[8]!=0)
    {
        infoDisplay.textContent = "It's a tie! Nobody wins! :("
    }
}