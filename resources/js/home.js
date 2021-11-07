
function setProdutos() { //armazena
  if (!localStorage.getItem("produtos")) {
    let produtos = [
      {
        nome: "Vestido Folhado Simples",
        preco: "R$ 89,90",
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

   div.appendChild(img);
   div.appendChild(h2);
   div.appendChild(p);

   let produtos = document.querySelector(".produtos");
   produtos.appendChild(div);
}

function home() {
  setProdutos();
  let produtos = getProdutos();
  
  for (let i = 0; i < 3; i++) {
    let produto = produtos[i];
    addProduto(produto);
  }
}

document.addEventListener('DOMContentLoaded', home);