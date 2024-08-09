document.getElementById('language-toggle').addEventListener('click', function() {
    const elements = document.querySelectorAll('[data-lang-en]');
    const currentLang = this.textContent.includes('ไทย') ? 'en' : 'th';
    const newLang = currentLang === 'en' ? 'th' : 'en';
    elements.forEach(element => {
        element.innerHTML = element.getAttribute(`data-lang-${newLang}`);
    });
    this.textContent = newLang === 'en' ? 'Switch to ไทย' : 'Switch to English';
});
