document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.querySelector('.search-form');
    // Seleciona a seção onde a busca será aplicada (ajuste o seletor se necessário)
    const achievementsSection = document.querySelector('.achievements-details');
    // Guarda o conteúdo original para restaurar antes de cada nova busca
    const originalContent = achievementsSection.innerHTML;

    if(searchForm){
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Restaura o conteúdo original removendo marcações anteriores
            achievementsSection.innerHTML = originalContent;
            
            const query = this.querySelector('input[name="query"]').value.trim();
            if(query === "") return;
            
            // Cria uma expressão regular para capturar de forma case-insensitive o termo buscado
            const regex = new RegExp('(' + escapeRegExp(query) + ')', 'gi');
            // Aplica a marcação com tag <mark> em todas as ocorrências do termo
            achievementsSection.innerHTML = achievementsSection.innerHTML.replace(regex, '<mark>$1</mark>');
            
            // Se pelo menos uma ocorrência foi marcada, rola até a primeira delas
            const markEl = achievementsSection.querySelector('mark');
            if(markEl) {
                markEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    }
});

// Função para escapar caracteres especiais na string pesquisada
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}