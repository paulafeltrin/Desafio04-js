//1 - crie uma função que exiba uma mensagem no console
function mensagem(){
    console.log("Bem vindo ao Quarto desafio de JavaScript!");
}

mensagem();

//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console
function seuNome(nome){
    console.log("Seu nome é:", nome);
}

seuNome("Paula");

//3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console
function cadastro(nome,idade, estiloMusical){
    console.log(`${nome} tem ${idade} anos e o estilo musacal preferido é ${estiloMusical}`);
}

cadastro("Paula", 30, "Pop internacional");

//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console
function tempoLivre(filme, musica){
    console.log(`No tempo livre eu assisti ao ${filme} e escutei a música ${musica}`);
}

tempoLivre("Bee Movie", "Imprevisível, da  Tribo da Periferia")

//5 - crie uma função que retorne o triplo do número recebido no parâmetro da função
function triplo(numero){
    return numero * 3;
}

console.log(`O triplo de 5 é ${triplo(5)}`);