const resenhas = [
  {
    titulo: "Torto Arado",
    autor: "Itamar Vieira Junior",
    genero: "Ficção",
    nota: 5,
    comentario: "Uma história forte e comovente sobre o sertão e suas raízes.",
    imagem: "IMG/tortoarado.webp"
  },
  {
    titulo: "Pequeno Manual Antirracista",
    autor: "Djamila Ribeiro",
    genero: "Não-ficção",
    nota: 4,
    comentario: "Reflexivo e necessário, com linguagem acessível.",
    imagem: "IMG/antirracista.jpg"
  },
  {
    titulo: "1984",
    autor: "George Orwell",
    genero: "Distopia",
    nota: 5,
    comentario: "Uma leitura essencial sobre liberdade e vigilância.",
    imagem: "IMG/1984.png"
  }
];

function renderResenhas() {
  const container = document.getElementById('resenhasContainer');
  container.innerHTML = "";

  const filtroGenero = document.getElementById("filtroGenero").value;
  const filtroNota = parseInt(document.getElementById("filtroNota").value) || 0;

  const filtradas = resenhas.filter(resenha => {
    return (
      (filtroGenero === "" || resenha.genero === filtroGenero) &&
      (filtroNota === 0 || resenha.nota >= filtroNota)
    );
  });

  if (filtradas.length === 0) {
    container.innerHTML = "<p class='text-muted'>Nenhuma resenha encontrada com esses filtros.</p>";
    return;
  }

  filtradas.forEach((resenha) => {
    const col = document.createElement("div");
    col.className = "col-md-4 mb-4";

    col.innerHTML = `
      <div class="card h-100 shadow-sm">
        <div class="row g-0">
          <div class="col-4">
            <img src="${resenha.imagem}" class="img-fluid rounded-start h-100 object-fit-cover" alt="Capa do livro">
          </div>
          <div class="col-8">
            <div class="card-body">
              <h5 class="card-title">${resenha.titulo}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${resenha.autor}</h6>
              <p><strong>Gênero:</strong> ${resenha.genero}</p>
              <p>${resenha.comentario}</p>
              <p class="text-warning">${"★".repeat(resenha.nota)}${"☆".repeat(5 - resenha.nota)}</p>
            </div>
          </div>
        </div>
      </div>
    `;
    container.appendChild(col);
  });
}

function limparFiltros() {
  document.getElementById("filtroGenero").value = "";
  document.getElementById("filtroNota").value = "";
  renderResenhas();
}

document.getElementById("filtroGenero").addEventListener("change", renderResenhas);
document.getElementById("filtroNota").addEventListener("change", renderResenhas);

document.getElementById("formResenha").addEventListener("submit", function (e) {
  e.preventDefault();

  const novaResenha = {
    titulo: document.getElementById("titulo").value,
    autor: document.getElementById("autor").value,
    genero: document.getElementById("genero").value,
    nota: parseInt(document.getElementById("nota").value),
    comentario: document.getElementById("comentario").value,
    imagem: document.getElementById("imagem").value || "https://via.placeholder.com/150"
  };

  resenhas.unshift(novaResenha);
  this.reset();
  renderResenhas();
});

window.onload = renderResenhas;
