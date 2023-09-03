var idAtual = 0;
const inputFile = document.querySelector("#picture__input");
const pictureImage = document.querySelector(".picture__image");
const pictureImageTxt = "Choose an image";

class Produto {
    constructor(obj){
        obj = obj || {};
        this.id = obj.id;
        this.nome = obj.nome;
        this.valor = obj.valor;
        this.quantidadeEstoque = obj.quantidadeEstoque;
        this.observacao = obj.observacao;
        this.foto = obj.foto;
        this.dataCadastro = obj.dataCadastro;
    }
};

pictureImage.innerHTML = pictureImageTxt;

    inputFile.addEventListener("change", function (e) {
        const inputTarget = e.target;
        const file = inputTarget.files[0];

        if (file) {
            const reader = new FileReader();

            reader.addEventListener("load", function (e) {
                const readerTarget = e.target;

                const img = document.createElement("img");
                img.src = readerTarget.result;
                img.classList.add("picture__img");

                pictureImage.innerHTML = "";
                pictureImage.appendChild(img);
            });

            reader.readAsDataURL(file);
        } else {
            pictureImage.innerHTML = pictureImageTxt;
        }
    });


document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário
    console.log("form")
    // Capturar os valores dos campos
    var nome = document.getElementById("nome").value;
    var quant = document.getElementById("quant").value;
    var vlr = document.getElementById("vlr").value;
    var obs = document.getElementById("obs").value;


    // Criar um objeto com os valores capturados
    var produto = {
        nome: nome,
        quantidadeEstoque: quant,
        valor: vlr,
        foto: pictureImage,
        dataCadastro:  new Date(),
        observacao: obs,
    };

    console.log(cadastrar(produto));
    
  
});

var listaDeProdutos = [
    new Produto({
        id:1,
        nome:"Sapato",
        quantidadeEstoque: 10,
        valor: 200.0,
        dataCadastro: new Date().toISOString(),
        observacao: "Produto original"
    }),
    new Produto({
        id:2,
        nome:"Camisa do Barcelona",
        quantidadeEstoque: 50,
        valor: 280.0,
        dataCadastro: new Date().toISOString(),
        observacao: "Produto original"
    })
];

function listaTabela(){

}

function obterTodos(){
    return listaDeProdutos;
}

function obterPorId(id){
    return listaDeProdutos.find(p => p.id == id);
}

function cadastrar(obj){
    var produto = new Produto(obj);
    idAtual++;
    produto.id = idAtual;
    listaDeProdutos.push(produto);

    return produto;
}

function atualizar(produto){
    var indice = listaDeProdutos.findIndex(p => p.id == produto.id);
    
    if(indice < 0){
        return;
    }

    listaDeProdutos.splice(indice, 1, produto);
    return produto;
}

function deletar(id){
    var indice = listaDeProdutos.findIndex(p => p.id == id);
    if(indice < 0){
        return;
    }

    // Deleta de dentro do array a posicição especifica
    listaDeProdutos.splice(indice, 1);
}

