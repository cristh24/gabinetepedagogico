// Eventos Section Module

export function setupEventosSection() {
    const eventosCard = document.getElementById('eventos-card');
    
    if (eventosCard) {
        eventosCard.addEventListener('click', () => {
            window.location.href = 'src/pages/eventos.html';
        });
        
        // Add cursor pointer on hover
        eventosCard.style.cursor = 'pointer';
    }
}

// Call on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupEventosSection);
} else {
    setupEventosSection();
}
