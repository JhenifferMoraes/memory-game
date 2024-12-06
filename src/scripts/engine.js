const emojis = [
    "🦝", 
    "🦝",
    "🦧",
    "🦧",
    "🐻",
    "🐻",
    "🦋",
    "🦋",
    "🐱",
    "🐱",
    "🐶",
    "🐶",
    "🦊",
    "🦊",
    "🐯",
    "🐯",
];
let openCards = [];
let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

for(let i=0; i < emojis.length; i++)
{
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffleEmojis[i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
}


function handleClick(){
    if(openCards.length < 2){
        this.classList.add("boxOpen"); 
        openCards.push(this);

    }
    if(openCards.length == 2){
        setTimeout(checkMatch, 500);
    }
}

function checkMatch(){

    if(openCards[0].innerHTML === openCards[1].innerHTML){
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
    }else{
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
    }
    openCards = [];

    if(document.querySelectorAll(".boxMatch").length === emojis.length){
        alert("🔔 Parabéns você venceu! Sua página será regarregada automaticamente.");

        setTimeout(function() {
            window.location.reload(); // Recarrega a página após 1 segundos
        }, 1000);  // 1000 milissegundos = 1 segundos
    }
}

window.onload = function() {
    var music = document.getElementById('background-music');
    
    // Tenta tocar a música
    music.play().then(() => {
        // Depois de começar a tocar, desmuta o áudio
        music.muted = false;
    }).catch((error) => {
        console.log('Erro ao tentar tocar a música: ', error);
    });
};