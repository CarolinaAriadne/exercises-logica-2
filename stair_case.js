let tamanhoEscada = 6;

function imprimeEscada(tamanhoEscada) {
  let simbolo = "#";
  let entradaLinha = "";
  let entradaPosicao = tamanhoEscada - 1;
  for (let linha = 0; linha < tamanhoEscada; linha += 1) {
    for (let coluna = 0; coluna < tamanhoEscada; coluna += 1) {
      if (coluna < entradaPosicao) {
        entradaLinha += " ";
      } else {
        entradaLinha += simbolo;
      }
    }

    console.log(entradaLinha);
    entradaLinha = "";
    entradaPosicao -= 1;
  }
}

imprimeEscada(tamanhoEscada);
