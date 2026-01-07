document.addEventListener("DOMContentLoaded", () => {
    const btnAkademik = document.getElementById('btn-akademik');
    const menuAkademik = document.getElementById('menu-akademik');
    const desktopLinks = document.querySelectorAll('.desktop-link');
    const mobileBtns = document.querySelectorAll('.mobile-item');
    const mobileNav = document.getElementById('mobile-nav');
    let lastScroll = 0;

    if (btnAkademik && menuAkademik) {
        btnAkademik.addEventListener('click', (e) => {
            e.stopPropagation();
            const isHidden = menuAkademik.classList.contains('hidden');
            menuAkademik.classList.toggle('hidden');
            
            if (isHidden) {
                btnAkademik.classList.add('after:w-full');
            } else {
                btnAkademik.classList.remove('after:w-full');
            }
        });

        window.addEventListener('click', () => {
            menuAkademik.classList.add('hidden');
            btnAkademik.classList.remove('after:w-full');
        });
    }

    desktopLinks.forEach(link => {
        link.addEventListener('click', function() {
            desktopLinks.forEach(l => {
                l.classList.remove('after:w-full');
                l.classList.add('after:w-0');
            });
            this.classList.remove('after:w-0');
            this.classList.add('after:w-full');
        });
    });

    mobileBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            mobileBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (mobileNav) {
            if (currentScroll > lastScroll && currentScroll > 80) {
                mobileNav.style.transform = 'translateY(100%)';
            } else {
                mobileNav.style.transform = 'translateY(0)';
            }
        }
        lastScroll = currentScroll;
    });

    const titles = document.querySelectorAll('h1');
    const contactCard = document.querySelector('#Kontak .bg-white');
    const infoItems = document.querySelectorAll('#Kontak .grid > div > div');
    const iframeMap = document.querySelector('iframe')?.parentElement;

    const elementsToAnimate = [...titles, contactCard, ...infoItems, iframeMap];

    elementsToAnimate.forEach((el) => {
        if (!el) return;
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.8s cubic-bezier(0.22, 1, 0.36, 1)";
    });

    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                }, 150); 
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    elementsToAnimate.forEach(el => {
        if (el) observer.observe(el);
    });
});