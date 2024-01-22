let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const usecorep=document.querySelector("#user-score");
const compscorep=document.querySelector("#comp-score");

const drawgame =()=>{
    console.log("the game was draw")
    msg.innerText="Draw Game.Play  Again"
    msg.style.background="blue" ;
}
const showwiner=(userwin ,userchoice ,compchoice)=>{
    if (userwin) {
        userscore++;
        usecorep.innerHTML=userscore;
        console.log("you win!")
        msg.innerText=`You Win! ${userchoice} Beats the ${compchoice}`;
        msg.style.background="green" ;

    }
    else{
        console.log("you lose")
        compscore++;
        compscorep.innerHTML = compscore;
        msg.innerText=`You Lose. ${compchoice} Beats the ${userchoice}`;
        msg.style.background="red" ;
    }

   }
   const gencomchoice =() =>{
    const options=["rock","paper","scissor"];
    const index= Math.floor(Math.random()*3);
    return options[index];
}
const playgame =(userchoice)=>{

    console.log('choice was clicked =',userchoice);
    // gnerate comuter chice
    const compchoice=gencomchoice();
    console.log('choice was clicked =',compchoice);


    if(userchoice===compchoice){
        drawgame();
        //draw the game
    }
    else{
        let userwin=true;
        if(userchoice==="rock"){
            // sciscor paper
            userwin= compchoice==="paper" ? false :true;
        }else if(userchoice==="paper"){
            //scissor rock
         userwin =  compchoice ==="scissor" ? false :true; 
        }
        else{
            userwin =compchoice === "rock" ? false : true;
        }
        showwiner(userwin ,userchoice ,compchoice);
    }
}




choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        
        playgame(userchoice)
    })
})