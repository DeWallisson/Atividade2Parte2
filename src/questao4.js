const endereco = {
  rua: "Av. Paulista",
  numero: 1000,
  cidade: "São Paulo",
  cep: "01310-100"
};

function formatandoEndereco(end) {
  return `${end.rua}, ${end.numero} - ${end.cidade} - CEP: ${end.cep}`;
}


const resultado = formatandoEndereco(endereco);
console.log(resultado);