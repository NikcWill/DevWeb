
/* let texto = 'texto';
let inteiro = 01;
let decimal = 1.2;
let booleano = true;
let lista = ['a', 'q', 'q', 101, 103, ['12', 33]];
let objeti = {
    'nome': 'caio',
    'email': 'w@gmail.com'};
let nulo = null;
let indefinido = undefined; */

/* let x = 10;
let y = '10';

console.log(x==y);

function soma(a,b){
    return a + b
} */

/* console.log(soma(5,5))

alert(soma(10,20)) */

/* let soma = (a,b)=> a+b
    console.log(soma(5,5))


let soma = (a,b)=>{
    console.log('estou aqui');
    return a + b
} */

/* let objetoarrow = {
    'nome': 'Pedro',
    'metodo': function(){
        console.log(this.nome);
    }
}

objetoarrow.metodo()

let objeto = {
    'nome': 'Pedro',
    'metodo': ()=>{
        console.log(this.nome)
    }
} */


/* let nome = prompt('nome?')
let idade = prompt('idade?')
let altura = prompt('altura?')

function Show(){
    alert(`Seu nome é: ${nome} Sua idade é: ${idade} Sua altura é: ${altura}`)
    
}

Show(); */

/* 
for (let x = 0; x<10; x++){
    console.log(x)
} */
/* 
let lista = ['maça', 'pera', 'uva']

for(let x=0; x< lista.length ; x++){
    console.log(lista[x]);
} */

/* let x =1;
let y =2;
let z =1;

if(x==z && x==z || z ==x ){
    console.log('x é igual a z');
}else {
    console.log('x é diferente a z');

}
 */

/* veiculos = [
    ['Ford', 4, true],
    ['Volvo', 5, false],
    ['Ferrari', 2, true],
    ['Tesla', 4, false],
    ['Corsa', 1, true],
];

let nomes = [];
let quantPessoas = [];
let vagas = [];
let estacionado= [];

console.log(veiculos.length);

for (let x = 0; x < veiculos.length; x++) {
    console.log(veiculos[x][0].toUpperCase());
    nomes.push(veiculos[x][0].toUpperCase());
    vagas.push(x+5);

    if(veiculos[x][1]>= 3){
        quantPessoas.push(veiculos[x][0].toUpperCase())
    }

    if(veiculos[x][2]){
        estacionado.push(veiculos[x][0].toUpperCase())
    }

}

function Show(){
    alert(`Lista dos nome de todos os carros:\n${nomes}\n 
    Lista com todos os carro que cabem mais ou igual do que 3 passageiros:\n${quantPessoas}\n 
    Lista número da vaga que cada carro está estacionado:\n${vagas}\n 
    Lista com todos os carro estacionados:\n${estacionado}`)
    
}

Show();

console.log(nomes);
console.log(quantPessoas);
console.log(vagas);
console.log(estacionado); */

/* let lista = [1,2,3,4,5,6,7,8,9,10]
let quadrado = lista.map((numero)=> numero*numero)
console.log(quadrado); */

/* let produto = ['carro', 'moto', 'bicicleta', 'batera'];
let filtro = produto.filter((produto)=>produto === 'moto');

let lista = ['carro', 'moto', 'bicicleta', 'batera'];
let novoNome = lista.map((produto)=>produto + ' Novo');

console.log(novoNome);
console.log(filtro); */

/* let maiusculo = veiculos.map((nome)=>nome[0].toUpperCase());

let passageiros = veiculos.filter((carro)=>carro[1] > 3).map((nomeCarro)=>nomeCarro[0]);

let estacionado = veiculos.filter((carros)=>carros[2] == true).map((nomeCarro)=>nomeCarro[0]);

 

console.log(maiusculo);

console.log(passageiros);

console.log(estacionado); */

const students = [
    {nome: 'Alice', nota: 85},
    {nome: 'Bob', nota: 72},
    {nome: 'Charlie', nota: 90},
    {nome: 'Dacid', nota: 65},
    {nome: 'Eve', nota: 88},
];

// Usando o método map para extrair todas as notas
const notas = students.map(estudante => estudante.nota);

    console.log(notas); 


    const soma = notas.reduce((acumulador, nota) => {
        return acumulador + nota;
    }, 0);

let media = soma/ students.length;
console.log(media)

const filtro = students.filter((estudante) => estudante.nota > media).map(nomeAluno => nomeAluno.nome);
console.log('Alunos com notas acima da média:', filtro);

