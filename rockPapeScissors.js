let playerScoreCounter=0;;
let computerScoreCounter=0;
let roundCounter=0;
let computerChoice;
let playerChoice;
let rock=document.getElementById('rock');
let paper=document.getElementById('paper');
let scissors=document.getElementById('scissors');
let crock=document.getElementById('crock');
let cpaper=document.getElementById('cpaper');
let cscissors=document.getElementById('cscissors');
let computer=document.getElementById('computer');
let person=document.getElementById('person');
let restart=document.getElementById('restart');
let final=document.getElementById('final');
let roundResultString=document.getElementById('roundResult');
//let disapper=document.getElementsByClassName('disapper');
let hiddenheader=document.getElementsByClassName('hide');
let h3c=document.getElementById('h3c');
let h3p=document.getElementById('h3p');


function getComputerChoice() {
    let weapons =["rock","paper","scissors"];
    let weapon=weapons[Math.floor(Math.random()*weapons.length)];
    return weapon;
}
function game(){
    rock.addEventListener('click',function(){
        computerChoice=getComputerChoice();
        playRound('rock',computerChoice);
    });
    paper.addEventListener('click',function(){
        computerChoice=getComputerChoice();
        playRound('paper',computerChoice);

    });
    scissors.addEventListener('click',function(){
        computerChoice=getComputerChoice();
        playRound('scissors',computerChoice);
    })
    restartGame();
}
function gameEnd(roundCounter,playerScoreCounter,computerScoreCounter){
    if((roundCounter===10)&&(playerScoreCounter>computerScoreCounter)){
        rock.style.display='none';
        paper.style.display='none';
        scissors.style.display='none';
        crock.style.display='none';
        cpaper.style.display='none';
        cscissors.style.display='none';
        h3p.style.display='none';
        h3c.style.display='none';
        roundResultString.style.display='none';
        
        final.innerText='you won!';
        
        }
    else if((roundCounter===10)&&(playerScoreCounter<computerScoreCounter)){
        rock.style.display='none';
        paper.style.display='none';
        scissors.style.display='none';
        crock.style.display='none';
        cpaper.style.display='none';
        cscissors.style.display='none';
        h3p.style.display='none';
        h3c.style.display='none';
        roundResultString.style.display='none';
        
        final.innerText='you loss';
        
        }
    else if((roundCounter===10)&&(playerScoreCounter===computerScoreCounter)){
        rock.style.display='none';
        paper.style.display='none';
        scissors.style.display='none';
        crock.style.display='none';
        cpaper.style.display='none';
        cscissors.style.display='none';
        h3p.style.display='none';
        h3c.style.display='none';
        roundResultString.style.display='none';
    
        final.innerText='it is draw';
        
}
}
function playRound(playerChoice,computerChoice){
    let r='rock';
    let p='paper';
    let s='scissors';
    if((playerChoice==r)&&(computerChoice==r)){
       
        roundResultString.innerText='draw';
        roundCounter++;
        person.innerHTML=playerScoreCounter;
        computer.innerHTML=computerScoreCounter;
        rock.classList.add('addyellow');
        crock.classList.add('addyellow');
        
        setTimeout(function(){
            rock.classList.remove('addyellow');
            crock.classList.remove('addyellow');
        
        },300);
        

    }
    else if((playerChoice==r)&&(computerChoice==p)){
        
        roundResultString.innerText='paper beats rock,you loss!';
        roundCounter++;
        computerScoreCounter++;
        person.innerHTML=playerScoreCounter;
        computer.innerHTML=computerScoreCounter;
        rock.classList.add('addred');
        cpaper.classList.add('addgreen');
        
        setTimeout(function(){
            rock.classList.remove('addred');
            cpaper.classList.remove('addgreen');
        
        },300);
        
    }
    else if((playerChoice==r)&&(computerChoice==s)){
        roundResultString.innerText='rock beat Scissor,you won!';
        roundCounter++;
        playerScoreCounter++;
        person.innerHTML=playerScoreCounter;
        computer.innerHTML=computerScoreCounter;
        rock.classList.add('addgreen');
        cscissors.classList.add('addred');
        
        setTimeout(function(){
            rock.classList.remove('addgreen');
            cscissors.classList.remove('addred');
        
        },300);
    }
    else if((playerChoice==p)&&(computerChoice==r)){
        roundResultString.innerText='paper beats rock,you won!';
        roundCounter++;
        playerScoreCounter++;
        person.innerHTML=playerScoreCounter;
        computer.innerHTML=computerScoreCounter;
        paper.classList.add('addgreen');
        crock.classList.add('addred');
        
        setTimeout(function(){
            paper.classList.remove('addgreen');
            crock.classList.remove('addred');
        
        },300);

    }
    else if((playerChoice==p)&&(computerChoice==p)){
        roundResultString.innerText='draw!';
        roundCounter++;
        person.innerHTML=playerScoreCounter;
        computer.innerHTML=computerScoreCounter;
        paper.classList.add('addyellow');
        cpaper.classList.add('addyellow');
        
        setTimeout(function(){
            paper.classList.remove('addyellow');
            cpaper.classList.remove('addyellow');
        
        },300);
    }
    else if((playerChoice==p)&&(computerChoice==s)){
        roundResultString.innerText='scissor beat paper,you loss!';
        roundCounter++;
        computerScoreCounter++;
        person.innerHTML=playerScoreCounter;
        computer.innerHTML=computerScoreCounter;
        paper.classList.add('addred');
        cscissors.classList.add('addgreen');
        
        setTimeout(function(){
            paper.classList.remove('addred');
            cscissors.classList.remove('addgreen');
        
        },300);
    }
    else if((playerChoice==s)&&(computerChoice==r)){
        roundResultString.innerText='rock beats scissors,you lost!';
        roundCounter++;
        computerScoreCounter++;
        person.innerHTML=playerScoreCounter;
        computer.innerHTML=computerScoreCounter;
        scissors.classList.add('addred');
        crock.classList.add('addgreen');
        
        setTimeout(function(){
            scissors.classList.remove('addred');
            crock.classList.remove('addgreen');
        
        },300);
    }
    else if ((playerChoice==s)&&(computerChoice==p)){
        roundResultString.innerText='scissors beat rock,you won';
        roundCounter++;
        playerScoreCounter++;
        person.innerHTML=playerScoreCounter;
        computer.innerHTML=computerScoreCounter;
        scissors.classList.add('addgreen');
        cpaper.classList.add('addred');
        
        setTimeout(function(){
            scissors.classList.remove('addgreen');
            cpaper.classList.remove('addred');
        
        },300);
    }
    else if((playerChoice==s)&&(computerChoice==s)){
        roundResultString.innerText='draw!';
        roundCounter++;
        person.innerHTML=playerScoreCounter;
        computer.innerHTML=computerScoreCounter;
        scissors.classList.add('addyellow');
        cscissors.classList.add('addyellow');
        
        setTimeout(function(){
            scissors.classList.remove('addyellow');
            cscissors.classList.remove('addyellow');
        
        },300);
    }
    gameEnd(roundCounter,playerScoreCounter,computerScoreCounter);
}
function restartGame(){
    restart.addEventListener('click',function(){
        window.location.reload();
    })
}
  
game();













































































// function playRound(playerChoice,ComputerChoice) {
//         let a="rock";
//         let b="scissors";
//         let c="paper";
//     if((playerChoice==a) &&(ComputerChoice==c)){
        
//         var message="paper beats rock you loss";
//         var x=0;

//     }
//         else if ((playerChoice==a) &&(ComputerChoice==b))
//         {
//             var message="rock beat scissors you won";
//             var x=1;
//         }
//         else if((playerChoice==a)&&(ComputerChoice==a)){
//             var message="tie";
            
//         }
//         else if((playerChoice==c)&&(ComputerChoice==a)){
//             var message="paper beat rock you won";
//             var x=1;
//         }
//         else if ((playerChoice==c)&&(ComputerChoice==b)){
//             var message="scissors beat paper, you loss";
//             var x=0;
//         }
//         else if((playerChoice==c)&& (ComputerChoice==c)){
//             var message="tie";
            
//         }
//         else if ((playerChoice==b)&&(ComputerChoice==a)){
//             var message="rock beat scissors, you loss";
//             var x=0;
//         }
//         else if((playerChoice==b)&&(ComputerChoice==c)){
//             var message="scissors beat paper,you won";
//             var x=1;
//         }
//         else if ((playerChoice==b)&&(ComputerChoice==b)){
//             var message="tie";
            
            
//         }
//         return [message,x];

        
//     }

//     function game(){
//             //let playerScoreCounter;
//             //let computerScoreCounter;
//             let playerSelection= prompt("slect your weapon?");
//             let lowerCase=playerSelection.toLowerCase();
//             let computerChoice=getComputerChoice();
//              let messageAndX=playRound(lowerCase,computerChoice);
//              console.log(messageAndX[0]);
             

//             if(messageAndX[1]==1){
//                 playerScoreCounter++;

//             }
//             else if(messageAndX[1]==0){
//                 computerScoreCounter++;
//             }
//             //else{
//                // playerScoreCounter==playerScoreCounter;
//               //  computerScoreCounter=computerScoreCounter;
//            // }
//            return [playerScoreCounter,computerScoreCounter];}

//  for(i=1;i<=5;i++){
//  game();

// }
// if(playerScoreCounter>computerScoreCounter){
//     console.log("you won congra!");
// }

// else if(playerScoreCounter<computerScoreCounter){
//     console.log("loss");
// }
// else{
//     console.log("draw");
// }
      

    

