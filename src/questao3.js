const produtosJSON = `{
    "Produtos": [
        {"nome": "Mouse", "preco": 25.00},
        { "nome": "Teclado", "preco": 89.90},
        { "nome": "Monitor", "preco": 450.00},
        { "nome": "Cabo USB", "preco": 15.00}
         ]
}`;

function ProdutosMaior50(jsonString) {
const listaProdutos = JSON.parse(jsonString).Produtos;
const nomeProdutos = [];

for (const produto of listaProdutos)
    {
        if (produto.preco >= 50) {
        nomeProdutos.push(produto.nome);
        }
    }
    return nomeProdutos;
}


const produtosFiltrados = ProdutosMaior50(produtosJSON);
console.log(produtosFiltrados);