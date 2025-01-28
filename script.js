const anciões = [
    { 
        nome: "Ancião 1", 
        imagem:  "img/ancioes/azathoth.jpg",
        historia: "História do Ancião 1: Este é o primeiro ancião, um ser de poder inimaginável...",
        alt: "Imagem do Ancião 1 - Um ser de poder inimaginável" 
    },
    { 
        nome: "Ancião 2", 
        imagem: "img/ancioes/BLACK GOAT (2).jpg", 
        historia: "História do Ancião 2: Nascido nas profundezas do cosmos, este ancião...",
        alt: "Imagem do Ancião 2 - Nascido nas profundezas do cosmos" 
    },
    { 
        nome: "Ancião 3", 
        imagem: "img/ancioes/CTHULHU.jpg", 
        historia: "História do Ancião 3: Guardião de segredos ancestrais, este ancião...",
        alt: "Imagem do Ancião 3 - Guardião de segredos ancestrais" 
    },
    { 
        nome: "Ancião 4", 
        imagem: "ancião4.jpg", 
        historia: "História do Ancião 4: Conhecido por sua sabedoria e conhecimento...",
        alt: "Imagem do Ancião 4 - Conhecido por sua sabedoria e conhecimento" 
    },
    { 
        nome: "Ancião 5", 
        imagem: "ancião5.jpg", 
        historia: "História do Ancião 5: Dominador dos elementos, este ancião...",
        alt: "Imagem do Ancião 5 - Dominador dos elementos" 
    },
    { 
        nome: "Ancião 6", 
        imagem: "ancião6.jpg", 
        historia: "História do Ancião 6: Criador de mundos e realidades, este ancião...",
        alt: "Imagem do Ancião 6 - Criador de mundos e realidades" 
    },
    { 
        nome: "Ancião 7", 
        imagem: "ancião7.jpg", 
        historia: "História do Ancião 7: Um ser misterioso com poderes sobrenaturais...",
        alt: "Imagem do Ancião 7 - Um ser misterioso com poderes sobrenaturais" 
    },
    { 
        nome: "Ancião 8", 
        imagem: "ancião8.jpg", 
        historia: "História do Ancião 8: O guardião do tempo e do espaço, este ancião...",
        alt: "Imagem do Ancião 8 - O guardião do tempo e do espaço" 
    },
    { 
        nome: "Ancião 9", 
        imagem: "ancião9.jpg", 
        historia: "História do Ancião 9: Comanda legiões de criaturas das trevas...",
        alt: "Imagem do Ancião 9 - Comanda legiões de criaturas das trevas" 
    },
    { 
        nome: "Ancião 10", 
        imagem: "ancião10.jpg", 
        historia: "História do Ancião 10: O último ancião, cujo poder é desconhecido...",
        alt: "Imagem do Ancião 10 - O último ancião, cujo poder é desconhecido" 
    }
];

const selectAncião = document.getElementById("select-ancião-ancioes");
const imagemAncião = document.getElementById("ancião-imagem");
const historiaAncião = document.getElementById("ancião-historia");
const botaoVoltar = document.getElementById("botao-voltar-ancioes");
const botaoAvancar = document.getElementById("botao-avancar-ancioes");

let anciãoAtual = 0;

function exibirAncião(index) {
    const ancião = anciões[index];
    imagemAncião.src = ancião.imagem;
    imagemAncião.alt = ancião.alt;
    historiaAncião.textContent = ancião.historia;
    selectAncião.value = index;
}

function proximoAncião() {
    anciãoAtual = (anciãoAtual + 1) % anciões.length;
    exibirAncião(anciãoAtual);
}

function anciãoAnterior() {
    anciãoAtual = (anciãoAtual - 1 + anciões.length) % anciões.length;
    exibirAncião(anciãoAtual);
}

botaoVoltar.addEventListener("click", anciãoAnterior);
botaoAvancar.addEventListener("click", proximoAncião);

selectAncião.addEventListener("change", (event) => {
    anciãoAtual = parseInt(event.target.value);
    exibirAncião(anciãoAtual);
});

exibirAncião(anciãoAtual);