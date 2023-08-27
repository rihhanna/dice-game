//write code here
let currentScore=0
let activePlayer=0 // 0===player1 1===player2
let scores = [0,0]

function switchPlayer(){
    currentScore=0
       document.querySelector(`#current--${activePlayer}`).innerText=0
       if (activePlayer===0){
        activePlayer=1
       }else{
        activePlayer=0
       }
       document.querySelector(".player--0").classList.toggle("player--active")
       document.querySelector(".player--1").classList.toggle("player--active")

}
//Roll
document.querySelector(".btn--roll").addEventListener("click",function(){
    let dice = Math.floor(Math.random() * 6) + 1 // random dice number from 1 - 6
    console.log(dice)
    document.querySelector(".dice").src=`dice-${dice}.png`
    //check if dice is 1
    if (dice===1){
       switchPlayer()
    }else{
        currentScore=currentScore+dice
        document.querySelector(`#current--${activePlayer}`).innerText=currentScore 
    }

})
//hold
document.querySelector(".btn--hold").addEventListener("click",function(){
    //add current score
    scores[activePlayer]=scores[activePlayer]+currentScore
    document.querySelector(`#score--${activePlayer}`).innerText=scores[activePlayer]
    document.querySelector(`#current--${activePlayer}`).innerText=0
    //check if player >100
    if (scores[activePlayer]>=10){
        document.querySelector(`#name--${activePlayer}`).innerText="winner!!!"
        document.querySelector(`.player--${activePlayer}`).classList.add("player--winner")
        document.querySelector(".btn--roll").disabled=true;
        document.querySelector(".btn--hold").disabled=true;
    }else{
        switchPlayer()

    }
        //winner
        //switch
    
})
//new
document.querySelector(".btn--new").addEventListener("click",function(){
    scores=[0,0]
    activePlayer=0
    currentScore=0
    document.querySelector("#score--0").innerText=0
    document.querySelector("#score--1").innerText=0
    document.querySelector(".player--0").classList.remove("player--winner")
    document.querySelector(".player--1").classList.remove("player--winner")
    document.querySelector("#name--0").innerText="player1"
    document.querySelector("#name--1").innerText="player2"
    document.querySelector(".player--0").classList.add("player--active")
    document.querySelector(".player--1").classList.remove("player--active")
    document.querySelector(".btn--roll").disabled=false
    document.querySelector(".btn--hold").disabled=false
    
})