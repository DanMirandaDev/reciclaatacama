// add classes for mobile navigation toggling
    var CSbody = document.querySelector("body");
    const CSnavbarMenu = document.querySelector("#cs-navigation");
    const CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");

    CShamburgerMenu.addEventListener('click', function() {
        CShamburgerMenu.classList.toggle("cs-active");
        CSnavbarMenu.classList.toggle("cs-active");
        CSbody.classList.toggle("cs-open");
        // run the function to check the aria-expanded value
        ariaExpanded();
    });

    // Seleccionamos todos los enlaces del menú
const menuLinks = CSnavbarMenu.querySelectorAll("a");

menuLinks.forEach(link => {
    link.addEventListener("click", function () {
        // Al hacer clic en cualquier enlace, cerramos el menú
        CShamburgerMenu.classList.remove("cs-active");
        CSnavbarMenu.classList.remove("cs-active");
        CSbody.classList.remove("cs-open");

        // También actualizamos el aria-expanded
        ariaExpanded();
    });
});

       

    
    document.addEventListener('scroll', (e) => { 
        const scroll = document.documentElement.scrollTop;
        if(scroll >= 100){
    document.querySelector('body').classList.add('scroll')
        } else {
        document.querySelector('body').classList.remove('scroll')
        }
    });


    // mobile nav toggle code
    const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
        for (const item of dropDowns) {
            const onClick = () => {
            item.classList.toggle('cs-active')
        }
        item.addEventListener('click', onClick)
        }
                                


$(window).on("load", function() {
    var t = $(".portfolio-container");
    t.isotope({
        filter: ".new",
        animationOptions: {
            duration: 650,
            easing: "linear",
            queue: !6
        }
    }), $(".filters a").click(function() {
        $(".filters .active").removeClass("active"), $(this).addClass("active");
        var i = $(this).attr("data-filter");
        return t.isotope({
            filter: i,
            animationOptions: {
                duration: 650,
                easing: "linear",
                queue: !1
            }
        }), !1
    })
})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    const offset = 80; // altura de navbar
    const bodyRect = document.body.getBoundingClientRect().top;
    const targetRect = target.getBoundingClientRect().top;
    const targetPosition = targetRect - bodyRect - offset;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  });
});




// Abrir lightbox
const lightbox = document.getElementById('lightboxModal');
const lightboxImg = document.getElementById('lightboxImage');
const captionText = document.getElementById('caption');
const closeLightbox = document.getElementsByClassName('close-lightbox')[0];

document.querySelectorAll('.galeria-item img').forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'block';
        lightboxImg.src = img.src;
        captionText.innerText = img.alt || '';
    });
});

// Cerrar lightbox
closeLightbox.onclick = () => lightbox.style.display = 'none';
window.onclick = (e) => { if (e.target == lightbox) lightbox.style.display = 'none'; };