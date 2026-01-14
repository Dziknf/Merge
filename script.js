document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll('.carousel-item');
    const nextBtn = document.getElementById('nextSlide');
    const prevBtn = document.getElementById('prevSlide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.replace('opacity-0', 'opacity-100');
                slide.style.zIndex = "10";
            } else {
                slide.classList.replace('opacity-100', 'opacity-0');
                slide.style.zIndex = "0";
            }
        });
    }

    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        });

        prevBtn.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        });

        setInterval(() => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }, 6000);
    }

    const btnAkademik = document.getElementById('btn-akademik');
    const menuAkademik = document.getElementById('menu-akademik');

    if (btnAkademik && menuAkademik) {
        btnAkademik.addEventListener('click', (e) => {
            e.stopPropagation();
            menuAkademik.classList.toggle('hidden');
        });

        window.addEventListener('click', () => {
            menuAkademik.classList.add('hidden');
        });
    }

    const mobileNav = document.getElementById('mobile-nav');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (mobileNav) {
            if (currentScroll > lastScroll && currentScroll > 100) {
                mobileNav.style.transform = 'translateY(100%)';
                mobileNav.style.transition = 'transform 0.3s ease-in-out';
            } else {
                mobileNav.style.transform = 'translateY(0)';
            }
        }
        lastScroll = currentScroll;
    });
});