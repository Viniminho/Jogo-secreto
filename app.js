let listaDeNumerosSorteados = [];
let numeroLimite = 10
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1


function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Korean Female', {rate: 1.2})
}

function exibirMensagemInicial(){ 
exibirTextoNaTela('h1', 'jogo super secreto');
exibirTextoNaTela('p', 'didite o numero super secreto entre 1 e 10');
}
exibirMensagemInicial()
function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);
    if (chute == numeroSecreto){
            exibirTextoNaTela('h1','acertou' );
            let palavraTentiva = tentativas > 1? 'tentativas': 'tentativa';
            let mensagemTentativas = (`tu é brabo, descobriu o numero secreto com ${tentativas} ${palavraTentiva}`);
            exibirTextoNaTela('p', ` ${mensagemTentativas}`);
            document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto){
        exibirTextoNaTela('h1', `o numero é menor que ${chute}, meu consgrado`)
        } else  { 
            if (chute < numeroSecreto){
                exibirTextoNaTela('h1', `o numero é maior que ${chute}, mano veio`);
            }
         } tentativas++;
           limparCampo()
    }
    
    
}

function  gerarNumeroAleatorio(){ 
   let numeroEscolhido = parseInt(Math.random()* numeroLimite + 1); 
   let quantidadeElementosNaLista = listaDeNumerosSorteados.length;
    if (quantidadeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio(); 
     } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido
     }} 


function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo() {
   numeroSecreto = gerarNumeroAleatorio();
   limparCampo();
   tentativas = 1;
   exibirMensagemInicial()
   document.getElementById('reiniciar') .setAttribute('disabled', true)
   
}
