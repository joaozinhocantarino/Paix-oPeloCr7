
document.getElementById('cadastroForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const senha = document.getElementById('senha').value;
    const confirmSenha = document.getElementById('confirmSenha').value;

    if (senha !== confirmSenha) {
        alert('As senhas não correspondem!');
        return;
    }

    // Recupera os usuários já salvos no localStorage ou inicializa uma lista vazia
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Adiciona o novo usuário
    users.push({ nome, senha });

    // Salva a lista atualizada no localStorage
    localStorage.setItem('users', JSON.stringify(users));

    // Redireciona para o index.html
    window.location.href = 'index.html';
});