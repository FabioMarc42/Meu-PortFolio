//Troca de tela
let tabs = document.querySelectorAll(".pricipal"),
  contents = document.querySelectorAll(".conteudo");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    contents.forEach((content) => {
      content.classList.remove("ativo");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("ativo");
    });
    contents[index].classList.add("ativo");

    tabs[index].classList.add("ativo");
  });
});

// Criando linha de comado para Painel digial

var type = new Typed(".typing-text", {
  strings: [
    "Design Gráfico para Web",
    "Desenvolvedor Sistema",
    "Marketing Digital",
  ],
  typeSpeed: 120,
  loop: true,
});
