document.addEventListener('DOMContentLoaded', () => {
    // Verifica se o usuário está logado
    if (localStorage.getItem('loggedIn') !== 'true') {
        window.location.href = 'index.html';
        return;
    }
    // Exibição das informações do usuário removida
});