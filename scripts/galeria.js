document.addEventListener('DOMContentLoaded', () => {
    // Verifica o referrer
    if (!(document.referrer.includes('home.html') || document.referrer.includes('conquistas.html'))) {
        window.location.href = 'home.html';
    }
    
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.getElementById('lightbox-close');
    const downloadBtn = document.getElementById('downloadBtn');
    
    document.querySelectorAll('.photo img').forEach(img => {
        img.addEventListener('click', () => {
            lightbox.classList.add('active');
            lightboxImg.src = img.src;
            // Atualiza o href do botão de download para a imagem atual
            downloadBtn.href = img.src;
        });
    });
    
    closeBtn.addEventListener('click', () => {
        lightbox.classList.remove('active');
    });
    
    // Fecha o lightbox ao clicar fora da imagem
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
        }
    });
});