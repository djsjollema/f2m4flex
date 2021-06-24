let getalA,getalB,antwoord,jouwAntwoord,goedFout;

const opgaveblad = document.getElementById('opgaveblad');
const input1 = document.getElementById('input1');
const execButton = document.getElementById('execButton');
const container = document.getElementById('container');

maakOpgave();

function maakOpgave(){
    getalA = Math.floor(Math.random()*10)+1;
    getalB = Math.floor(Math.random()*10)+1;
    antwoord = getalA*getalB; 

    opgaveblad.innerHTML = getalA + " x " + getalB;
}

//execButton.addEventListener('click',checkAntwoord);

input1.addEventListener('keydown',checkAntwoord)

function checkAntwoord(evt){
    //console.log(evt);
    if(evt.key == "Enter"){
        //console.log("hier komt invoer")
 
        jouwAntwoord = input1.value;
        if(antwoord == jouwAntwoord){
            goedFout = true;
            container.style.background = "green";

        } else {
            goedFout = false;
            container.style.background = "red";
        }
        setTimeout(wachten,2000);
    }
}

function wachten(){
    container.style.background = "aliceblue";
    input1.value = "";
    input1.focus();
    maakOpgave();
}
