const time = document.querySelector(".clock");

function clock(){
    const date = new Date();
    const minute = date.getMinutes();
    const hour = date.getHours();
    time.innerText = `${hour}:${minute < 10 ? `0${minute}` : minute}`;
   
}


function init(){
clock();
setInterval(clock,1000);
}

init();