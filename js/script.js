// DOM
const playGround = document.querySelector(".play__container");
const bgplayGround = document.querySelector(".bg-pentagon");
const sectionPlays = document.querySelector(".plays");
const sectionPicks = document.querySelector(".picks");
const sectionResult = document.querySelector(".play__result");
const options = document.querySelectorAll(".play");
const scoreNum = document.querySelector(".score__result");
const rules = document.querySelector(".btn__rules");
const modal = document.querySelector(".modal__rules");
const replay = document.querySelector(".btn__replay");



// Variables
const plays = ["scissors", "paper", "rock", "lizard", "spock"];
let optPlayer = "";
let optComputer = "";
let time = "";
let result = "";
let win = "You win";
let lose = "You lose";
let tie = "draw";




// Score

if (sessionStorage.getItem("counter") == null){
       sessionStorage.setItem("counter", "0");
}

let score = Number(sessionStorage.getItem("counter"));
scoreNum.textContent = score;




const selectPlay = () => {

       options.forEach(option => {

              option.addEventListener("click", () => {
                     
                     option.classList.remove("play--unselected");
                     option.classList.add("play--selected");

                     if (option.classList.contains("play--selected")){
                            option.disabled = "true";
                     }
                     
                     optPlayer = option.childNodes[1].dataset.btnMove;

                     switch(optPlayer) {
                            case plays[0]:
                                   option.classList.add(`animate--${plays[0]}`);
                                   bgplayGround.classList.add(`animate--${plays[0]}`);
                                   time = "2400";
                                   break;
                            case plays[1]:
                                   option.classList.add(`animate--${plays[1]}`);
                                   bgplayGround.classList.add(`animate--${plays[1]}`);
                                   time = "1800";
                                   break;
                            case plays[2]:
                                   option.classList.add(`animate--${plays[2]}`);
                                   bgplayGround.classList.add(`animate--${plays[2]}`);
                                   time = "1200";
                                   break;
                            case plays[3]:
                                   option.classList.add(`animate--${plays[3]}`);
                                   bgplayGround.classList.add(`animate--${plays[3]}`);
                                   time = "600";
                                   break;
                            case plays[4]:
                                   option.classList.add(`animate--${plays[4]}`);
                                   bgplayGround.classList.add(`animate--${plays[4]}`);
                                   time = "300";
                                   break;
                            
                            }
              
                     printPlaySelected();
                     
                     setTimeout(() => {
                            let text = document.createElement("p");
                            text.textContent = `Your picked`;
                            sectionPicks.appendChild(text);
                     }, time);              
              
              })

       })

}
selectPlay();




const getRandomPlay = () => {

       options.forEach(option => {

              option.addEventListener("click", () => {

                     
                     // Selección jugada ordenador
                     
                     if ((optPlayer !== "") && (option.classList.contains("play--selected"))){
                            
                            let random = Math.round(Math.random()*4);

                            plays.forEach((el, index) => {
                                   if (random === index){
                                          optComputer = el;
                                   }
                            })
                     }

                     // Imprimir jugada ordenador

                     time = parseInt(time) + 300;                     

                     setTimeout(() => {

                            let randomPlay = document.createElement("button");
                            let img = document.createElement("div");
                            let text = document.createElement("p");

                            randomPlay.classList.add("play");
                            randomPlay.classList.add("play--picked-house");
                            img.classList.add("move__option");
                            
                            setInterval(() => {
                                   randomPlay.classList.remove("play--picked-house");
                                   randomPlay.classList.add("play--selected");
                                   randomPlay.style.background = `linear-gradient(to bottom, var(--${optComputer}-10), var(--${optComputer}-20))`;
                                   randomPlay.style.boxShadow = `inset 0em -.2em .1em var(--${optComputer}-30)`;
                                   img.style.backgroundImage = `url('/images/icon-${optComputer}.svg')`;
                                   text.textContent = `The house picked`;

                            }, 300);
                            
                            randomPlay.style.background = `var(--bgColor-10)`
                            randomPlay.style.top = "calc(25% + 2em)";
                            randomPlay.style.left = "calc(50% + 2.5em)";

                            sectionPicks.appendChild(text);
                            randomPlay.appendChild(img);

                            sectionPlays.appendChild(randomPlay);
                            sectionPlays.classList.add("plays--selected")

                     }, time);


                        
                     
                     
              })
       })

}

getRandomPlay();



const letsPlay = () => {
       
       options.forEach(option => {

              option.addEventListener("click", () => {
                     
                     if (optPlayer !== ""){
                            
                            let text = document.createElement("p");
                            let button = document.createElement("button");

                            text.classList.add("result");
                            button.classList.add("btn", "btn__play");
                            button.textContent = "Play again";

                            
                            
                            time = parseInt(time) + 400;
                            
                            switch(optPlayer){
                                   
                                   case plays[0]:

                                          switch(optComputer){
                                                 case plays[1]:
                                                 case plays[3]:
                                                        result = win;
                                                        break;
                                                 case plays[2]:
                                                 case plays[4]:
                                                        result = lose;
                                                        break;
                                                 default:
                                                        result = tie;
                                                 }
                                          
                                          break;
                                   
                                   case plays[1]:
                                          
                                          switch(optComputer){
                                                 case plays[0]:
                                                 case plays[3]:
                                                        result = lose;
                                                        break;
                                                 case plays[2]:
                                                 case plays[4]:
                                                        result = win;
                                                        break;
                                                 default:
                                                        result = tie;
                                          }
                                          break;
                             
                                   case plays[2]:
                                          
                                          switch(optComputer){
                                                 case plays[0]:
                                                 case plays[3]:
                                                        result = win;
                                                        break;
                                                 case plays[1]:
                                                 case plays[4]:
                                                        result = lose;
                                                        break;
                                                 default:
                                                        result = tie;
                                          }
                                          break;
                                   
                                   case plays[3]:

                                          switch(optComputer){
                                                 case  plays[0]:
                                                 case plays [2]:
                                                        result = lose;
                                                        break;
                                                 case plays[1]:
                                                 case plays[4]:
                                                        result = win;
                                                        break;
                                                 default:
                                                        result = tie;
                                          }

                                          break;
                            
                                   case plays[4]:
                                          
                                          switch(optComputer){
                                                 case plays[0]:
                                                 case plays[2]:
                                                        result = win;
                                                        break;
                                                 case plays[1]:
                                                 case plays[3]:
                                                        result = lose;
                                                        break;
                                                 default:
                                                        result = tie;
                                          }
                                          break;

                                   }
                                   
                                   if (result == win) {
                                          sessionStorage.setItem("counter", score + 1);
                                          
                                          setTimeout(() => {
                                                 scoreNum.textContent = score + 1;
                                                 option.style.boxShadow = `inset 0em -.2em .1em #00000040, 0 0 0 1.5em #ffffff0d, 0 0 0 3em #ffffff0d, 0 0 0 5em #ffffff0d`;
                                                 option.style.animation = `${optPlayer} ease-in-out forwards, pulse 1.2s infinite normal ease-in-out`;
                                          }, time);
                            
                                   }
                                  


                            setTimeout(() => {

                                   text.textContent = result;
                                   sectionResult.appendChild(text);
                                   sectionResult.appendChild(button)
       
                            }, time);



                            // Repetir jugada

                            button.addEventListener("click", () => {
                                   location.reload();                            
                            })
                            
                     }
              })
       })


}
letsPlay();



const showRules = () => {
       
       
       rules.addEventListener("click", () => {


              if (!modal.textContent){
                     
                     /* Rules */
                     
                     const subtitle = document.createElement("h2");
                     subtitle.classList.add("title__rules");
                     subtitle.textContent = "Rules";
                     modal.appendChild(subtitle);
                     
       
                     /* Image rules */
                     
                     const img =  document.createElement("img");
                     img.classList.add("img__rules");
                     img.setAttribute("src", "/images/image-rules-bonus.svg");
                     modal.appendChild(img);
                     
                     /* BTN Close*/
                     
                     const close = document.createElement("button");
                     close.classList.add("close__menu");
                     const line1 = document.createElement("span");
                     const line2 = document.createElement("span");
                     line1.classList.add("line__menu");
                     line2.classList.add("line__menu")
                     close.appendChild(line1);
                     close.appendChild(line2);
                     modal.appendChild(close);
                     
                     
                     modal.classList.add("--active");
                     
                            close.addEventListener("click", () => {
                                   modal.classList.remove("--active");

                                   setTimeout(() => {
                                          modal.removeChild(close);
                                          modal.removeChild(img);
                                          modal.removeChild(subtitle);
                                   }, 600);  
                                   
                            })
              }

       })

}
showRules();




const printPlaySelected = () => {


       options.forEach(option => {
              
              if (option.classList.contains("play--selected")){

                     option.style.display = "flex";
                     option.style.transition = `${time}ms ease-in-out all`;
                     
              }
              else {
                   option.style.display = "none";
              }
       })
}

const getReplay = () => {
       replay.addEventListener("click", () => {
              console.log("click")
              sessionStorage.removeItem("counter");
              scoreNum.textContent = 0;
              location.reload();
       })
}
getReplay();