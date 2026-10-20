// Current Language State Engine
let currentLang = 'km';

// DOM Elements
const langToggleBtn = document.getElementById('lang-toggle');
const langText = document.getElementById('lang-text');
const navLinks = document.querySelectorAll('.nav-links a');

// Language Switcher Function
langToggleBtn.addEventListener('click', () => {
    currentLang = currentLang === 'km' ? 'en' : 'km';
    langText.textContent = currentLang === 'km' ? 'English' : 'ភាសាខ្មែរ';
    
    updateStaticTranslations();
});

function updateStaticTranslations() {
    document.querySelectorAll('[data-km]').forEach(elem => {
        const text = elem.getAttribute(`data-${currentLang}`);
        if (text) {
            elem.innerHTML = text;
        }
    });
}

// Active Nav Link Scroll Highlight
window.addEventListener('scroll', () => {
    let fromTop = window.scrollY + 120;

    navLinks.forEach(link => {
        let section = document.querySelector(link.hash);
        if (section) {
            if (
                section.offsetTop <= fromTop &&
                section.offsetTop + section.offsetHeight > fromTop
            ) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        }
    });
});

// Initial Translation Sync
updateStaticTranslations();
