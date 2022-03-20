// DOM
const playGround = document.querySelector(".play__container");
const bgplayGround = document.querySelector(".bg-pentagon");
const options = document.querySelectorAll(".play");
const rules = document.querySelector(".rules__btn");
const modal = document.querySelector(".modal__rules");



// Variables
const plays = ["scissors", "paper", "rock", "lizard", "spock"];
let optPlayer = "";
let optComputer = "";



const selectPlay = () => {

       options.forEach(option => {

              option.addEventListener("click", () => {
                     
                     option.classList.remove("play--unselected");
                     option.classList.add("play--selected");
                     
                     optPlayer = option.childNodes[1].dataset.btnMove;
                     
                     switch(optPlayer) {
                            case plays[0]:
                                   option.classList.add(`animate--${plays[0]}`);
                                   bgplayGround.classList.add(`animate--${plays[0]}`);
                                   break;
                            case plays[1]:
                                   option.classList.add(`animate--${plays[1]}`);
                                   bgplayGround.classList.add(`animate--${plays[1]}`);
                                   break;
                            case plays[2]:
                                   option.classList.add(`animate--${plays[2]}`);
                                   bgplayGround.classList.add(`animate--${plays[2]}`);
                                   break;
                            case plays[3]:
                                   option.classList.add(`animate--${plays[3]}`);
                                   bgplayGround.classList.add(`animate--${plays[3]}`);
                                   break;
                            case plays[4]:
                                   option.classList.add(`animate--${plays[4]}`);
                                   bgplayGround.classList.add(`animate--${plays[4]}`);
                                   break;
                                   
                     }


                     
                     printPlaySelected();
              })
              
       })
}
selectPlay();




const randomPlay = () => {

       options.forEach(option => {

              option.addEventListener("click", () => {

                     
                     
                     // Selección jugada ordenador
                     
                     if (optPlayer !== ""){
                            
                            let random = Math.round(Math.random()*4);
                            plays.forEach((el, index) => {
                                   if (random === index){
                                          optComputer = el;
                                   }
                            })
                     }

                     // Imprimir jugada ordenador
                     
                     let time = "";
                     switch (optPlayer){
                            case plays[0]:
                                   time = "2400";
                                   break;
                            case plays[1]:
                                   time = "1800";
                                   break;
                            case plays[2]:
                                   time = "1200";
                                   break;
                            case plays[3]:
                                   time = "600";
                                   break;
                            default:
                                   time = "300";
                     }


                     setTimeout(() => {

                            let randomPlay = document.createElement("button");
                            let img = document.createElement("div");

                            randomPlay.classList.add("play");
                            randomPlay.classList.add("play--selected");
                            img.classList.add("move__option");

                            randomPlay.style.top = "calc(25% + 2em)";
                            randomPlay.style.left = "calc(50% + 2.5em)";

                            randomPlay.style.background = `linear-gradient(to bottom, var(--${optComputer}-10), var(--${optComputer}-20))`;
                            img.style.backgroundImage = `url('/images/icon-${optComputer}.svg')`;
                            

                            randomPlay.appendChild(img);

                            playGround.appendChild(randomPlay);

                     }, time);
                        
                     
              })
       })

}

randomPlay();



const resultPlay = () => {
       
       if (optPlayer !== "") {
              
        
              switch (optPlayer){


                     case plays[0]:

                            if (optComputer === plays[0]){
                                   alert(`¡Empate!\nAmbos habéis seleccionado ${optPlayer.toUpperCase()}`)

                            } else if (optComputer === plays[1]){
                                   alert(`Has perdido.\n${optPlayer.toUpperCase()} es envuelta por ${optComputer.toUpperCase()}`)

                            } else {
                                   alert(`¡¡Has ganado!!\n${optPlayer.toUpperCase()} machaca ${optComputer.toUpperCase()}`)
                            }
                            
                            break;

                     case plays[1]:
                            if (optComputer === plays[1]){
                                   alert(`¡Empate!\nAmbos habéis seleccionado ${optPlayer.toUpperCase()}`)

                            } else if (optComputer === plays[0]){
                                   alert(`¡¡Has ganado!!\n${optPlayer.toUpperCase()} envuelve ${optComputer.toUpperCase()}`)

                            } else {
                                   alert(`Has perdido.\n${optPlayer.toUpperCase()} es cortado por ${optComputer.toUpperCase()}`)
                            }
                            
                            break;

                     case plays[2]:
                            if (optComputer === plays[2]){
                                   alert(`¡Empate!\nAmbos habéis seleccionado ${optPlayer.toUpperCase()}`)

                            } else if (optComputer === plays[0]){
                                   alert(`Has perdido.\n${optPlayer.toUpperCase()} es machacada por ${optComputer.toUpperCase()}`)

                            } else {
                                   alert(`¡¡Has ganado!!\n${optPlayer.toUpperCase()} corta ${optComputer.toUpperCase()}`)
                            }
                            break;

                     default:
                            alert("Selecciona una opción entre piedra papel o tijera")
              }
       }
}
resultPlay();




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
                     img.setAttribute("src", "images/image-rules-bonus.svg");
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
                                   
                                   
                                   modal.removeChild(close);
                                   modal.removeChild(img);
                                   modal.removeChild(subtitle);
                            })
              }

       })

}
showRules();




const printPlaySelected = () => {


       options.forEach(option => {
              
              if (option.classList.contains("play--selected")){

                     option.style.display = "flex";
                     
              }
              else {
                    option.style.display = "none";
              }
       })
}