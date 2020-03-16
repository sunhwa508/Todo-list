const form = document.querySelector(".js_form"),
      input= form.querySelector("input"),
      greeting = document.querySelector(".js_greetings");

const USER_CL= "currentUser",
      SHOWING_ON = "showing";

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    saveName(currentValue);
    printGreeting(currentValue);
    
}
function askForName(){
    form.classList.add(SHOWING_ON);
    form.addEventListener("submit",handleSubmit);
}
function saveName(text){
    localStorage.setItem(USER_CL,text);
}
function printGreeting(text){
    form.classList.remove(SHOWING_ON);
    greeting.classList.add(SHOWING_ON);
    greeting.innerText=`Have a lovely day ${text}`;
    
}
function loadName(){
    const currentUser = localStorage.getItem(USER_CL);
    if(currentUser === null){
        askForName();
    }else{
        printGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();