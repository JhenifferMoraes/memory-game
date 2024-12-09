<img width=100% src="https://capsule-render.vercel.app/api?type=waving&color=89033a&height=150&section=header"/>

# Projeto Jogo da Memória com Emojis Utilizando JavaScript
Neste incrível projeto disponibilizado pela Dio para os participantes do Bootcamp Ri Happy - Front-end do Zero, a principal ideia era aprendermos mais sobre HTML, CSS e JavaScript na prática e fixarmos ainda mais diversos conceitos vistos durante o curso. Também era opcional que cada aluno acrescentasse em seu projeto o seu "próprio toque". Sendo assim, fiz algumas melhorias que vi necessidade durante o desenvolvimento, tanto em questões estéticas quanto de funcionamento.

📍 Música na página  
Um dos toques de experiência acrescentados foi uma melodia ao entrar na página. Durante o processo, verifiquei que era necessário algo que fizesse com que os áudios funcionassem perfeitamente em todos os navegadores e automaticamente ao iniciar a página. Porém, em alguns navegadores, existem ferramentas que bloqueiam os áudios e, sendo assim, desenvolvi esta estrutura abaixo:
```
No HTML
    <audio id="background-music" autoplay loop>
        <source src="./src/music/jogomemoria.mp3" type="audio/mp3">
        <source src="./src/music/jogomemoria.ogg" type="audio/ogg">
        <source src="./src/music/jogomemoria.wav" type="audio/wav">
        Seu navegador não suporta o elemento audio.
    </audio>
```
```
No JS
window.onload = function() {
    let music = document.getElementById('background-music');
    
    // 🔴 Tenta tocar a música
    music.play().then(() => {
        // 🔴 Depois de começar a tocar, desmuta o áudio
        music.muted = false;
    }).catch((error) => {
        console.log('Erro ao tentar tocar a música: ', error);
    });
};
```
📍 Correção na regra de giro das cartas 
Uma outra coisa observada era que, ao virar duas cartas e elas combinarem entre si, conseguíamos virar as cartas mais uma vez. Isso ocorria porque não havia nada que impedisse a abertura de uma carta após a combinação ser verificada. Sendo assim, implementei essa solução:
```
function handleClick() {
    if (openCards.length < 2 && !this.classList.contains("boxMatch")) {  // 🔴 Verifica se a carta já está combinada
        this.classList.add("boxOpen");
        openCards.push(this);
    }

    if (openCards.length == 2) {
        setTimeout(checkMatch, 500);
    }
}
```
📍 Atualização automática da página
Foi adicionada uma atualização automática após o usuário vencer o jogo. O código implementado foi o seguinte:
```
if(document.querySelectorAll(".boxMatch").length === emojis.length){
        alert("🔔 Parabéns você venceu! Sua página será regarregada automaticamente.");

        setTimeout(function() {
            window.location.reload(); // Recarrega a página após 1 segundos
        }, 1000);  // 1000 milissegundos = 1 segundos
    }
```
📍 Mudanças no CSS
Também foram alteradas as cores e formatos de botões, mas uma das principais mudanças foi o background, que recebeu um efeito bem legal de movimento entre uma escala de cores escolhidas:  
```
body {
    display: flex; 
    justify-content: center;
    align-items: center;
    min-height: 100vh; 
    margin: 0; 
    background: linear-gradient(to bottom, #151515, #89033a); /* 🔴 Define um gradiente de fundo do topo para o fundo */
    background-size: 100% 200%; /* 🔴 Ajusta o tamanho do fundo para cobrir a área com um gradiente maior */
    animation: gradientAnimation 8s ease infinite; /* 🔴 Aplica a animação do fundo com duração de 8 segundos */
    user-select: none; 
}

@keyframes gradientAnimation {
    0% {
        background-position: 0% 0%; /* 🔴 Define a posição inicial do fundo */
    }
    50% {
        background-position: 0% 50%; /* 🔴 Muda a posição do fundo para meio da altura */
    }
    100% {
        background-position: 0% 0%; /* 🔴 Retorna a posição inicial do fundo */
    }
}     
```

### 📋O que foi necessário para realizar este projeto

O projeto consistiu em configurar e executar um ambiente de desenvolvimento utilizando ferramentas essenciais. Primeiramente, foi necessário instalar o Git para o controle de versões e o Node.js para rodar a aplicação.

Uma IDE (Ambiente de Desenvolvimento Integrado) foi configurada para facilitar a codificação, e, neste caso, optei pelo Visual Studio Code (VSCode). O projeto foi executado via a extensão do VSCode chamada Live Server. Após o desenvolvimento, o código foi versionado e compartilhado em um repositório no GitHub, garantindo o backup e o gerenciamento das versões do projeto.

Abaixo, deixarei alguns links para downloads oficiais de tudo o que foi utilizado para Windows.

```
 Visual Studio Code - https://code.visualstudio.com/
```
```
 GitBash - https://git-scm.com/downloads/win
```
```
 Node.js - https://nodejs.org/pt
```
```
 ID da extensão Live Server - ritwickdey.LiveServer
```
### 🪄Link do Projeto
Clique [aqui](https://jheniffermoraes.github.io/memory-game/) e acesse o projeto!

<img width=100% src="https://capsule-render.vercel.app/api?type=waving&color=89033a&height=100&section=footer"/>
