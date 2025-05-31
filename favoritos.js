
let favoritos = JSON.parse(localStorage.getItem('livrosFavoritos')) || [];
let carrinho = [];


function renderizarFavoritos() {
  const container = document.getElementById("favoritos-grid");
  const emptyMessage = document.getElementById("empty-message");
  
  
  container.innerHTML = "";
  
 
  if (favoritos.length === 0) {
    emptyMessage.innerHTML = `
      <div class="empty-message">
        <h2>Você ainda não tem livros favoritos</h2>
        <p>Explore nossa seleção de livros e clique no ícone de coração para adicionar aos seus favoritos.</p>
        <a href="livro.html" class="btn-voltar">Explorar Livros</a>
      </div>
    `;
    return;
  }
  
  
  favoritos.forEach(livro => {
    const card = document.createElement("div");
    card.className = "card-produto";
    
    card.innerHTML = `
      <img src="${livro.imagem}" alt="${livro.titulo}">
      <div class="card-info">
        <div class="titulo-favorito">
          <h2>${livro.titulo}</h2>
          <button class="btn-favorito heart-filled" onclick="removerFavorito(${livro.id})">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="red" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="heart-icon">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
        </div>
        <p>${livro.conteudo}</p>
        <div class="preco">R$ ${livro.preco.toFixed(2)}</div>
        <button class="btn-saiba-mais" onclick="mostrarMais('${livro.titulo}', \`${livro.descricao}\`)">Saiba Mais</button>
        <button class="btn-adicionar" onclick="adicionarAoCarrinho(${livro.id})">Adicionar ao Carrinho</button>
      </div>
    `;
    
    container.appendChild(card);
  });
}


function removerFavorito(id) {
  const index = favoritos.findIndex(livro => livro.id === id);
  const livroRemovido = favoritos[index];
  
  if (index !== -1) {
    favoritos.splice(index, 1);
    localStorage.setItem('livrosFavoritos', JSON.stringify(favoritos));
    mostrarMensagem(`"${livroRemovido.titulo}" foi removido dos favoritos.`, 'info');
    renderizarFavoritos();
  }
}


function mostrarMais(titulo, descricao) {
  const modal = document.createElement("div");
  modal.className = "fundo-modal";
  modal.id = "modal";
  modal.innerHTML = `
    <div class="conteudo-modal">
      <h2>${titulo}</h2>
      <p>${descricao}</p>
      <br><br>
      <center><button id="fechar" onclick="fecharModal()">Fechar</button></center>
    </div>
  `;
  document.body.appendChild(modal);
}

function fecharModal() {
  const modal = document.getElementById("modal");
  if (modal) {
    modal.remove();
  }
}

function adicionarAoCarrinho(id) {
  const livro = favoritos.find(p => p.id === id);
  if (!livro) return;

  // Carrega carrinho atual do localStorage
  let carrinhoLocal = JSON.parse(localStorage.getItem("carrinho")) || [];

  // Verifica se já existe o livro no carrinho
  const existente = carrinhoLocal.find(item => item.id === livro.id);
  if (existente) {
    mostrarMensagem(`"${livro.titulo}" já está no carrinho.`, 'info');
    return;
  }

  // Adiciona o novo livro ao carrinho
  carrinhoLocal.push({ ...livro, quantidade: 1 });

  // Salva novamente no localStorage
  localStorage.setItem("carrinho", JSON.stringify(carrinhoLocal));

  atualizarCarrinho();
  mostrarMensagem(`"${livro.titulo}" foi adicionado ao carrinho.`, 'success');

  function mostrarMensagem(texto, tipo) {
  const mensagemExistente = document.querySelector('.mensagem');
  if (mensagemExistente) {
    mensagemExistente.remove();
  }

  const mensagem = document.createElement('div');
  mensagem.textContent = texto;
  mensagem.className = `mensagem ${tipo}`;
  document.body.appendChild(mensagem);

  setTimeout(() => {
    mensagem.remove();
  }, 3000);
}
}

function atualizarCarrinho() {
  
  document.getElementById("contador").textContent = carrinho.length;
}

function mostrarCarrinho() {
  const modalExistente = document.getElementById("carrinho-modal");
  if (modalExistente) modalExistente.remove();

  const modal = document.createElement("div");
  modal.className = "fundo-modal";
  modal.id = "carrinho-modal";

  const listaProdutos = carrinho.map((p, index) => `
    <li id="paginaCarrinho" style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
      <img src="${p.imagem}" alt="${p.titulo}" id="imgCarrinho" style="width: 50px; height: 75px;">
      <span class="preco">${p.titulo} - R$ ${p.preco.toFixed(2)}</span>
      <button id="remover" onclick="removerDoCarrinho(${index})">X</button>
    </li>
  `).join("");

  const sugestoes = favoritos.filter(p => !carrinho.includes(p)).slice(0, 3);
  const sugestoesHtml = sugestoes.map(p => `
    <div id="cardS">
      <img src="${p.imagem}" alt="${p.titulo}" id="imgS">
      <strong style="font-size: 12px;">${p.titulo}</strong><br>
      <span style="font-size: 12px;">R$ ${p.preco.toFixed(2)}</span><br>
      <button id="adicionar" onclick="adicionarAoCarrinho(${p.id})">Adicionar</button>
    </div>
  `).join("");

  modal.innerHTML = `
  <div class="conteudo-carrinho">
    <h2>Carrinho de Compras</h2>
    <div style="max-height: 300px; overflow-y: auto; margin-bottom: 10px;">
      <ul style="list-style: none; padding: 0;">${listaProdutos}</ul>
    </div>
    <div id="finalCarrinho">
      <p><strong>Total:</strong> R$ ${carrinho.reduce((acc, p) => acc + p.preco, 0).toFixed(2)}</p>
      <br>
    </div>
    <div id="sugestoes" style="margin-top: 20px;">
      <button id="fechar" onclick="fecharCarrinho()">Fechar</button>
      <button id="comprar" onclick="comprar()">Comprar</button>
      <h3>Você também pode gostar de:</h3>
      <div style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;">
        ${sugestoesHtml}
      </div>
    </div>
  </div>
`;

  document.body.appendChild(modal);
}

function removerDoCarrinho(index) {
  carrinho.splice(index, 1);
  atualizarCarrinho();
  mostrarCarrinho();
}

function fecharCarrinho() {
  const modal = document.getElementById("carrinho-modal");
  if (modal) {
    modal.remove();
  }
}

function comprar() {
  const dadosCompra = {
    itens: carrinho.map(item => ({
      titulo: item.titulo,
      preco: item.preco,
      imagem: item.imagem
    })),
    total: carrinho.reduce((acc, item) => acc + item.preco, 0).toFixed(2)
  };

  localStorage.setItem("dadosCompra", JSON.stringify(dadosCompra));
  
  
  carrinho = [];
  atualizarCarrinho();
  fecharCarrinho();

  
  window.location.href = "metodosdepagamento.html";
}

function mostrarMensagem(texto, tipo) {
  const mensagem = document.getElementById("mensagem");
  mensagem.textContent = texto;
  mensagem.className = tipo;
  mensagem.style.display = "block";
  
  setTimeout(() => {
    mensagem.style.display = "none";
  }, 3000);
}





renderizarFavoritos();