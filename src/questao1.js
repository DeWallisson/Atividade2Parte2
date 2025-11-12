const usuario = {
nome: "ana silva",
idade:30,
habilidade: ["JavaScript", "React", "Node.js"],
ativo:true
};

const jsonString = JSON.stringify(usuario);
console.log(jsonString)


const recuperandoUsuario = JSON.parse(jsonString);
console. log(recuperandoUsuario)