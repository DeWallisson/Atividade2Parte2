const pedidosJSON = `{
  "pedidos": [
    { "id": 1, "cliente": "Fernanda", "total": 120.50, "status": "entregue" },
    { "id": 2, "cliente": "Roberto", "total": 89.90, "status": "processando" },
    { "id": 3, "cliente": "Carla", "total": 45.30, "status": "entregue" }
  ]
}`;


function processandoPedidos(jsonString) {

    const pedidos = JSON.parse(jsonString).pedidos;
  
  let totalGeral = 0;
  let entregues = 0;
  let processando = 0;

  for (const pedido of pedidos) {

    totalGeral += parseFloat(pedido.total);
    
    if (pedido.status === "entregue") {
      entregues++;
    } else if (pedido.status === "processando") {
      processando++;
    }
  }

  return `${entregues} pedidos entregues, ${processando} em processamento. Valor total: R$ ${totalGeral}`;

}


const resumo = processandoPedidos(pedidosJSON);
console.log(resumo);