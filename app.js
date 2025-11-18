let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorePara=document.querySelector("#user-score");
const compscorePara=document.querySelector("#comp-score");
const generatecompchoice=()=>{
    const options=["rock","paper","scissors"];
    const ranIdx=Math.floor(Math.random()*3);
    return options[ranIdx];
    //rock,paper,scissor
};
const drawgame=()=>{
    msg.innerText="Game was Draw. Play again.";
    msg.style.backgroundColor="#081b31";
};
const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        userscorePara.innerText=userscore;
        msg.innerText=`You win! ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }else{
        compscore++;
        compscorePara.innerText=compscore;
         msg.innerText=`You lost. ${compchoice} beats your ${userchoice}`;
         msg.style.backgroundColor="red";
    }
};

const playGame=(userchoice)=>{
    //generate computer choice
    const compchoice=generatecompchoice();
    if(userchoice==compchoice){
        //draw game
        drawgame();
    }else{
        let userwin=true;
        if(userchoice==="rock"){
            //scissors,paper
            userwin=compchoice==="paper"?false:true;
        }else if(userchoice=="paper"){
            //rock,scissors
            userwin=compchoice==="scissors"?false:true;
        }else{
            //rock,paper
            userwin=compchoice==="rock"?false:true
        }
        showwinner(userwin, userchoice,compchoice);
    }
};
choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=> {
        const userchoice=choice.getAttribute("id");
        console.log("choices was clicked",userchoice);
        playGame(userchoice);
    });
});