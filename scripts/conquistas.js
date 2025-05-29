document.addEventListener('DOMContentLoaded', () => {
  // Seleciona o formulário de busca e o elemento com o conteúdo pesquisável
  const searchForm = document.querySelector('.search-form');
  const contentEl = document.querySelector('.achievements-details p');
  
  // Guarda o conteúdo original para restaurar antes de cada nova busca
  const originalContent = contentEl.innerHTML;
  
  // Função para escapar caracteres especiais da query
  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
  
  // Processa a busca ao submeter o formulário
  searchForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Restaura o conteúdo original removendo marcações anteriores
    contentEl.innerHTML = originalContent;
    
    // Captura o termo digitado na barra de pesquisa
    const query = this.querySelector('input[name="query"]').value.trim();
    if (!query) return;
    
    // Cria a expressão regular para encontrar o termo (case-insensitivo)
    const regex = new RegExp('(' + escapeRegExp(query) + ')', 'gi');
    
    // Substitui as ocorrências pelo mesmo texto envolto em uma tag <mark>
    contentEl.innerHTML = contentEl.innerHTML.replace(regex, '<mark>$1</mark>');
    
    // Rola até a primeira ocorrência encontrada
    const firstFound = contentEl.querySelector('mark');
    if (firstFound) {
      firstFound.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });
});