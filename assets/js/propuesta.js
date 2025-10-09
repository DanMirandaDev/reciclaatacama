const faqItems = Array.from(document.querySelectorAll('.cs-faq-item'));
        for (const item of faqItems) {
            const onClick = () => {
            item.classList.toggle('active')
        }
        item.addEventListener('click', onClick)
        }
                                
        
        
function toggleInfo(){
const extra = document.getElementById('extra-info');
const btn = document.getElementById('toggle-btn');
extra.classList.toggle('show');
if(extra.classList.contains('show')){
btn.textContent = 'OCULTAR INFO';
}else{
btn.textContent = 'MÁS INFO';
}
}