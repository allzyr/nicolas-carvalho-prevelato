// Armazenar os dados
let dados = [];

// Gerar ID aleatório com 5 dígitos
function gerarld() {
    return Math.floor(10000 + Math.random() * 90000);
}

// Adicionar dados À tabela
document.getElementByld('form').addEventListener('submit', function(event){ 
    event.preventDefault();

    const descricao = document.getElementByld('descricao').value;
    const valor = parse
