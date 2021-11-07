
function setProdutos() { //armazena
  if (!localStorage.getItem("produtos")) {
    let produtos = [
      {
        id: 1,
        nome: "Vestido Folhado Simples",
        preco: "R$ 119,90",
        foto: "resources/img/vestido-azul.webp",
      },
      {
        id: 2,
        nome: "Camisa Jeans Essential",
        preco: "R$ 189,90",
        foto: "resources/img/camisa.webp",
      },
      {
        id: 3,
        nome: "Shorts Sarja Essential",
        preco: "R$ 119,90",
        foto: "resources/img/shorts.webp",
      },
      {
        id: 4,
        nome: "Vestido Branco Lasie",
        preco: "R$ 289,90",
        foto: "resources/img/vestido-branco.webp",
      },
      {
        id: 5,
        nome: "Vestido Preto Cortes",
        preco: "R$ 299,90",
        foto: "resources/img/vestido-preto.webp",
      },
      {
        id: 6,
        nome: "Saia Ruffle Leopardo",
        preco: "R$ 99,90",
        foto: "resources/img/saia.webp",
      },
      {
        id: 7,
        nome: "Blazer Borgonha",
        preco: "R$ 359,90",
        foto: "resources/img/blazer.webp",
      },
      {
        id: 8,
        nome: "Calça Verona Branca",
        preco: "R$ 249,90",
        foto: "resources/img/calca.webp",
      },
      {
        id: 9,
        nome: "Saia Boho",
        preco: "R$ 89,90",
        foto: "resources/img/saia2.webp",
      },
      {
        id: 10,
        nome: "Conjunto Valeska",
        preco: "R$ 239,90",
        foto: "resources/img/conjunto.webp",
      },
      {
        id: 11,
        nome: "Vestido Tianna",
        preco: "R$ 149,90",
        foto: "resources/img/vestido-marrom.webp",
      },
      {
        id: 12,
        nome: "Pantalona Borgonha",
        preco: "R$ 89,90",
        foto: "resources/img/pantalona.webp",
      },
      {
        id: 13,
        nome: "Calça Xadrez Selenna",
        preco: "R$ 239,90",
        foto: "resources/img/calca2.webp",
      },
      {
        id: 14,
        nome: "Camisa Malline Branca",
        preco: "R$ 249,90",
        foto: "resources/img/camisa2.webp",
      },
      {
        id: 15,
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

function getProdutoBydId(id) {
  if (typeof id === 'string') {
    id = parseInt(id)
  }

  if (id) {
    const produtos = getProdutos()

    for (let i = 0; i < produtos.length; i++) {
      const produto = produtos[i]

      if (produto.id === id) return produto
    }
  }

  return null
}

function addProduto(produto) {
   let div = document.createElement("div");
   div.classList.add("produto");
   div.dataset.id = produto.id;

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

function getCarrinho() {
  let carrinho = localStorage.getItem('carrinho')

  if (carrinho) {
    carrinho = JSON.parse(carrinho)
    return carrinho
  } else {
    return []
  }
}

function setCarrinho(arr) {
  let json = JSON.stringify(arr)
  localStorage.setItem('carrinho', json)
}

function adicionarNoCarrinho(produto) {
  let carrinho = getCarrinho()
  carrinho.push(produto)
  setCarrinho(carrinho)
}

function clickComprar(event) {
  const target = event.currentTarget;
  const produto = target.parentNode;
  const id = produto.dataset.id;
  const produtoObj = getProdutoBydId(id)

  if (produtoObj) {
    adicionarNoCarrinho(produtoObj)
    alert('Produto adicionado no carrinho!')
  }
}

function pagProdutos() {
  setProdutos();
  let produtos = getProdutos();
  
  for (let i = 0; i < produtos.length; i++) {
    let produto = produtos[i];
    addProduto(produto);
  }

  let btnComprarList = document.querySelectorAll('.produto .btn-2');

  for (let i = 0; i < btnComprarList.length; i++) {
    const btnComprar = btnComprarList[i]

    btnComprar.addEventListener('click', clickComprar)
  }
}

document.addEventListener('DOMContentLoaded', pagProdutos);