function parseJSONSafe(jsonString) {
  try {
    const objeto = JSON.parse(jsonString);
    return objeto;
  } 
  catch (error) {
    console.error("Erro ao fazer parse do JSON:", error.message);
    return null; // Retorna o valor null caso falhar.
  }
}


// Teste
const jsonInvalido = '{nome: "João", "idade": 30}';
console.log("\nResultado JSON Inválido:", parseJSONSafe(jsonInvalido)); 
// Deve retornar null ou mensagem de erro.