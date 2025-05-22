document.addEventListener('DOMContentLoaded', () => {
    // Verifica se o usuário está logado
    if (localStorage.getItem('loggedIn') !== 'true') {
        window.location.href = 'index.html';
        return;
    }
    
    // Armazena o conteúdo original para remover destaques anteriores
    const contentEl = document.querySelector('.content');
    if(contentEl) {
        window.originalContentHTML = contentEl.innerHTML;
    }
    
    const searchForm = document.querySelector('.search-form');
    if(searchForm && contentEl){
        searchForm.addEventListener('submit', function(e){
            e.preventDefault();
            // Restaura o conteúdo original (remove marqueções anteriores)
            contentEl.innerHTML = window.originalContentHTML;
            
            const query = this.querySelector('input[name="query"]').value.trim();
            if(query === ''){
                return;
            }
            // Cria uma expressão regular ignorando maiúsculas e minúsculas
            const regex = new RegExp(`(${escapeRegExp(query)})`, 'gi');
            // Atualiza o conteúdo inserindo <mark> na parte que encontra
            contentEl.innerHTML = contentEl.innerHTML.replace(regex, '<mark>$1</mark>');
            
            // Se encontrar algum <mark>, rola suavemente até ele
            const markEl = contentEl.querySelector('mark');
            if(markEl){
                markEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    }
});

// Função para escapar caracteres especiais na string do termo pesquisado
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}