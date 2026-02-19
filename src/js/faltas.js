// Faltas Section Module

export function setupFaltasSection() {
    const faltasLink = document.querySelector('[data-section="faltas"]');
    
    if (faltasLink) {
        faltasLink.addEventListener('click', () => {
            window.location.href = 'src/pages/faltas.html';
        });
    }
}

// Call on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupFaltasSection);
} else {
    setupFaltasSection();
}
