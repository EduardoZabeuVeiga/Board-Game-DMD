const historias = [
    { 
        imagem: "img/investigadores/BACK/A Garota back.jpg",
        alt: "A Garota" 
    },
    { 
        imagem: "img/investigadores/BACK/ADAM back.jpg", 
        alt: "ADAM" 
    },
    { 
        imagem: "img/investigadores/BACK/AHMED back.jpg", 
        alt: "AHMED" 
    },
    { 
        imagem: "img/investigadores/BACK/BORDEN back.jpg", 
        alt: "BORDEN" 
    },
    { 
        imagem: "img/investigadores/BACK/Elizabeth back.jpg", 
        alt: "Elizabeth" 
    },
    { 
        imagem: "img/investigadores/BACK/FATIMA back.jpg", 
        alt: "FATIMA" 
    },
    { 
        imagem: "img/investigadores/BACK/IAn back.jpg", 
        alt: "IAn" 
    },
    { 
        imagem: "img/investigadores/BACK/irmabeth.jpg", 
        alt: "irmabeth" 
    },
    { 
        imagem: "img/investigadores/BACK/Morgan back.jpg", 
        alt: "Morgan" 
    },
    { 
        imagem: "img/investigadores/BACK/RASPUTIN back.jpg", 
        alt: "RASPUTIN" 
    }
];

const selectHistoria = document.getElementById("select-historia");
const imagemHistoria = document.getElementById("historia-imagem");
const botaoVoltar = document.getElementById("botao-voltar-hist");
const botaoAvancar = document.getElementById("botao-avancar-hist");

let historiaAtual = 0;

function exibirHistoria(index) {
    const historia = historias[index];
    imagemHistoria.src = historia.imagem;
    imagemHistoria.alt = historia.alt;
    selectHistoria.value = index;
}

function proximaHistoria() {
    historiaAtual = (historiaAtual + 1) % historias.length;
    exibirHistoria(historiaAtual);
}

function historiaAnterior() {
    historiaAtual = (historiaAtual - 1 + historias.length) % historias.length;
    exibirHistoria(historiaAtual);
}

botaoVoltar.addEventListener("click", historiaAnterior);
botaoAvancar.addEventListener("click", proximaHistoria);

selectHistoria.addEventListener("change", (event) => {
    historiaAtual = parseInt(event.target.value);
    exibirHistoria(historiaAtual);
});

exibirHistoria(historiaAtual);