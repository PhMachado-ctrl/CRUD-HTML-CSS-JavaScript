var idAtual = 1;

class Cliente {
    constructor(obj){
        obj = obj || {};
        this.id = obj.id;
        this.nome = obj.nome;
        this.cpfOuCnpj = obj.cpfOuCnpj;
        this.email = obj.email;
        this.telefone = obj.telefone;
        this.idUsuario = obj.idUsuario;
        this.dataCadastro = obj.dataCadastro;
        // this.enderecos = obj.enderecos && obj.enderecos.map(e => new Endereco(e))
    }
}


document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Capturar os valores dos campos
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var cpf = document.getElementById("cpf").value;
    var telefone = document.getElementById("telefone").value;
    var idUsuario = document.getElementById("iduser").value;

    // Criar um objeto com os valores capturados
    var pessoa = {
        nome: nome,
        idUsuario: idUsuario,
        email: email,
        cpfOuCnpj: cpf,
        telefone: telefone,
        dataCadastro:  new Date(),
    };

    console.log(cadastrar(pessoa));
  
});
var listaDeClientes = [];

function mostrarLista(){
    for (let i = 0; i < listaDeClientes.length; i++) {
       console.log(listaDeClientes[i]);
        
    }

}

function obterTodos(){
    return listaDeClientes;
}

function cadastrar(obj){
    var cliente = new Cliente(obj);
    idAtual++;
    cliente.id = idAtual;
    listaDeClientes.push(cliente);

    return cliente;
}

