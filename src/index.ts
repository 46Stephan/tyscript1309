/*1. Crie uma função que receba 2 números e retorne um objeto
contendo a média e também um indicador booleano de
aprovado/reprovado. Considere aprovado com média >= 6.*/

type Resultado = {
    media: number;
    aprovado: boolean;
}

function calcularMedia(n1: number, n2: number): Resultado {
    let media = (n1 +n2) / 2;
    let aprovado = media >= 6;
    return {
        media,
        aprovado
    }
}
let resultado = calcularMedia(7,8);
console.log(`Media: ${resultado.media}, Aprovado: ${resultado.aprovado}`);




console.log(minhaCarteira);







