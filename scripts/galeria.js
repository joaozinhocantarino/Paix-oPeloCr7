document.addEventListener('DOMContentLoaded', () => {
    // Se o referrer não for home.html nem conquistas.html, redireciona a home.html
    if (!(document.referrer.includes('home.html') || document.referrer.includes('conquistas.html'))) {
        window.location.href = 'home.html';
    }
});