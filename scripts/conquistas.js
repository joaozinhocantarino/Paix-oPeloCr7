document.addEventListener('DOMContentLoaded', () => {
    // Se o referrer não for home.html nem galeria.html, redireciona para home.html
    if (!(document.referrer.includes('home.html') || document.referrer.includes('galeria.html'))) {
        window.location.replace('home.html');
    }
});