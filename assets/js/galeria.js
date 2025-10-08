// Lightbox funcionalidad
const lightbox = document.getElementById('lightboxModal');
const lightboxImg = document.getElementById('lightboxImage');
const closeLightbox = document.getElementsByClassName('close-lightbox')[0];

document.querySelectorAll('.galeria-item img').forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'block';
        lightboxImg.src = img.src;
        captionText.innerText = img.alt || '';
    });
});

closeLightbox.onclick = () => lightbox.style.display = 'none';
window.onclick = (e) => { if (e.target == lightbox) lightbox.style.display = 'none'; };
