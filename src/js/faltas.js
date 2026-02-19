// Faltas Section Module

export function setupFaltasSection() {
    const faltasCard = document.getElementById('faltas-card');
    
    if (faltasCard) {
        faltasCard.addEventListener('click', () => {
            window.location.href = 'src/pages/faltas.html';
        });
        
        // Add cursor pointer on hover
        faltasCard.style.cursor = 'pointer';
    }
}

// Call on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupFaltasSection);
} else {
    setupFaltasSection();
}
