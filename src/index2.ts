/*2. Crie uma função que receba uma lista de objetos contendo nota e
peso, realize a média das notas considerando o peso. Exemplos:
Lista com 2 notas: (N1*P1) + (N2*P2) / 2 = Resultado
Lista com 3 notas: (N1*P1) + (N2*P2) + (N3*P3) / 3 = Resultado*/

type NotaPeso = {
    nota: number;
    peso: number;
};

function calcularMediaNotas(lista: NotaPeso[]): number {
    let somaPesos = 0;
    let somaNotas = 0;


for(let i = 0; i < lista.length; i++){
    somaPesos += lista[i].peso;
    somaNotas += lista[i].nota * lista[i].peso;
}

return somaNotas / somaPesos;
}

let lista = [
    {nota: 7, peso: 2},
    {nota: 8, peso: 3},
    {nota: 9, peso: 4},
];

let mediaPonderada = calcularMediaNotas(lista);
console.log(`Media ponderada: ${mediaPonderada}`);