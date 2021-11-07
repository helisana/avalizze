
function setProdutos() { //armazena
  if (!localStorage.getItem("produtos")) {
    let produtos = [
      {
        nome: "Vestido Folhado Simples",
        preco: "R$ 119,90",
        foto: "resources/img/vestido-azul.webp",
      },
      {
        nome: "Camisa Jeans Essential",
        preco: "R$ 189,90",
        foto: "resources/img/camisa.webp",
      },
      {
        nome: "Shorts Sarja Essential",
        preco: "R$ 119,90",
        foto: "resources/img/shorts.webp",
      },
      {
        nome: "Vestido Branco Lasie",
        preco: "R$ 289,90",
        foto: "resources/img/vestido-branco.webp",
      },
      {
        nome: "Vestido Preto Cortes",
        preco: "R$ 299,90",
        foto: "resources/img/vestido-preto.webp",
      },
      {
        nome: "Saia Ruffle Leopardo",
        preco: "R$ 99,90",
        foto: "resources/img/saia.webp",
      },
      {
        nome: "Blazer Borgonha",
        preco: "R$ 359,90",
        foto: "resources/img/blazer.webp",
      },
      {
        nome: "Calça Verona Branca",
        preco: "R$ 249,90",
        foto: "resources/img/calca.webp",
      },
      {
        nome: "Saia Boho",
        preco: "R$ 89,90",
        foto: "resources/img/saia2.webp",
      },
      {
        nome: "Conjunto Valeska",
        preco: "R$ 239,90",
        foto: "resources/img/conjunto.webp",
      },
      {
        nome: "Vestido Tianna",
        preco: "R$ 149,90",
        foto: "resources/img/vestido-marrom.webp",
      },
      {
        nome: "Pantalona Borgonha",
        preco: "R$ 89,90",
        foto: "resources/img/pantalona.webp",
      },
      {
        nome: "Calça Xadrez Selenna",
        preco: "R$ 239,90",
        foto: "resources/img/calca2.webp",
      },
      {
        nome: "Camisa Malline Branca",
        preco: "R$ 249,90",
        foto: "resources/img/camisa2.webp",
      },
      {
        nome: "Sueter Rochedo",
        preco: "R$ 129,90",
        foto: "resources/img/blusa2.webp",
      },
    ]  

    let json = JSON.stringify(produtos);

    localStorage.setItem("produtos", json);
  }
}

function getProdutos() {
  let json = localStorage.getItem("produtos");

  let produtos = JSON.parse(json);

  return produtos;
}


function addProduto(produto) {
   let div = document.createElement("div");
   div.classList.add("produto");

   let img = document.createElement("img");
   img.classList.add("produto__img");
   img.src = produto.foto;

   let h2 = document.createElement("h2");
   h2.classList.add("produto__titulo");
   h2.innerHTML = produto.nome;

   let p = document.createElement("p");
   p.classList.add("produto__valor");
   p.innerHTML = produto.preco;

   let button = document.createElement("button");
   button.classList.add("btn-2");
   button.innerHTML = "Comprar";

   div.appendChild(img);
   div.appendChild(h2);
   div.appendChild(p);
   div.appendChild(button);

   let produtos = document.querySelector(".produtos");
   produtos.appendChild(div);
}

function pagProdutos() {
  setProdutos();
  let produtos = getProdutos();
  
  for (let i = 0; i < produtos.length; i++) {
    let produto = produtos[i];
    addProduto(produto);
  }
}

document.addEventListener('DOMContentLoaded', pagProdutos);