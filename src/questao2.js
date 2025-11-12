const jsonString = `{
    "Usuarios": [
        {"nome": "Carlos", "email": "carlos@gmail.com"},
        { "nome": "Maria", "email": "maria@gmail.com" },
        { "nome": "João", "email": "joao@gmail.com" }
    ]
}`;

const listaUsuarios = JSON.parse(jsonString);
const emails = listaUsuarios.Usuarios.map(usuario => usuario.email);


const emailsConcatenados = emails.join(", ");
console.log(emailsConcatenados)