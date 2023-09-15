/*4. Crie um programa para cadastrar, listar e excluir produtos de uma
lista com tipagem de Produto.*/

class Produto {
    constructor(public id: number, public nome: string) {}
}

class ProdutoLista {
    private produtos: Produto[] = [];

    cadastrar(produto: Produto): void {
        this.produtos.push(produto);
    }

    listar(): Produto[] {
        return this.produtos;
    }

    excluir(id: number): void {
        this.produtos = this.produtos.filter(produto => produto.id !== id);
    }
}


const lista1 = new ProdutoLista();
lista.cadastrar(new Produto(1, 'Produto 1'));
lista.cadastrar(new Produto(2, 'Produto 2'));
console.log(lista.listar()); 
lista.excluir(1); 
console.log(lista.listar());