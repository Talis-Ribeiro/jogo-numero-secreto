let listaNumerosSorteados = [];
let numeroLimite = 100
let numeroSecreto = gerarNumeroAleatorio()

let tentativas = 1;

function exibirTextoTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2})
}
function exibirMensagemInicial() {
  exibirTextoTela("h1", "Número Secreto");
  exibirTextoTela("p", "Escolha um número de 1 a 100");
}
exibirMensagemInicial();

function gerarNumeroAleatorio() {
  let numeroEscolhido= parseInt(Math.random() * numeroLimite + 1);
  let quantidadeNumerosLista = listaNumerosSorteados.length

if(quantidadeNumerosLista == numeroLimite){
  listaNumerosSorteados = []
}

if(listaNumerosSorteados.includes(numeroEscolhido)){
  return gerarNumeroAleatorio
}
else{
  listaNumerosSorteados.push(numeroEscolhido)
  console.log(listaNumerosSorteados)
  return numeroEscolhido
}
}
function verificarChute() {
  let chute = document.querySelector("input").value;

  if (chute == numeroSecreto) {
    exibirTextoTela("h1", "Acertoooou!");
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
    exibirTextoTela("p", mensagemTentativas);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (chute > numeroSecreto) {
      exibirTextoTela("p", "O número é menor");
    } else {
      exibirTextoTela("p", "O número é maior");
    }
    tentativas++;
    limparCampo();
  }
}

function limparCampo() {
  chute = document.querySelector("input");
  chute.value = "";
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById("reiniciar").setAttribute("disable", true);
}
