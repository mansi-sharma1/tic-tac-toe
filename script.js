let player = "O"
let arr = []
let cell = []
let result = document.getElementById('result')
let gameActive = true


 
const checkWin = () =>{
    for(let i=0; i<=8;i++){
         cell[i] = document.getElementById(`cell${i}`)
        arr[i] = document.getElementById(`cell${i}`).innerHTML
    }
    
 
    if(arr[0]==player && arr[1]==player&& arr[2]==player){
        result.innerHTML= player+" is the winner"
        cell[0].style.backgroundColor="purple"
        cell[1].style.backgroundColor="purple"
        cell[2].style.backgroundColor="purple"
        gameActive = false
       
    }
   
    else if(arr[3]==player && arr[4]==player&& arr[5]==player){
       result.innerHTML= player+" is the winner"
         cell[3].style.backgroundColor="purple"
        cell[4].style.backgroundColor="purple"
        cell[5].style.backgroundColor="purple"
       gameActive = false
       
    }
 
    else if(arr[6]==player && arr[7]==player&& arr[8]==player){
        result.innerHTML= player+" is the winner"
         cell[6].style.backgroundColor="purple"
        cell[7].style.backgroundColor="purple"
        cell[8].style.backgroundColor="purple"
        gameActive = false
       
    }
 
    else if(arr[0]==player && arr[3]==player&& arr[6]==player){
        result.innerHTML= player+" is the winner"
       
         cell[0].style.backgroundColor="purple"
        cell[3].style.backgroundColor="purple"
        cell[6].style.backgroundColor="purple"
        gameActive = false
       
    }
 
    else if(arr[1]==player && arr[4]==player&& arr[7]==player){
        result.innerHTML= player+" is the winner"
        cell[1].style.backgroundColor="purple"
        cell[4].style.backgroundColor="purple"
        cell[7].style.backgroundColor="purple"
        gameActive = false
       
    }
 
    else if(arr[2]==player && arr[5]==player&& arr[8]==player){
        result.innerHTML= player+" is the winner"
        cell[2].style.backgroundColor="purple"
        cell[5].style.backgroundColor="purple"
        cell[8].style.backgroundColor="purple"
        gameActive = false
       
    }
 
    else if(arr[0]==player && arr[4]==player&& arr[8]==player){
        result.innerHTML= player+" is the winner"
        cell[0].style.backgroundColor="purple"
        cell[4].style.backgroundColor="purple"
        cell[8].style.backgroundColor="purple"
        gameActive = false
       
    }
 
    else if(arr[2]==player && arr[4]==player&& arr[6]==player){
        result.innerHTML= player+" is the winner"
        cell[2].style.backgroundColor="purple"
        cell[4].style.backgroundColor="purple"
        cell[6].style.backgroundColor="purple"
        gameActive = false
       
    }
}

   const gameDraw = () =>{
    if(gameActive){
        let flag = 0
        for(let i=0; i<=8;i++){
            if(arr[i]!=''){
                flag++;
            }
        }
        if(flag==9){
            result.innerHTML= "Game Drawn"
            gameActive=false
        }
    }
}
 
const ticTacToe = (index)=>{
    let cells = document.getElementsByClassName('cell')
 
     if(gameActive){
        cells[index].innerHTML= player
        cells[index].style.pointerEvents="none"
        checkWin()
        gameDraw()
        
    }
 
    if(gameActive){
        player = (player=='O')? 'X' : 'O'
        document.getElementById('turn').innerHTML = player+" 's turn"
    }
        else{
         document.getElementById('turn').innerHTML = ''
    }
}
 
 
const restartGame = ()=>{
    window.location="index.html"
}