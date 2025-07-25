function scrollToGaleria() {
  const galeria = document.getElementById("galeria");
  galeria.scrollIntoView({ behavior: "smooth" });
}

const formulario = document.getElementById("formulario");
const mensagemSucesso = document.getElementById("mensagem-sucesso");

formulario.addEventListener("submit", function (e) {
  e.preventDefault();
  mensagemSucesso.textContent = "Mensagem enviada com sucesso!";
  mensagemSucesso.style.color = "#1e90ff";
  formulario.reset();
});
