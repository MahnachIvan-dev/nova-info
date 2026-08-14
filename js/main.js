// ============================================================
// ⚙️ НАСТРОЙКИ САЙТА — ТОЛЬКО ЗДЕСЬ МЕНЯЕШЬ ВСЕ КАРТИНКИ!
// ============================================================
var SITE_CONFIG = {

    // ЛОГО СТУДИИ (в хедере и футере)
    logo: 'https://i.ibb.co/k2c77mCs/nova-av.jpg',

    // ТОП БАННЕР (широкий, над контентом)
    topBanner: {
        image: '',   // прямая ссылка на картинку
        link: ''     // куда ведёт клик
    },

    // ЛЕВЫЕ БОКОВЫЕ БАННЕРЫ (сверху вниз)
    // Можно добавить сколько угодно — просто копируй строки
    leftSidebarAds: [
        { image: '', link: '' },
        { image: '', link: '' }
    ],

    // ПРАВЫЕ БОКОВЫЕ БАННЕРЫ (сверху вниз)
    rightSidebarAds: [
        { image: '', link: '' },
        { image: '', link: '' }
    ],

    // КАРТИНКА ДЛЯ СТРАНИЦЫ 404
    notFoundImage: 'https://i.ibb.co/N6XST3D6/56121.jpg',

    // БАННЕР ПОРТФОЛИО (сверху на странице портфолио)
    portfolioBanner: '',

    // МУНИКС ЛОГО (в цитате на странице munixx)
    munixxLogo: 'https://i.ibb.co/Q3mgV8Hz/image.png',

    // NOVA ЛОГО (в цитате на странице портфолио)
    novaCiteLogo: 'https://i.ibb.co/k2c77mCs/nova-av.jpg',

    // 12 КАРТИНОК ГАЛЕРЕИ ПОРТФОЛИО
    // src — прямая ссылка на картинку
    // title — название под картинкой при наведении
    galleryImages: [
        { src: 'https://i.ibb.co/FkS9Qvqv/image.png', title: 'Проект 1' },
        { src: 'https://i.ibb.co/cS9f5M6X/image.png', title: 'Проект 2' },
        { src: 'https://i.ibb.co/Kx4p9H6V/image.png', title: 'Проект 3' },
        { src: 'https://i.ibb.co/XZqPXd36/image.png', title: 'Проект 4' },
        { src: 'https://i.ibb.co/VcRCmvrF/image.png', title: 'Проект 5' },
        { src: 'https://i.ibb.co/nqMkph5m/image.png', title: 'Проект 6' },
        { src: 'https://i.ibb.co/Nn6VXHf7/image.png', title: 'Проект 7' },
        { src: 'https://i.ibb.co/wNT6vFY0/image.png', title: 'Проект 8' },
        { src: 'https://i.ibb.co/0pbtxg1R/image.png', title: 'Проект 9' },
        { src: 'https://i.ibb.co/XfS2vDmF/image.png', title: 'Проект 10' },
        { src: 'https://i.ibb.co/213jWTWV/image.png', title: 'Проект 11' },
        { src: 'https://i.ibb.co/1YW1vxzx/image.png', title: 'Проект 12' }
    ],

    // ГИФКИ ВЫЛЕТАЮЩИЕ ИЗ КНОПКИ INFO
    // Прямые ссылки на .gif файлы
    gifs: [
        'https://i.postimg.cc/kGTb9ybx/2026-08-11-19-38-38-ezgif-com-video-to-gif-converter.gif',
        'https://i.postimg.cc/XJ3GCPKv/2026-08-11-19-59-21-ezgif-com-video-to-gif-converter-(1).gif',
        'https://i.postimg.cc/pyNtXntd/Animated-Emojies-512px-152.gif'
        ],

    // GOOGLE DOCS ID (для страницы Munixx)
    // Получить: File → Publish to web → взять ID из ссылки между /d/ и /pub
     munixxImages: {
        // Секция "О проекте"
        about: [
            'https://i.ibb.co/TxcvWzqM/image.png',  // первая картинка
            'https://i.postimg.cc/Gt24MCsh/image.png'   // вторая картинка (если нужна)
        ],
        // Секция "Документация"
        docs: [
            '',
            ''
        ],
        // Секция "Правила"
        rules: [
            '',
            ''
        ],
        // Секция "FAQ / Вопросы"
        faq: [
            '',
            ''
        ]
    }
};


// ============================================================
// 🚀 ДАЛЬШЕ КОД САЙТА — НЕ ТРОГАЙ
// ============================================================

// ====== ПОДСТАНОВКА ЛОГО И КАРТИНОК ИЗ КОНФИГА ======
(function applyConfig() {
    // Лого во всех местах где есть data-logo
    document.querySelectorAll('[data-logo]').forEach(function(el) {
        if (el.tagName === 'IMG') {
            el.src = SITE_CONFIG.logo;
        }
    });

    // Топ баннер
    var topBanner = document.querySelector('[data-top-banner]');
    if (topBanner) {
        var link = topBanner.querySelector('a');
        var img = topBanner.querySelector('img');
        if (link) link.href = SITE_CONFIG.topBanner.link || '';
        if (img) img.src = SITE_CONFIG.topBanner.image || '';
    }

    // Левые сайдбар-баннеры
    var leftSidebar = document.querySelector('[data-sidebar="left"]');
    if (leftSidebar) {
        fillSidebar(leftSidebar, SITE_CONFIG.leftSidebarAds);
    }

    // Правые сайдбар-баннеры
    var rightSidebar = document.querySelector('[data-sidebar="right"]');
    if (rightSidebar) {
        fillSidebar(rightSidebar, SITE_CONFIG.rightSidebarAds);
    }

    // Картинка 404
    var notFound = document.querySelector('[data-notfound-img]');
    if (notFound) notFound.src = SITE_CONFIG.notFoundImage;

    // Баннер портфолио
    var portfolioBanner = document.querySelector('[data-portfolio-banner]');
    if (portfolioBanner) portfolioBanner.src = SITE_CONFIG.portfolioBanner;

    // Munixx лого в цитате
    var munixxLogo = document.querySelector('[data-munixx-logo]');
    if (munixxLogo) munixxLogo.src = SITE_CONFIG.munixxLogo;

    // NOVA лого в цитате (портфолио)
    var novaCiteLogo = document.querySelector('[data-nova-cite-logo]');
    if (novaCiteLogo) novaCiteLogo.src = SITE_CONFIG.novaCiteLogo;

    // Галерея портфолио
    var gallery = document.querySelector('[data-gallery]');
    if (gallery) {
        gallery.innerHTML = '';
        SITE_CONFIG.galleryImages.forEach(function(item) {
            var div = document.createElement('div');
            div.className = 'gallery-item';
            div.onclick = function() { openLightbox(this); };
            div.innerHTML =
                '<img src="' + item.src + '" alt="' + item.title + '">' +
                '<div class="gallery-overlay"><span>' + item.title + '</span></div>';
            gallery.appendChild(div);
        });
    }

    // Google Docs iframe'ы
    var docAbout = document.querySelector('[data-doc="about"]');
    if (docAbout) docAbout.src = 'https://i.postimg.cc/LXfgvw31/Munixx-Media-Prezentacia-i-koncepcia-brenda.png' + SITE_CONFIG.googleDocs.about + '/pub?embedded=true';

    var docDocs = document.querySelector('[data-doc="docs"]');
    if (docDocs) docDocs.src = 'https://docs.google.com/document/d/' + SITE_CONFIG.googleDocs.docs + '/pub?embedded=true';

    var docRules = document.querySelector('[data-doc="rules"]');
    if (docRules) docRules.src = 'https://docs.google.com/document/d/' + SITE_CONFIG.googleDocs.rules + '/pub?embedded=true';

    var docFaq = document.querySelector('[data-doc="faq"]');
    if (docFaq) docFaq.src = 'https://docs.google.com/document/d/' + SITE_CONFIG.googleDocs.faq + '/pub?embedded=true';

    function fillSidebar(sidebar, ads) {
        sidebar.innerHTML = '';
        ads.forEach(function(ad) {
            var wrap = document.createElement('div');
            wrap.className = 'side-ad ad-slot';
            wrap.innerHTML =
                '<a href="' + (ad.link || '') + '" target="_blank" data-ad>' +
                '<img src="' + (ad.image || '') + '" alt="Ad" data-ad-img>' +
                '</a>';
            sidebar.appendChild(wrap);
        });
    }
})();

// ====== LOADER ======
window.addEventListener('load', function() {
    setTimeout(function() {
        var loader = document.querySelector('.loader-screen');
        if (loader) loader.classList.add('hidden');
    }, 500);
});

// ====== СКРЫТИЕ ПУСТЫХ РЕКЛАМНЫХ БЛОКОВ ======
(function initAdsLayout() {
    var adSlots = document.querySelectorAll('.ad-slot');

    adSlots.forEach(function(slot) {
        var link = slot.querySelector('[data-ad]');
        var img = slot.querySelector('[data-ad-img]');

        if (!link || !img) {
            slot.classList.add('ad-empty');
            return;
        }

        var href = (link.getAttribute('href') || '').trim();
        var src = (img.getAttribute('src') || '').trim();

        if (href === '' || href === '#' || src === '') {
            slot.classList.add('ad-empty');
            return;
        }

        if (img.complete) {
            if (img.naturalWidth === 0) {
                slot.classList.add('ad-empty');
            }
        } else {
            img.addEventListener('load', function() {
                if (img.naturalWidth === 0) {
                    slot.classList.add('ad-empty');
                }
                checkSidebar(slot);
            });
            img.addEventListener('error', function() {
                slot.classList.add('ad-empty');
                checkSidebar(slot);
            });
        }
    });

    setTimeout(function() {
        document.querySelectorAll('.sidebar').forEach(function(sidebar) {
            checkSidebarEl(sidebar);
        });
    }, 50);

    function checkSidebar(slot) {
        var sidebar = slot.closest('.sidebar');
        if (sidebar) checkSidebarEl(sidebar);
    }

    function checkSidebarEl(sidebar) {
        var visibleAds = sidebar.querySelectorAll('.ad-slot:not(.ad-empty)');
        if (visibleAds.length === 0) {
            sidebar.classList.add('sidebar-empty');
        } else {
            sidebar.classList.remove('sidebar-empty');
        }
    }
})();

// ====== МОБИЛЬНОЕ МЕНЮ ======
(function initMobileMenu() {
    var btn = document.getElementById('mobileMenuBtn');
    var nav = document.querySelector('.header-nav');
    if (!btn || !nav) return;

    btn.addEventListener('click', function() {
        btn.classList.toggle('active');
        nav.classList.toggle('active');
    });

    nav.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', function() {
            btn.classList.remove('active');
            nav.classList.remove('active');
        });
    });
})();

// ====== FLOATING GIFS ======
(function initFloatingGifs() {
    var container = document.getElementById('gifContainer');
    if (!container) return;

    var gifUrls = SITE_CONFIG.gifs;
    if (!gifUrls || gifUrls.length === 0) return;

    var sizes = ['size-sm', 'size-md', 'size-lg'];

    function spawnGif() {
        var gif = document.createElement('img');
        gif.className = 'floating-gif ' + sizes[Math.floor(Math.random() * sizes.length)];
        gif.src = gifUrls[Math.floor(Math.random() * gifUrls.length)];
        gif.alt = '';
        gif.onerror = function() { this.remove(); };

        var xOffset = Math.random() * 350 - 175;
        gif.style.left = (200 + xOffset) + 'px';

        var duration = 3 + Math.random() * 3;
        gif.style.animationDuration = duration + 's';
        gif.style.animationDelay = (Math.random() * 0.3) + 's';

        container.appendChild(gif);

        setTimeout(function() {
            if (gif.parentNode) gif.remove();
        }, (duration + 1) * 1000);
    }

    setTimeout(function() {
        for (var i = 0; i < 3; i++) {
            (function(index) {
                setTimeout(function() { spawnGif(); }, index * 300);
            })(i);
        }
        setInterval(spawnGif, 900);
    }, 1000);
})();

// ====== RADIAL MENU ======
(function initRadialMenu() {
    var infoBtn = document.getElementById('infoBtnMain');
    if (!infoBtn) return;

    var items = [
        { label: 'Munixx', icon: '📋', url: 'munixx.html', angle: 0 },
        { label: 'Портфолио NOVA', icon: '🎨', url: 'portfolio.html', angle: 60 },
        { label: 'Наши Проекты', icon: '🚀', url: 'projects.html', angle: 120 },
        { label: 'Наши Партнёры', icon: '🤝', url: 'partners.html', angle: 180 },
        { label: 'Комьюнити', icon: '👥', url: 'community.html', angle: 240 },
        { label: 'Услуги', icon: '⚙️', url: 'services.html', angle: 300 }
    ];

    var overlay = document.createElement('div');
    overlay.className = 'radial-overlay';
    document.body.appendChild(overlay);

    var menu = document.createElement('div');
    menu.className = 'radial-menu';

    var center = document.createElement('div');
    center.className = 'radial-center';
    center.textContent = 'INFO';
    menu.appendChild(center);

    var els = [];

    items.forEach(function(item, i) {
        var line = document.createElement('div');
        line.className = 'radial-line';
        menu.appendChild(line);

        var el = document.createElement('div');
        el.className = 'radial-item';
        el.innerHTML = '<span class="icon">' + item.icon + '</span>' + item.label;
        el.style.transitionDelay = (i * 0.05) + 's';

        el._angle = item.angle;
        el._line = line;

        el.addEventListener('click', function() {
            window.location.href = item.url;
        });

        menu.appendChild(el);
        els.push(el);
    });

    document.body.appendChild(menu);

    var isOpen = false;
    var cx = 0;
    var cy = 0;

    infoBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        var r = infoBtn.getBoundingClientRect();
        cx = r.left + r.width / 2;
        cy = r.top + r.height / 2;
        openMenu();
    });

    overlay.addEventListener('click', closeMenu);

    function openMenu() {
        if (isOpen) return;
        isOpen = true;

        var radius = window.innerWidth < 600 ? 130 : 180;

        overlay.classList.add('active');
        menu.classList.add('active');
        menu.style.left = cx + 'px';
        menu.style.top = cy + 'px';

        els.forEach(function(el) {
            var angleRad = (el._angle - 90) * Math.PI / 180;
            var ox = Math.cos(angleRad) * radius;
            var oy = Math.sin(angleRad) * radius;

            el._ox = ox;
            el._oy = oy;

            var w = 160;
            el.style.left = (ox - w / 2) + 'px';
            el.style.top = (oy - 22) + 'px';

            var len = Math.sqrt(ox * ox + oy * oy) - 40;
            var a = Math.atan2(oy, ox) * 180 / Math.PI;
            el._line.style.width = Math.max(0, len) + 'px';
            el._line.style.left = '0px';
            el._line.style.top = '0px';
            el._line.style.transform = 'rotate(' + a + 'deg)';
        });
    }

    function closeMenu() {
        isOpen = false;
        overlay.classList.remove('active');
        menu.classList.remove('active');
    }

    document.addEventListener('mousemove', function(e) {
        if (!isOpen) return;
        var dx = e.clientX - cx;
        var dy = e.clientY - cy;
        var angle = ((Math.atan2(dy, dx) * 180 / Math.PI + 90) % 360 + 360) % 360;

        var closest = null;
        var minDiff = Infinity;

        els.forEach(function(el) {
            var diff = Math.abs(angle - el._angle);
            if (diff > 180) diff = 360 - diff;
            if (diff < minDiff) {
                minDiff = diff;
                closest = el;
            }
        });

        els.forEach(function(el) {
            el.classList.remove('highlighted');
        });

        if (closest && minDiff < 40) {
            closest.classList.add('highlighted');
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeMenu();
    });
})();

// ====== LIGHTBOX ======
var lbImages = [];
var lbIndex = 0;

function openLightbox(el) {
    var galleryItems = document.querySelectorAll('.gallery-item');
    lbImages = [];

    galleryItems.forEach(function(item, i) {
        var img = item.querySelector('img');
        var caption = item.querySelector('.gallery-overlay span');
        lbImages.push({
            src: img.src,
            alt: img.alt,
            caption: caption ? caption.textContent : ''
        });
        if (item === el) lbIndex = i;
    });

    showLightbox();
}

function showLightbox() {
    var lb = document.getElementById('lightbox');
    var img = document.getElementById('lightboxImg');
    var cap = document.getElementById('lightboxCaption');
    var cnt = document.getElementById('lightboxCounter');

    if (!lb || !lbImages.length) return;

    img.src = lbImages[lbIndex].src;
    img.alt = lbImages[lbIndex].alt;
    cap.textContent = lbImages[lbIndex].caption;
    cnt.textContent = (lbIndex + 1) + ' / ' + lbImages.length;

    lb.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    var lb = document.getElementById('lightbox');
    if (lb) lb.classList.remove('active');
    document.body.style.overflow = '';
}

function nextImage() {
    lbIndex = (lbIndex + 1) % lbImages.length;
    showLightbox();
}

function prevImage() {
    lbIndex = (lbIndex - 1 + lbImages.length) % lbImages.length;
    showLightbox();
}

document.addEventListener('keydown', function(e) {
    var lb = document.getElementById('lightbox');
    if (!lb || !lb.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
});

document.addEventListener('click', function(e) {
    var lb = document.getElementById('lightbox');
    if (!lb || !lb.classList.contains('active')) return;
    if (e.target === lb) closeLightbox();
});

// ====== SCROLL FADE IN ======
var fadeObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(function(el) {
    fadeObserver.observe(el);
});

// ====== SMOOTH SCROLL ======
document.querySelectorAll('a[href^="#"]').forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        var target = document.querySelector(link.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
