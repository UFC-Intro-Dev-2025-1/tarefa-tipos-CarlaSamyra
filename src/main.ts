let numeroPCs: number = 30;
console.log (`Há ${numeroPCs} computadores na sala`);

let aluna: string = 'Carla Samyra';
console.log (`Eu sou a aluna ${aluna}!`);

let arcondicionado: boolean = true;
console.log (`O ar-condicionado está ligado. ${arcondicionado}`);

let valordesconhecido;
console.log (`Número de tijolos usados na estrutura da sala: ${valordesconhecido}.`);

interface Porta {
    peso: number;
    nome: string;
    funcao: string;
}
let porta: Porta = {
    nome: 'Porta da sala',
    peso: 10,
    funcao: 'Liberar entrada dos alunos'
};
console.log (`Detalhes da porta da sala. Nome: ${porta.nome},`);
console.log (`Seu peso: ${porta.peso},`);
console.log (`E a sua função é: ${porta.funcao}.`);
