function pesquisar() {
    // Seleciona o elemento HTML com o ID "resultados-pesquisa"
    // Este elemento será usado para exibir os resultados da pesquisa
    let section = document.getElementById("resultados-pesquisa");
  
    // Inicializa uma string vazia para armazenar o HTML dos resultados
    let resultados = "";
  
    // Itera sobre cada elemento (atleta) do array "dados"
    for (let dado of dados) {
      // Constrói o HTML para cada item da lista de resultados
      resultados += `
        <div class="item-resultado">
          <h2>
            <a href="${dado.link}" target="_blank">
              ${dado.titulo}
            </a>
          </h2>
          <p class="descricao-meta">
            ${dado.descricao}
          </p>
        </div>
      `;
    }
  
    // Atribui o HTML gerado ao elemento "resultados-pesquisa"
    // Substitui o conteúdo atual do elemento
    section.innerHTML = resultados;
  }

  //Os comentários foram gerados apartir de uma consulta pelo Gemini.




