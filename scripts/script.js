if (localStorage.getItem('loggedIn') === 'true') {
    window.location.href = 'home.html';
}

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const senha = document.getElementById('senha').value;

    // Recupera a lista de usuários do localStorage ou inicializa um array vazio
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Verifica se existe um usuário com nome e senha correspondentes
    const userFound = users.find(user => user.nome === nome && user.senha === senha);

    if (userFound) {
        // Armazena o usuário logado
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('currentUser', JSON.stringify(userFound));
        // Redireciona para a página home
        window.location.href = 'home.html';
    } else {
        document.getElementById('error-message').textContent = 'Usuário ou senha incorretos!';
    }
});

document.getElementById('btnCadastro').addEventListener('click', function() {
    window.location.href = 'cadastro.html';
});