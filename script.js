// Dados dos anciões
const anciões = [
    { nome: "Ancião 1", imagem: "ancião1.jpg", historia: "História do Ancião 1..." },
    { nome: "Ancião 2", imagem: "ancião2.jpg", historia: "História do Ancião 2..." },
    { nome: "Ancião 3", imagem: "ancião3.jpg", historia: "História do Ancião 3..." },
    { nome: "Ancião 4", imagem: "ancião4.jpg", historia: "História do Ancião 4..." },
    { nome: "Ancião 5", imagem: "ancião5.jpg", historia: "História do Ancião 5..." },
    { nome: "Ancião 6", imagem: "ancião6.jpg", historia: "História do Ancião 6..." },
    { nome: "Ancião 7", imagem: "ancião7.jpg", historia: "História do Ancião 7..." },
    { nome: "Ancião 8", imagem: "ancião8.jpg", historia: "História do Ancião 8..." },
    { nome: "Ancião 9", imagem: "ancião9.jpg", historia: "História do Ancião 9..." },
    { nome: "Ancião 10", imagem: "ancião10.jpg", historia: "História do Ancião 10..." }
    // Adicione mais anciões aqui
];

const listaAncioes = document.getElementById("lista-ancioes");
const imagemAncião = document.getElementById("ancião-imagem");
const historiaAncião = document.getElementById("ancião-historia");
const botaoVoltar = document.getElementById("botao-voltar");
const botaoAvancar = document.getElementById("botao-avançar");

let anciãoAtual = 0;

function exibirAncião(index) {
    const ancião = anciões[index];
    imagemAncião.src = ancião.imagem;
    imagemAncião.alt = `Imagem do ${ancião.nome}`;
    historiaAncião.textContent = ancião.historia;
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

anciões.forEach((ancião, index) => {
    const linkAnciao = document.createElement("a");
    linkAnciao.textContent = ancião.nome;
    linkAnciao.addEventListener("click", () => {
        anciãoAtual = index;
        exibirAncião(anciãoAtual);
    });
    listaAncioes.appendChild(linkAnciao);
});

exibirAncião(anciãoAtual);