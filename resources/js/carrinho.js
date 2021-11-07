
function getProdutosCarrinho() {
  let json = localStorage.getItem("carrinho");

  let produtos = JSON.parse(json);

  return produtos;
}

function addProduto(produto) {
   let div = document.createElement("div");
   div.classList.add("carrinho__description");

   let img = document.createElement("img");
   img.classList.add("img__produto");
   img.src = produto.foto;

   let carrinhoProduto = document.createElement("div");
   carrinhoProduto.classList.add("carrinho__produto");

   let carrinhoProdutoDescription = document.createElement("p");
   carrinhoProdutoDescription.classList.add("carrinho__produto--description");
   carrinhoProdutoDescription.innerHTML = "Descrição do produto:";

   let carrinhoProdutoNome = document.createElement("p");
   carrinhoProdutoNome.classList.add("carrinho__produto--nome");
   carrinhoProdutoNome.innerHTML = produto.nome;

   let carrinhoProdutoValor = document.createElement("p");
   carrinhoProdutoValor.classList.add("carrinho__produto--valor");
   carrinhoProdutoValor.innerHTML = produto.preco;

   carrinhoProduto.appendChild(carrinhoProdutoDescription);
   carrinhoProduto.appendChild(carrinhoProdutoNome);
   carrinhoProduto.appendChild(carrinhoProdutoValor);

   let cancelarProduto = document.createElement('button');
   cancelarProduto.classList.add('cancelar__produto');
   cancelarProduto.innerHTML = '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark" class="svg-inline--fa fa-xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"></path></svg>';

   div.appendChild(img);
   div.appendChild(carrinhoProduto);
   div.appendChild(cancelarProduto);

   let produtos = document.querySelector(".carrinho__produtos");
   produtos.appendChild(div);
}

function carrinho() {
  let produtos = getProdutosCarrinho();
  
  for (let i = 0; i < produtos.length; i++) {
    let produto = produtos[i];
    addProduto(produto);
  }
}

document.addEventListener('DOMContentLoaded', carrinho);