function pesquisar() {

     // Seleciona o elemento HTML onde os resultados serão exibidos.
    let section = document.getElementById("resultados-pesquisa");

     // Obtém o valor do campo de pesquisa e o converte para minúsculas para facilitar a comparação.
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // Verifica se o campo de pesquisa está vazio.
    if (!campoPesquisa){
      // Se estiver vazio, exibe uma mensagem indicando que a busca está vazia.
      section.innerHTML = "<p>Busca vazia</p>"
      // Interrompe a função.
      return
    }
    
    campoPesquisa = campoPesquisa.toLowerCase();
    // Inicializa variáveis para armazenar os resultados, o título, a descrição e as tags do atleta.
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags ="";
  
    // Itera sobre cada atleta no array de dados.
    for (let dado of dados) {

      // Converte o título, a descrição e as tags para minúsculas para facilitar a comparação com o termo de pesquisa.
      titulo = dado.titulo.toLowerCase();
      descricao = dado.descricao.toLocaleLowerCase();
      tags = dado.tags.toLocaleLowerCase();

      
      // Verifica se o termo de pesquisa está contido no título, descrição ou tags do atleta.
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa) ){
        // Se o atleta corresponder à pesquisa, adiciona seu HTML à variável "resultados".
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
    }

    // Verifica se foram encontrados resultados.
    if(!resultados){
      // Se não houver resultados, exibe uma mensagem indicando que nenhum atleta foi encontrado.
      section.innerHTML = "<p>Nenhum atleta foi encontrado</p>"
      return
    }
  
    // Se houver resultados, atualiza o conteúdo do elemento "resultados-pesquisa" com os resultados encontrados.
    section.innerHTML = resultados;
  }

  //Os comentários foram gerados apartir de uma consulta pelo Gemini.




