let dados = [];
const maxValor = 6.0;
const escalaAltura = 50;

const container = document.getElementById("grafico");
const eixoY = document.getElementById("eixo-y");
const formulario = document.getElementById("formulario");
const limparBtn = document.getElementById("limpar");

// Desenha o eixo Y
function desenharEixoY() {
  eixoY.innerHTML = "";
  for (let i = maxValor; i >= 0; i--) {
    const div = document.createElement("div");
    div.textContent = i + "g";
    eixoY.appendChild(div);
  }
}

// Redesenha o gráfico com os dados atuais
function atualizarGrafico() {
  // Remove elementos antigos (menos o eixo)
  container.querySelectorAll(".barra-grupo").forEach(el => el.remove());

  dados.forEach((item) => {
    const grupo = document.createElement("div");
    grupo.className = "barra-grupo";

    const barras = document.createElement("div");
    barras.className = "barras";

    const barraMedido = document.createElement("div");
    barraMedido.className = "barra medido";
    barraMedido.style.height = (item.medido * escalaAltura) + "px";

    const barraPadrao = document.createElement("div");
    barraPadrao.className = "barra padrao";
    barraPadrao.style.height = (item.padrao * escalaAltura) + "px";

    barras.appendChild(barraMedido);
    barras.appendChild(barraPadrao);

    const label = document.createElement("div");
    label.className = "label";
    label.textContent = item.padrao.toFixed(2) + "g";

    grupo.appendChild(barras);
    grupo.appendChild(label);

    container.appendChild(grupo);
  });
}

// Evento de envio do formulário
formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  const padrao = parseFloat(formulario.padrao.value);
  const medido = parseFloat(formulario.medido.value);
  if (!isNaN(padrao) && !isNaN(medido)) {
    dados.push({ padrao, medido });
    atualizarGrafico();
    formulario.reset();
  }
});

// Evento para limpar o gráfico
limparBtn.addEventListener("click", () => {
  dados = [];
  atualizarGrafico();
});

desenharEixoY();