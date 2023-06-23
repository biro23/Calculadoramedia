const form = document.getElementById("form-atividade");

const imgAprovado = '<img src="./images/.aprovado.png alt="Emoji happy" />';
const imgReprovado = '<img src="./images/.reprovado.png alt="Emoji unhappy" />';

let linhas = "";
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const inputNomeAtividade = document.getElementById("nome-atividade");
  const inputNotaAtividade = document.getElementById("nota-atividade");

  let linha = "<tr>";
  linha += `<td>${inputNomeAtividade.value}</td>`;
  linha += `<td>${inputNotaAtividade.value}</td>`;
  linha += `<td>${
    inputNotaAtividade.value >= 7 ? imgAprovado : imgReprovado
  }</td/>`;
  linha += "</tr>";

  linhas += linha;

  const corpotabela = document.querySelector("tbody");
  corpotabela.innerHTML = linhas;

  inputNomeAtividade.value = "";
  inputNotaAtividade.value = "";

  /* limpar o campo de atividade*/
});

/* linha += concatenacao    */
