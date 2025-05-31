const produtos = [
    {
      id: 1,
      titulo: "A Menina que Roubava Livros",
      preco: 39.90,
      descricao: "Na Alemanha nazista, durante a Segunda Guerra Mundial, a jovem Liesel Meminger encontra consolo nos livros que rouba e compartilha com os outros — inclusive com um judeu escondido no porão de sua casa adotiva. Narrada pela própria Morte, a história mostra como as palavras e a literatura se tornam um refúgio em meio ao horror e à perda. É uma narrativa tocante sobre amor, amizade e o poder transformador das histórias.",
      imagem: "https://m.media-amazon.com/images/I/81eB+7+CkUL.jpg",
      conteudo: "História da Segunda Guerra."
    },
    {
      id: 2,
      titulo: "Dom Casmurro",
      preco: 29.90,
      descricao: "Dom Casmurro é um romance narrado por Bentinho, um homem amargurado que decide escrever sua própria história para atar as duas pontas da vida. Ele relembra sua juventude no Rio de Janeiro do século XIX, quando se apaixonou por Capitu, sua vizinha e amiga de infância. Apesar da promessa feita por sua mãe de que ele seria padre, Bentinho consegue deixar o seminário e se casar com Capitu.",
      imagem: "https://m.media-amazon.com/images/I/71HMyqG6MRL.jpg",
      conteudo: "Clássico brasileiro que trata de ciúme, dúvida e traição."
    },
    {
      id: 3,
      titulo: "O Pequeno Príncipe",
      preco: 24.90,
      descricao: "Um piloto cai com seu avião no deserto do Saara e lá encontra um menino misterioso vindo de outro planeta: o Pequeno Príncipe. Enquanto consertam o avião, o menino conta ao piloto sobre sua vida em um pequeno asteroide, seus amores e saudades, especialmente da rosa que deixou para trás. Em sua viagem por vários planetas, o príncipe conhece adultos que vivem de forma estranha e sem sentido, até chegar à Terra, onde descobre o valor da amizade, do amor e das coisas invisíveis aos olhos.",
      imagem: "https://www.bing.com/th?id=OPHS.0E8xv37KrdVvow474C474&o=5&pid=21.1&w=148&h=223&qlt=100&dpr=1&bw=6&bc=FFFFFF",
      conteudo: "Uma fábula sobre amor, amizade e o essencial invisível aos olhos."
    },
    {
      id: 4,
      titulo: "1984",
      preco: 34.90,
      descricao: "Um romance distópico de George Orwell sobre vigilância e opressãoEm um futuro distópico, o mundo é dominado por governos totalitários que controlam todos os aspectos da vida. Na superpotência Oceânia, o Grande Irmão observa tudo, e até os pensamentos são vigiados. Winston Smith, um funcionário do governo, começa a questionar o sistema opressor e busca liberdade em um mundo onde a verdade é manipulada e o amor é proibido. Mas em uma sociedade onde até a realidade pode ser reescrita, a rebeldia tem um preço.",
      imagem: "https://m.media-amazon.com/images/I/71kxa1-0mfL.jpg",
      conteudo: "Um romance distópico de George Orwell sobre vigilância e opressão."
    },
    {
      id: 5,
      titulo: "O menino do pijama listrado",
      preco: 42.90,
      descricao: " O menino do pijama listrado  foi publicado em mais de vinte países e teve mais de 6 milhões de cópias vendidas em todo o mundo.Bruno tem nove anos e não sabe nada sobre o Holocausto e a Solução Final contra os judeus. Também não faz idéia que seu país está em guerra com boa parte da Europa, e muito menos que sua família está envolvida no conflito. Na verdade, Bruno sabe apenas que foi obrigado a abandonar a espaçosa casa em que vivia em Berlim e a mudar-se para uma região desolada, onde ele não tem ninguém para brincar nem nada para fazer. Da janela do quarto, Bruno pode ver uma cerca, e para além dela centenas de pessoas de pijama, que sempre o deixam com frio na barriga.",
      imagem: "https://m.media-amazon.com/images/I/91YD+gCjjyL._SY385_.jpg",
      conteudo: "Fábula de uma guerra."
    },
    {
      id: 6,
      titulo: "O Menino Maluquinho",
      preco: 28.90,
      descricao: "Clássico de Machado de Assis sobre cO Menino Maluquinho conta a história de um garoto cheio de imaginação, alegria e traquinagens. Usando uma panela na cabeça como chapéu, ele vive mil aventuras com os amigos, brinca, sonha e enche a vida de quem está à sua volta com risadas e confusão. Por trás das travessuras, o livro mostra com sensibilidade o crescimento, os sentimentos e a descoberta da vida — com muito afeto e poesia.",
      imagem: "https://www.bing.com/th?id=OPHS.tSi%2bDbd0%2fhebxQ474C474&o=5&pid=21.1&w=160&h=237&qlt=100&dpr=1&c=8&pcl=f5f5f5",
      conteudo: "Um garoto com um grande imaginação."
    },
    {
      id: 7,
      titulo: "Orgulho e Preconceito",
      preco: 30.00,
      descricao: "Uma fábula sobre amor, amizade e o essencial na Inglaterra do século XIX, Orgulho e Preconceito gira em torno de Elizabeth Bennet, uma jovem inteligente e espirituosa, e seu embate com o orgulhoso e reservado Sr. Darcy. Entre bailes, convenções sociais e conflitos familiares, os dois protagonizam uma história marcada por mal-entendidos, julgamentos apressados e sentimentos à flor da pele. Ao longo da trama, ambos aprendem a superar o orgulho e os preconceitos para enxergar o amor com mais clareza.isível aos olhos.",
      imagem: "https://m.media-amazon.com/images/I/81OthjkJBuL.jpg",
      conteudo: "Um jogo de amor e falsas aparências, intriga e discordia"
    },
    {
      id: 8,
      titulo: "It a Coisa",
      preco: 54.90,
      descricao: "Derry, uma pequena cidade do Maine, é assombrada por uma entidade maligna que desperta a cada 27 anos, assumindo formas aterrorizantes, principalmente a de um palhaço. Um grupo de crianças enfrenta esse mal e, décadas depois, já adultos, são obrigados a retornar para encerrar o que começaram. It, é uma obra densa que mistura terror psicológico, amizade e traumas de infância, com o estilo visceral e cativante de Stephen King.",
      imagem: "https://th.bing.com/th/id/OSK.b07e483e6f6056257bd88aad2776ca55?w=102&h=102&c=7&o=6&pid=SANGAM",
      conteudo: "Uma história de um palhaço assustador."
    },
    {
      id: 9,
      titulo: "A Revolução dos Bichos",
      preco: 24.90,
      descricao: "Nesta fábula política, os animais de uma fazenda se rebelam contra os humanos e criam seu próprio sistema de governo, prometendo igualdade. No entanto, com o tempo, a liderança dos porcos revela uma tirania tão cruel quanto a anterior. Orwell usa a metáfora para criticar os regimes totalitários e mostrar como o poder corrompe. Uma leitura rápida, mas de enorme profundidade e impacto.",
      imagem: "https://www.bing.com/th?id=OPHS.pKBn0Y%2fhjihVpA474C474&o=5&pid=21.1&w=160&h=235&qlt=100&dpr=1&c=8&pcl=f5f5f5",
      conteudo: "A revolta dos animais com os humanos."
    },
    {
      id: 10,
      titulo: "Harry Potter",
      preco: 39.90,
      descricao: "Harry Potter é um garoto órfão que descobre, aos 11 anos, que é um bruxo. Convidado a estudar na Escola de Magia e Bruxaria de Hogwarts, ele embarca em uma jornada cheia de aventuras, amizades e perigos. Ao lado de seus inseparáveis amigos Rony e Hermione, Harry enfrenta criaturas mágicas, desafios misteriosos e, acima de tudo, o poderoso bruxo das trevas Lord Voldemort, que ameaça o mundo mágico e tem uma ligação profunda com seu passado.",
      imagem: "https://www.bing.com/th?id=OPHS.w7I00dyTLSzf9g474C474&o=5&pid=21.1&w=148&h=198&qlt=100&dpr=1&bw=6&bc=FFFFFF",
      conteudo: "As aventuras de um menino bruxo junto com os seus amigos."
    },
    {
      id: 11,
      titulo: "Diário de um Banana",
      preco: 24.90,
      descricao: "Diário de um Banana é a história de Greg Heffley, um pré-adolescente que enfrenta os desafios da escola, da família e da vida cotidiana de uma forma hilária e um pouco atrapalhada. Greg narra sua rotina em um diário, cheio de situações embaraçosas, mal-entendidos e a eterna luta para se tornar popular. Com seu melhor amigo Rowley, que é um tanto ingênuo, Greg vive aventuras engraçadas e, muitas vezes, frustrantes, enquanto tenta lidar com a escola, os pais e os irmãos.",
      imagem: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSmkD_wq7QG4fxoW_KHhvdLQMfUHc6hTVzlIjbuh-s_qhI_16-PyWVdT9q4mbkAo5DE1hfSnHOFI-chtV4hYFcoubsqq1asLqC_j1IYe1A&usqp=CAc",
      conteudo: "O cotidiano de um garoto pré-adolescente."
    },
    {
      id: 12,
      titulo: "As Crônicas de Nárnia",
      preco: 59.90,
      descricao: "narra as aventuras de vários personagens em um mundo mágico e fascinante chamado Nárnia, onde animais falam, criaturas mitológicas habitam florestas e castelos, e grandes batalhas entre o bem e o mal acontecem. Cada livro da série foca em diferentes protagonistas, mas todos se conectam com o mundo de Nárnia, que é governado por Aslan, o leão majestoso que simboliza a força do bem.",
      imagem: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQE4T_MOqrI3Mi4HrHsJPsQkJOBvQrtx1n8P5BQYgHGdoTyu6H5xmimTSK3ZLg2JpwuH3QTYX6qkOpGnvFLAhs_ap9HZRAhHBErPK-C7A&usqp=CAc",
      conteudo: "As aventuras dos personagens em no mundo mágico de Nárnia"
    }
  ];
  
  let carrinho = [];
   let favoritos = JSON.parse(localStorage.getItem('livrosFavoritos')) || [];
  
  function renderizarProdutos() {
    const container = document.getElementById("produtos");
    container.innerHTML = "";
  
    produtos.forEach(produto => {
      const favoritado = favoritos.some(fav => fav.id === produto.id);
      const heartClass = favoritado ? "heart-filled" : "heart-empty";

      const card = document.createElement("div");
      card.className = "card-produto";
  
      card.innerHTML = `
  <img src="${produto.imagem}" alt="${produto.titulo}">
  <div class="card-info">
    <div class="titulo-favorito">
      <h2>${produto.titulo}</h2>
    </div>
    <p>${produto.conteudo}</p>
    <div class="preco-favorito">
      <div class="preco">R$ ${produto.preco.toFixed(2)}</div>
      <button class="btn-favorito ${heartClass}" onclick="toggleFavorito(${produto.id})">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="${favoritado ? 'red' : 'none'}" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="heart-icon">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      </button>
    </div>
    <button class="btn-saiba-mais" onclick="mostrarMais('${produto.titulo}', \`${produto.descricao}\`)">Saiba Mais</button>
    <button class="btn-adicionar" onclick="adicionarAoCarrinho(${produto.id})">Adicionar ao Carrinho</button>
    <div class="mt-3">
      <span><strong>Compartilhar:</strong></span>
      <a href="#" class="btn btn-sm btn-outline-primary me-1" onclick="compartilharLivro('facebook', this)">
        <i class="bi bi-facebook"></i> Facebook
      </a>
      <a href="#" class="btn btn-sm btn-outline-success me-1" onclick="compartilharLivro('whatsapp', this)">
        <i class="bi bi-whatsapp"></i> WhatsApp
      </a>
      <a href="#" class="btn btn-sm btn-outline-info me-1" onclick="compartilharLivro('twitter', this)">
        <i class="bi bi-twitter"></i> Twitter
      </a>
    </div>
  </div>
`;
  
      container.appendChild(card);
    });
  }

    function toggleFavorito(id) {
    const produto = produtos.find(p => p.id === id);
    if (!produto) return;
    
    const index = favoritos.findIndex(fav => fav.id === id);
    
    if (index === -1) {
      favoritos.push(produto);
      mostrarMensagem(`"${produto.titulo}" foi adicionado aos favoritos!`, 'success');
    } else {
      favoritos.splice(index, 1);
      mostrarMensagem(`"${produto.titulo}" foi removido dos favoritos.`, 'info');
    }
    
    localStorage.setItem('livrosFavoritos', JSON.stringify(favoritos));
    renderizarProdutos();
  }
  
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

  
  
function adicionarAoCarrinho(id) {
  const produto = produtos.find(p => p.id === id);
  if (!produto) return;

  // Pega o carrinho do localStorage
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

  // Verifica se o produto já está no carrinho
  const existente = carrinho.find(item => item.id === produto.id);

  if (existente) {
    existente.quantidade += 1;
  } else {
    carrinho.push({ ...produto, quantidade: 1 });
  }

  // Salva de volta
  localStorage.setItem("carrinho", JSON.stringify(carrinho));

  // Atualiza contador e mostra mensagem
  atualizarCarrinho();
  mostrarMensagem(`"${produto.titulo}" foi adicionado ao carrinho.`, 'success');
}
  
 function atualizarCarrinho() {
  const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  document.getElementById("contador").textContent = carrinho.reduce((acc, item) => acc + item.quantidade, 0);
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
  
    const sugestoes = produtos.filter(p => !carrinho.includes(p)).slice(0, 5);
    const sugestoesHtml = sugestoes.map(p => `
      <div id = "cardS">
        <img src="${p.imagem}" alt="${p.titulo}" id="imgS">
        <strong style="font-size: 12px;">${p.titulo}</strong><br>
        <span style="font-size: 12px;">R$ ${p.preco.toFixed(2)}</span><br>
        <button id = "adicionar" onclick="adicionarAoCarrinho(${p.id})">Adicionar</button>
      </div>
    `).join("");
  
  
  
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

  function compartilharLivro(rede, botao) {
  const card = botao.closest('.card-produto');
  const titulo = card.querySelector('h2').innerText;
  const descricao = card.querySelector('p').innerText;
  const url = window.location.href.split('#')[0];

  let link = '';
  switch (rede) {
    case 'facebook':
      link = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(titulo)}`;
      break;
    case 'whatsapp':
      link = `https://api.whatsapp.com/send?text=${encodeURIComponent(titulo + ' - ' + url)}`;
      break;
    case 'twitter':
      link = `https://twitter.com/intent/tweet?text=${encodeURIComponent(titulo)}&url=${encodeURIComponent(url)}`;
      break;
  }

  window.open(link, '_blank');
}

function toggleChat() {
    const chat = document.getElementById("chatbot");
    chat.style.display = (chat.style.display === "none" || chat.style.display === "") ? "flex" : "none";
  }

  function enviarMensagem() {
    const input = document.getElementById("chat-input");
    const texto = input.value.trim();
    if (!texto) return;

    adicionarMensagem("Você", texto, "text-end text-primary");
    input.value = "";
    setTimeout(() => responder(texto.toLowerCase()), 600);
  }

  function adicionarMensagem(remetente, texto, classe = "") {
    const corpo = document.getElementById("chat-mensagens");
    const msg = document.createElement("div");
    msg.className = `mb-2 ${classe}`;
    msg.innerHTML = `<strong>${remetente}:</strong> <div>${texto}</div>`;
    corpo.appendChild(msg);
    corpo.scrollTop = corpo.scrollHeight;
  }

  function responder(pergunta) {
    let resposta = "Desculpe, não entendi. Pode reformular sua pergunta?";

    if (pergunta.includes("livro") || pergunta.includes("busco")) {
      resposta = "Você pode procurar livros na aba 'Livros' ou usar a busca no topo da página.";
    } else if (pergunta.includes("frete")) {
      resposta = "O frete é calculado automaticamente no carrinho ao informar seu CEP.";
    } else if (pergunta.includes("pagamento") || pergunta.includes("pix")) {
      resposta = "Aceitamos Pix, cartão de crédito e boleto bancário.";
    } else if (pergunta.includes("contato") || pergunta.includes("falar")) {
      resposta = "Você pode nos contatar pelo WhatsApp: <a href='https://wa.me/5511912345678' target='_blank' class='text-decoration-underline'>clique aqui</a>.";
    } else if (pergunta.includes("ebook") || pergunta.includes("digital")) {
      resposta = "Temos ebooks disponíveis na seção 'Ebooks' no menu principal.";
    }

    adicionarMensagem("ReLivro", resposta, "text-start text-secondary");
  }
  
  // Adicione ou modifique a função comprar() assim:
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
  
    // Limpa o carrinho da memória atual
    carrinho = [];
    atualizarCarrinho();
    fecharCarrinho();

    // Redireciona para a página de pagamento
  window.location.href = "metodosdepagamento.html";
}
  
  
  renderizarProdutos();
  
  