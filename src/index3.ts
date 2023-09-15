/*3. Crie um programa que simule uma carteira de dinheiro. Este
programa vai precisar ter uma carteira contendo saldo, transações
de entrada e saídas. Ou seja, será um objeto com estas
propriedades. Depois crie uma função para lançar uma entrada e
uma saída. Caso ao lançar uma saída e não tiver saldo, precisa dar
um erro ou avisar.*/

class Carteira {
    saldo: number;
    transacoes: Array<{ tipo: string, valor: number }>;

    constructor() {
        this.saldo = 0;
        this.transacoes = [];
    }

    entrada(valor: number) {
        this.saldo += valor;
        this.transacoes.push({ tipo: 'entrada', valor });
    }

    saida(valor: number) {
        if (this.saldo < valor) {
            console.error('Saldo insuficiente!');
            return;
        }
        this.saldo -= valor;
        this.transacoes.push({ tipo: 'saida', valor });
    }
}

let minhaCarteira = new Carteira();
minhaCarteira.entrada(100);
minhaCarteira.saida(50);