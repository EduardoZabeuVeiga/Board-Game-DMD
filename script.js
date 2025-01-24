var posicaoAtualA = 0;
var totalPontosA = 21;
var distanciaEntrePontosA = 25;

var posicaoAtualB = 0;
var totalPontosB = 4;
var distanciaEntrePontosB = 70;

var posicaoAtualC = 0;
var totalPontosC = 4;
var distanciaEntrePontosC = 70;

var posicaoAtualD = 0;
var totalPontosD = 4;
var distanciaEntrePontosD = 70;

var posicaoAtualE = 0;
var totalPontosE = 5;
var distanciaEntrePontosE = 34;

var posicaoAtualF = 0;
var totalPontosF = 5;
var distanciaEntrePontosF = 34;

function exibirMensagem(mensagem) {

  var divMensagem = document.createElement("div");
  divMensagem.innerHTML = mensagem;


  divMensagem.style.fontSize = "20px";
  divMensagem.style.textAlign = "center";
  divMensagem.style.padding = "20px"; 
  divMensagem.style.border = "1px solid black";
  divMensagem.style.backgroundColor = "white"; 
  divMensagem.style.color = "black"; 
  divMensagem.style.position = "fixed"; 
  divMensagem.style.top = "50%"; 
  divMensagem.style.left = "50%"; 
  divMensagem.style.transform = "translate(-50%, -50%)"; 
  divMensagem.style.zIndex = "1000"; 


  var botaoConfirmar = document.createElement("button");
  botaoConfirmar.innerHTML = "Confirmar";
  botaoConfirmar.style.marginTop = "10px";

  divMensagem.appendChild(botaoConfirmar);


  document.body.appendChild(divMensagem);


  botaoConfirmar.addEventListener("click", function() {
    document.body.removeChild(divMensagem);
  });
}

function avancarA() {
  if (posicaoAtualA < totalPontosA - 1) {
    posicaoAtualA++;
    var novaPosicao = ((posicaoAtualA -1) * distanciaEntrePontosA)+50;
    document.querySelector("#containerA > img").style.left = novaPosicao + "px";

    if (posicaoAtualA === 4) {
      exibirMensagem("Limiar!!! Evolua sua habilidade e ative os efeitos!");
    } else if (posicaoAtualA === 8) {
      exibirMensagem("Limiar!!! Evolua sua habilidade e ative os efeitos! UM DADO VERDE PELA SUA INSANIDADE");
    } else if (posicaoAtualA === 12) {
      exibirMensagem("Limiar!!! Evolua sua habilidade e ative os efeitos!");
    } else if (posicaoAtualA === 15) {
      exibirMensagem("Limiar!!! Evolua sua habilidade e ative os efeitos! AGORA SAO 2 DADOS VERDES PELA SUA INSANIDADE (totalizando 2 dados pela insanidade) ");
    } else if (posicaoAtualA === 18) {
      exibirMensagem("Limiar!!! Evolua sua habilidade e ative os efeitos! AGORA SAO 3 DADOS VERDES PELA SUA INSANIDADE (totalizando 3 dados pela insanidade) ");
    } else if (posicaoAtualA === 19) {
      exibirMensagem("Limiar!!! Evolua sua habilidade e ative os efeitos! AGORA SAO 4 DADOS VERDES PELA SUA INSANIDADE (totalizando 4 dados pela insanidade) ");
    }

    if (posicaoAtualA === totalPontosA - 1) {
      if (confirm("Tem certeza que deseja entrar na loucura?")) {
        window.location.href = "loucura.html";
      } else {
        voltarA();
      }
    }
  }
}


function voltarA() {
  if (posicaoAtualA > 0) {
    posicaoAtualA--;
    
    var novaPosicao = ((posicaoAtualA -1) * distanciaEntrePontosA)+50;
    document.querySelector("#containerA > img").style.left = novaPosicao + "px";
  }
  else 
    { document.querySelector("#containerA > img").style.left = 18 + "px";  

  }
}


document.querySelector("#containerA > img").style.left = 18 + "px";

function avancarB() {
  if (posicaoAtualB < totalPontosB - 1) {
    posicaoAtualB++;
    var novaPosicao = posicaoAtualB * distanciaEntrePontosB;
    document.querySelector("#containerB > img").style.left = novaPosicao + "px";
  }
}

function voltarB() {
  if (posicaoAtualB > 0) {
    posicaoAtualB--;
    var novaPosicao = posicaoAtualB * distanciaEntrePontosB;
    document.querySelector("#containerB > img").style.left = novaPosicao + "px";
  }
}

function avancarC() {
  if (posicaoAtualC < totalPontosC - 1) {
    posicaoAtualC++;
    var novaPosicao = posicaoAtualC * distanciaEntrePontosC;
    document.querySelector("#containerC > img").style.left = novaPosicao + "px";
  }
}

function voltarC() {
  if (posicaoAtualC > 0) {
    posicaoAtualC--;
    var novaPosicao = posicaoAtualC * distanciaEntrePontosC;
    document.querySelector("#containerC > img").style.left = novaPosicao + "px";
  }
}

function avancarD() {
  if (posicaoAtualD < totalPontosD - 1) {
    posicaoAtualD++;
    var novaPosicao = posicaoAtualD * distanciaEntrePontosD;
    document.querySelector("#containerD > img").style.left = novaPosicao + "px";
  }
}

function voltarD() {
  if (posicaoAtualD > 0) {
    posicaoAtualD--;
    var novaPosicao = posicaoAtualD * distanciaEntrePontosD;
    document.querySelector("#containerD > img").style.left = novaPosicao + "px";
  }
}

function avancarE() {
  if (posicaoAtualE < totalPontosE - 1) {
    posicaoAtualE++;
    var novaPosicao = posicaoAtualE * distanciaEntrePontosE;
    document.querySelector("#containerE > img").style.left = novaPosicao + "px";
  }
}

function voltarE() {
  if (posicaoAtualE > 0) {
    posicaoAtualE--;
    var novaPosicao = posicaoAtualE * distanciaEntrePontosE;
    document.querySelector("#containerE > img").style.left = novaPosicao + "px";
  }
}

function avancarF() {
  if (posicaoAtualF < totalPontosF - 1) {
    posicaoAtualF++;
    var novaPosicao = posicaoAtualF * distanciaEntrePontosF;
    document.querySelector("#containerF > img").style.left = novaPosicao + "px";
  }
}

function voltarF() {
  if (posicaoAtualF > 0) {
    posicaoAtualF--;
    var novaPosicao = posicaoAtualF * distanciaEntrePontosF;
    document.querySelector("#containerF > img").style.left = novaPosicao + "px";
  }
  
}

function avancarG() {
  if (posicaoAtualG < totalPontosG - 1) {
    posicaoAtualG++;
    var novaPosicao = posicaoAtualG * distanciaEntrePontosG;
    document.querySelector("#containerG > img").style.left = novaPosicao + "px";

  
    if (posicaoAtualG === totalPontosG - 1) {
    
      setTimeout(function() {
        if (confirm("Tem certeza que deseja entrar na morte?")) {
          window.location.href = "morte.html";
        } else {
          voltarG();
        }
      }, 1000); 
    }
  }
}

function voltarG() {
  if (posicaoAtualG > 0) {
    posicaoAtualG--;
    var novaPosicao = posicaoAtualG * distanciaEntrePontosG;
    document.querySelector("#containerG > img").style.left = novaPosicao + "px";
  }
}